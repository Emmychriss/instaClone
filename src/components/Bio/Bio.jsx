import classes from "./Bio.module.css";
import profileIcon from "../../assets/profileIcon.svg";

const Bio = (props) => {
  const editForm = (
    <form className={classes["edit-bio-form"]}>
      <input type="text" id="" placeholder="Your Name"></input>
      <input type="text" id="" placeholder="About You"></input>
      <br />
      <button type="button" className={classes["cancel-button"]}>
        Cancel
      </button>
      <button type="button">Save</button>
    </form>
  );

  return (
    <section className={classes.bio}>
      <div
        className={classes["profile-photo"]}
        role="button"
        title="Click to edit photo"
      >
        <img src={profileIcon} alt="Profile"></img>
      </div>
      <div className={classes["profile-info"]}>
        <p className={classes.name}>Nduka Emmanuel</p>
        <p className={classes.about}>
          Learning and growing in the tech space to become better!
        </p>
        {editForm}
        <button>Edit</button>
      </div>
    </section>
  );
};

export default Bio;
