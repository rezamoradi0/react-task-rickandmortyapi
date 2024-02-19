import { useEffect, useState } from "react";
import { API_ADDRESS, API_ADDRESS_CHARACTERS } from "../../constant/address";

function useCharacterSingle(id) {
  const [isLoading, setIsLoading] = useState(true);
  const [characterData, setCharacterData] = useState(null);
  async function getCharacterData(id) {
    
    setIsLoading(true);
    const response = await fetch(
      `${API_ADDRESS}/${API_ADDRESS_CHARACTERS}/${id}`
    );
    const responseJson = await response.json();
    setCharacterData(responseJson);
    setIsLoading(false);
  }
  useEffect(() => {
      if(id){
        getCharacterData(id);
      }else {
        setIsLoading(false);
      }
    
  }, [id]);
  return {isLoading,characterData}
}

export default useCharacterSingle;
