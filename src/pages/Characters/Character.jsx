import { useParams } from "react-router-dom";
import useCharacterSingle from "../../utils/hooks/useCharacterSingle";
import CharacterSingle from "../../components/templates/CharacterSingle";

function Character() {
  const params = useParams();
  const characterId = params.characterId;
  const { isLoading, characterData } = useCharacterSingle(characterId);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (characterData.name) {
    return <CharacterSingle data={characterData} />
  }
  <div>Error</div>;
}

export default Character;
