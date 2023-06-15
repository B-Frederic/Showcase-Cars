import Image from "next/image";
// Components
import Hero from '@/components/Hero'
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";
// Utils
import { fetchCars } from "@/utils";
// Types
import { HomeProps } from "@/types";
// Data
import { fuels, yearsOfProduction } from "@/constants/data";

export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  }); 

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
            <h2 className="text-4xl font-extrabold">Catalogue voitures</h2>
            <p>Trouver la voiture de vos rêves sans plus attendre</p>
        </div>

        <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
                <Filter title="fuel" options={fuels} />
                <Filter title="year" options={yearsOfProduction} />
            </div>
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>

          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Désolé, aucun résultat</h2>
          <p>{allCars?.message}</p>
        </div>
      )}

    </main>
  )
}
