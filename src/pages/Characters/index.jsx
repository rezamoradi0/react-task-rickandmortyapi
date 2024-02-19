import { useEffect, useState } from "react"
import useCharactersPage from "../../utils/hooks/useCharactersPage"
import CharacterComp from "../../components/modules/CharacterComp";

function Characters() {
    const {isLoading,data}=useCharactersPage();
    return (
        <div className="w-full grid grid-cols-5 auto-rows-fr grid-flow-row gap-4 p-4">
          {data?.results?.map((characterData)=>{
            return <CharacterComp key={characterData.id} data={characterData}/>
          })}
        </div>
    )
}

export default Characters
