import { useEffect, useRef, useState } from "react";
import { API_ADDRESS, API_ADDRESS_CHARACTERS } from "../../constant/address";
import CharacterComp from "../../components/modules/CharacterComp";
function Search() {
  const [searchText, setSearchText] = useState("");
  const timeOutRef = useRef(null);
  const searchIdleTime = 2000; //2 Second
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
    

  async function getCharacters(searchText) {
    setIsError(false);
    try {
      
      const response = await fetch(
        `${API_ADDRESS}/${API_ADDRESS_CHARACTERS}/?name=${searchText}&gender=${gender}&status=${status}`
      );
      if (response.status == 404) {
        throw new Error("Not Found");
      }
      const responseJson = await response.json();
      setData(responseJson);
    } catch (err) {
      setData(null);
      setIsError(true);
    }
  }
  useEffect(() => {
    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      if (searchText?.trim()) {
        getCharacters(searchText);
      }
    }, searchIdleTime);
  }, [searchText,gender,status]);

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-4 items-center">
        <input
          className="p-2"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <span>gender : </span>{" "}
        <select
          className="p-2"
          name="gender"
          id="gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="">all</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <span>status : </span>{" "}
        <select
          className="p-2"
          name="status"
          id="status"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option value="">all</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {isError ? (
        <div>Something is Wrong or Not Found 404</div>
      ) : (
        <div className="w-full grid grid-cols-2 auto-rows-fr grid-flow-row gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {data?.results?.map((characterData) => {
            return (
              <CharacterComp key={characterData.id} data={characterData} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;

//