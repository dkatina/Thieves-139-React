import { DocumentData, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "../../firebase";
import Nav from "../../components/Nav/Nav";

const Team = () => {
  const [team, setTeam] = useState<Array<DocumentData>>([]);

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = async () => {
    setTimeout(async () => {
      if (auth.currentUser) {
        const allPokemon = await getDocs(
          collection(db, "users", auth.currentUser.uid, "team")
        );
        allPokemon.forEach((pokemon) => {
          setTeam((curr) => [...curr, pokemon.data()]);
        });
      } else {
        console.log("no user");
      }
    }, 300);
  };

  return (
    <>
        <Nav/>
      <h1 className="text-center text-light">Your Current Team</h1>
      {team.map((pokemon) => (
        <div className="card mx-auto mt-3" style={{ width: "18rem" }}>
          <img src={pokemon.img} className="card-img-top" alt={pokemon.id} />
          <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
            <ul>
                <li>{pokemon.abilities[0]}</li>
                <li>{pokemon.abilities[1]}</li>
            </ul>
            <a href="#" className="btn btn-danger">
              Release
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
export default Team;
