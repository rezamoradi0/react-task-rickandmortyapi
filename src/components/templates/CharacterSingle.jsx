import ButtonBack from "../modules/ButtonBack";

function CharacterSingle({ data }) {
  return (
    <div className="h-full w-11/12 mx-auto flex gap-x-2 p-4 rounded-lg bg-zinc-700">
      <img src={data.image} alt={data.name}  className="w-1/3 rounded-lg object-cover object-center"/>
      <div className=" p-4 flex flex-col justify-between grow" >
        <div>Name :  {data.name}</div>
        <div>Status :  {data.status}</div>
        <div>Sdivecies :  {data.species}</div>
        <div>Gender :  {data.gender}</div>
        <div>location :  {data.location.name}</div>
        <div>location link :  {data.location.url}</div>
        <div>created :  {data.created}</div>

      </div>
      <ButtonBack/>
    </div>
  );
}

export default CharacterSingle;
