import { useState } from "react";
import './Cities.css'

interface IProps {
    dylanCities: string[]
    sabita: string
}

const Cities = ({dylanCities, sabita}: IProps) => {

  const [selectedIdx, setSelectedIdx] = useState(-1);
  return (
    <>
      <h1 className="sabita">{sabita}</h1>
      <ul className="list-group">
        {dylanCities.map((city, idx) =>
          selectedIdx === idx ? (
            <li
              className="list-group-item active"
              key={idx}
              onClick={() => setSelectedIdx(-1)}
            >
              {city}
            </li>
          ) : (
            <li
              className="list-group-item"
              key={idx}
              onClick={() => setSelectedIdx(idx)}
            >
              {city}
            </li>
          )
        )}
      </ul>
    </>
  );
};
export default Cities;
