import { useParams } from "react-router-dom"

function Character() {
    const params=useParams();

    return (
        <div>
            {params&&params.characterId}
        </div>
    )
}

export default Character
