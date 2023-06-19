"use client";
import React, { useState } from "react";
// Components
import SearchManufacturer from "./SearchManufacturer";
// Picture
import Image from "next/image";


const SearchBar = ({ setManufacturer, setModel }) => {

  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
      return alert("Champ vide");
    }

    setModel(searchModel), setManufacturer(searchManufacturer);
  };


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer selected={searchManufacturer} 
        setSelected={setSearchManufacturer} />
      </div>
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
          placeholder="Tiguan..."
          className="searchbar__input"
        />
      </div>
      <button type="submit" className="h-[48px] outline bg-primary-blue rounded-full text-white my-2 px-4 py-1 ">Rechercher</button>
    </form>
  );
};

export default SearchBar;
