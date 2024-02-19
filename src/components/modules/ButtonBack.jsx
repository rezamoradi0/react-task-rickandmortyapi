import {useNavigate} from "react-router-dom"
function ButtonBack() {
    const navigate=useNavigate();
    return (
  <button className="px-4 py-2 bg-gray-50 text-black rounded-lg text-lg w-fit h-fit" onClick={()=>{
    navigate(-1);
  }}> Back </button>
    )
}

export default ButtonBack
