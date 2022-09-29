import { useState } from "react";
import classes from "./Bio.module.css";
import profileIcon from "../../assets/profileIcon.svg";

const Bio = (props) => {
  const [userDetails, setUserDetails] = useState({
    name: "Nduka Emmanuel",
    about: "Learning and growing in the tech space to become better!",
  });

  const [editformIsOpen, setEditFormIsOpen] = useState(false);

  const updateUserDetails = (event) => {
    event.preventDefault();
    setUserDetails({
      name: document.querySelector("#nameOfUser").value,
      about: document.querySelector("#aboutUser").value,
    });

    setEditFormIsOpen(false);
  };

  const openEditForm = () => {
    setEditFormIsOpen(true);
  };

  const closeEditForm = () => {
    setEditFormIsOpen(false);
  };

  const editButton = <button onClick={openEditForm}>Edit</button>;

  const editForm = (
    <form
      className={classes["edit-bio-form"]}
      onSubmit={(e) => updateUserDetails(e)}
    >
      <input type="text" id="nameOfUser" placeholder="Your Name"></input>
      <input type="text" id="aboutUser" placeholder="About You"></input>
      <br />
      <button
        type="button"
        className={classes["cancel-button"]}
        onClick={closeEditForm}
      >
        Cancel
      </button>
      <button type="submit">Save</button>
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
        <p className={classes.name}>{userDetails.name}</p>
        <p className={classes.about}>{userDetails.about}</p>
        {editformIsOpen ? editForm : editButton}
      </div>
    </section>
  );
};

export default Bio;
