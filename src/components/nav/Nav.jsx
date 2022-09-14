import classes from "./Nav.module.css";
import instaLogo from "../../assets/instaLogo.png";

const Nav = () => {
  return (
    <nav>
      <button className={classes.logo}>
        <img src={instaLogo}></img>
      </button>
      <input
        type="text"
        className={classes.search}
        placeholder="search"
      ></input>
      <span className={classes["nav-links"]}>
        <button>
          <i className="fas fa-home"></i>
        </button>
        <button>
          <i className="fas fa-comment-alt"></i>
        </button>
        <button>
          <i className="fas fa-compass"></i>
        </button>
        <button>
          <i className="fas fa-heart"></i>
        </button>
      </span>
    </nav>
  );
};

export default Nav;
