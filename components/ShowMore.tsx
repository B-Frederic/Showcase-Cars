"use client";
// Next
import { useRouter } from "next/navigation";
// Types
import { ShowMoreProps } from "@/types";
// Utils
import { updateSearchParams } from "@/utils";
// Components
import Button from "./Button";


const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {

  const router = useRouter();

  const handleNavigation = () => {

    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          btnType="button"
          title="En afficher 10 de plus"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;