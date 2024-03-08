interface IProps {
    pokemon: {
        id: number,
        name: string,
        img: string,
        abilities: string[]
    }
}

const PokemonCard = (props: IProps) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.pokemon.img} className="card-img-top" alt={props.pokemon.name} />
        <div className="card-body">
          <h5 className="card-title">
            {props.pokemon.name} Pokemon #:{props.pokemon.id}
          </h5>
          <ul>
            {props.pokemon.abilities.map((ability, idx) => (
              <li key={idx}>{ability}</li>
            ))}
          </ul>
          <a href="#" className="btn btn-primary">
            Catch
          </a>
        </div>
      </div>
    </div>
  );
};
export default PokemonCard;
