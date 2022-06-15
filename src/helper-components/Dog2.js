import React from "react";
import { useQuery } from "react-query";
import { getAnimal } from "../components/FetchersQuery";

function Dog2() {
  const { data } = useQuery("dog", () => getAnimal());

//   if(isLoading) return <h1>Loading...</h1>
  return (
    <div>
      <img width={200} src={data?.url} alt={"dogs"} />
    </div>
  );
}

export default Dog2;
