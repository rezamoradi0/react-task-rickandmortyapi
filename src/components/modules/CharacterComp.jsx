import { Link } from "react-router-dom";
import { API_ADDRESS_CHARACTERS } from "../../constant/address";
function CharacterComp({ data }) {
  return (
    <div className=" col-span-1 row-span-1  rounded-lg overflow-hidden border border-gray-600 flex">
      <img
        src={data.image}
        className="w-1/3  h-full object-cover object-center "
        alt={data.name}
      />
      <div className="flex flex-col items-center justify-between p-4  h-full grow gap-y-2">
        <p>{data.name}</p>
        <Link
          className="p-2 bg-gray-600 rounded-lg w-2/3 text-center "
          to={`/${API_ADDRESS_CHARACTERS}/${data.id}`}
        >
          Info
        </Link>
      </div>
    </div>
  );
}

export default CharacterComp;
