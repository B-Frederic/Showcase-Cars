"use client";
// Types
import { ShowMoreProps } from "@/types";
// Components
import Button from "./Button";


const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

  const handleNavigation = () => {

    const newLimit = (pageNumber + 1) * 12;

    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          btnType="button"
          title="Afficher davantage"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;