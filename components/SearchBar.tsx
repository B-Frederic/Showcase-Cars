"use client";
// React
import React, { useState } from "react";
// React Icons
import { ImCross } from "react-icons/im";
// Picture
import Image from "next/image";
// Types
import { CustomFilterProps } from "@/types";



const SearchBar = ({ setModel }: CustomFilterProps) => {

  const [searchModel, setSearchModel] = useState("");


  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchModel.trim() === "") {
      return alert("Champ vide");
    }

    setModel(searchModel)
  };

  const handleResetSearchModel = () => {
    setSearchModel("");
    setModel("");
  }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          sizes=""
          className="absolute w-[20px] h-[20px] ml-4"
          alt="voiture model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(event) => setSearchModel(event.target.value)}
          placeholder="Model..."
          className="searchbar__input"
        />
        {
          searchModel && (
              <p className="absolute right-4 text-red-500 lg:hover:text-lg lg:cursor-pointer" onClick={handleResetSearchModel}><ImCross /></p>
          )
        }
      </div>
      <button type="submit" className="h-[48px] outline bg-primary-blue rounded-r-full text-white my-2 px-4 py-1">Go</button>
    </form>
  );
};

export default SearchBar;
