import { CiShoppingCart } from "react-icons/ci";

interface IProps {
  numItems: number
}

const Nav = (props: IProps) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Thieves Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <span className="navbar-text">
                <CiShoppingCart size={30} />
                <span>{props.numItems}</span>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
