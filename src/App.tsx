import PokemonForm from "./views/PokemonForm/PokemonForm";
import SignUp from "./views/SignUp/SignUp";
import SignIn from "./views/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Team from "./views/Team/Team";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/pokemonFinder" element={<PokemonForm/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </>
  );
};
export default App;
