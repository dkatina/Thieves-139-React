import Button from "@mui/material/Button";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useContext } from "react";
import { PokeContext } from "../../context/PokeContext";

interface IProps {
  pokemon: {
    id: number;
    name: string;
    img: string;
    abilities: string[];
    type: string
  };
}


const PokemonCard = ({ pokemon: { id, name, img, abilities, type} }: IProps) => {
  
  const {setFavPoke} = useContext(PokeContext)
  const catchPokemon = async () => {
    if (auth.currentUser) {
      await setDoc(doc(db, "users", auth.currentUser.uid, "team", type), {
        id: id,
        name: name,
        img: img,
        abilities: abilities
      });
      alert(`Caught ${name}`)
    }
  }

  const favPokemon = () =>{
    setFavPoke({name: name, img: img, ability: abilities[0]})
  }

  return (
    <div className="mt-3">
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">
            {name[0].toUpperCase() + name.slice(1)} #{id}
          </h5>
          <ul>
            {abilities.map((ability, idx) => (
              <li key={idx}>{ability}</li>
            ))}
          </ul>
          <Button
            sx={{
              backgroundColor: "#4fc3f7",
              ":hover": {
                backgroundColor: "white",
                color: "#4fc3f7",
              },
              width: "100%",
            }}
            variant="contained"
            onClick={catchPokemon}
          >
            Catch
          </Button>
          <Button
            sx={{
              backgroundColor: "#4fc3f7",
              ":hover": {
                backgroundColor: "white",
                color: "#4fc3f7",
              },
              width: "100%",
            }}
            variant="contained"
            onClick={favPokemon}
          >
            Favorite
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PokemonCard;
