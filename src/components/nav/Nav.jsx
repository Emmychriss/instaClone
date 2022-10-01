import classes from "./Nav.module.css";
import instaLogo from "../../assets/instaLogo.png";

const Nav = () => {
  return (
    <nav>
      <button className={classes.logo}>
        <img src={instaLogo} alt="Instagram logo"></img>
      </button>
      <input
        type="text"
        className={classes.search}
        placeholder="Search"
      ></input>
      <span className={classes["nav-links"]}>
        <button>
          <i className="fa-solid fa-house"></i>
        </button>
        <button>
          <i className="fa-regular fa-comment"></i>
        </button>
        <button>
          <i className="fa-regular fa-square-plus"></i>
        </button>
        <button>
          <i className="fa fa-compass"></i>
        </button>
        <button>
          <i className="fa-regular fa-heart"></i>
        </button>
        <button>
          <i className="fa-regular fa-circle-user"></i>
        </button>
      </span>
    </nav>
  );
};

export default Nav;
