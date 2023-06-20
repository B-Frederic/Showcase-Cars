"use client";
import Image from "next/image";
// React
import { useEffect, useState } from "react";
// React icons
import { AiOutlineArrowUp } from "react-icons/ai";
// Components
import Hero from '@/components/Hero'
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";
// Utils
import { fetchCars } from "@/utils";
// Data
import { fuels, manufacturers, yearsOfProduction } from "@/constants/data";

export default function Home() {

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(12);
  const [car, setCar] = useState("");

  const getCars = async () => {    

    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 12,
        model: model || "",
        car: car || "",
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
  }, [fuel, year, limit, manufacturer, model, car])

  // Scroll event
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {

    const onScroll = (event) => {
      setScrollTop(event.target.documentElement.scrollTop);
      setScrolling(event.target.documentElement.scrollTop > 1400);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [scrollTop]);

  // Target "Catalogue"
  const handleScroll = () => {
    const target = document.getElementById("discover");

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
            <h2 className="text-4xl font-extrabold">Catalogue des voitures</h2>
            <p>Trouver la voiture de vos rêves sans plus attendre</p>
        </div>
        <div className="home__filters">
            <div className="flex items-center justify-center max-lg:flex-col">
              <div className="flex items-center mx-2">
                <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
              </div>
              <div className="flex max-md:flex-col max-md:my-4 max-lg:mt-4 ">
                <div className="z-50 flex items-center mx-2 max-md:my-2 max-md:w-[250px] max-md:justify-between">
                  <p className="mr-2 font-semibold">Marque :</p>
                  <Filter title="car" setFilter={setCar} options={manufacturers} />
                </div>
                <div className="z-40 flex items-center mx-2 max-md:my-2 max-md:w-[250px] max-md:justify-between">
                  <p className="mr-2 font-semibold">Carburant :</p>
                  <Filter title="fuel" setFilter={setFuel} options={fuels} />
                </div>
                <div className="z-30 flex items-center mx-2 max-md:my-2 max-md:w-[250px] max-md:justify-between">
                  <p className="mr-2 font-semibold">Année :</p>
                  <Filter title="year" setFilter={setYear} options={yearsOfProduction} />
                </div>
              </div>
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
      {
        scrolling && (
          <div className="lg:hidden fixed right-2 bottom-2 w-[40px] h-[40px] rounded-full flex items-center justify-center opacity-[0.7] bg-blue-600 text-xl"><AiOutlineArrowUp className="text-white" onClick={handleScroll} /></div>
        )
      }
    </main>
  )
}
