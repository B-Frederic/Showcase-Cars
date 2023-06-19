"use client";
import Image from "next/image";
// Components
import Hero from '@/components/Hero'
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";
// Utils
import { fetchCars } from "@/utils";
// Data
import { fuels, yearsOfProduction } from "@/constants/data";
import { useEffect, useState } from "react";

export default function Home() {

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(12);

  const getCars = async () => {

    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 12,
        model: model || "",
      }); 

      setAllCars(result);
  
    } catch (error) {

      console.log(error);
      
    } finally {

      setLoading(false);
    }
  }
  
  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model])


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
            <h2 className="text-4xl font-extrabold">Catalogue des voitures</h2>
            <p>Trouver la voiture de vos rêves sans plus attendre</p>
        </div>
        <div className="home__filters">
            <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
            <div className="home__filter-container">
                <Filter title="fuel" setFilter={setFuel} options={fuels} />
                <Filter title="year" setFilter={setYear} options={yearsOfProduction} />
            </div>
        </div>
      </div>
      {allCars.length > 0 ? (
        <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
          {
            loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                src="/loader.gif"
                alt="chargement"
                sizes=""
                width={50}
                height={50}
                className="object-contain"
                />
              </div>
            )
          }
          <ShowMore
            pageNumber={limit / 12}
            isNext={limit > allCars.length}
            setLimit={setLimit}
          />
        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='my-[150px] text-center text-black text-xl font-bold'>Désolé, il n'y a aucun résultat correspondant pour cette recherche.</h2>
        </div>
      )}
    </main>
  )
}
