import Cards from "./Card";
import GetData from "../GetData";
import { useState } from "react";

export const Team = () => {
  const [newArray, setNewArray] = useState([]);

  const speArray = (data) => {
    setNewArray(data);
  };

  return (
    <>
      <div className="w-full flex justify-center mb-[10rem] flex-col items-center gap-10">
        <h1 className="pt-[5rem] text-3xl text-[#0D4C94]">THE TEAM MEMBERS</h1>
        <div className="flex-wrap flex gap-10 justify-center w-[75%]">
          <Cards
            arr={newArray}
            width={300}
            height={340}
            className={"card"}
            img={"/img/dummy.jpg"}
          />
        </div>
      </div>
      <GetData func={speArray} link={`${import.meta.env.VITE_BACKEND_URL}`} />
    </>
  );
};
