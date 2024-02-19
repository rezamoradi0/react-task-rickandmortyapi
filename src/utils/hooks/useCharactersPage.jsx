import { useEffect, useState } from "react";
import { API_ADDRESS, API_ADDRESS_CHARACTERS } from "../../constant/address";
function useCharactersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);
  function nextPage() {}
  function pervPage() {}
  async function getPage() {
    const pageIndex = page ? `?page=${page}` : "";
    const response = await fetch(
      `${API_ADDRESS}/${API_ADDRESS_CHARACTERS}/${pageIndex}`
    );
    const responseJson = await response.json();
    console.log(responseJson);
    setData(responseJson);
    setIsLoading(false);
  }
  useEffect(() => {
    getPage();
  }, [page]);
  return { isLoading, nextPage, pervPage, setPage, data };
}

export default useCharactersPage;
