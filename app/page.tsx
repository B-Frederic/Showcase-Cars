import Image from "next/image";
// Components
import Hero from '@/components/Hero'
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import CarCard from "@/components/CarCard";
// Utils
import { fetchCars } from "@/utils";

export default async function Home() {

  const allCars = await fetchCars();    

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
                <Filter title="fuel" />
                <Filter title="year" />
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

          {/* <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          /> */}
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
