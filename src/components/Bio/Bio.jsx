import { useState } from "react";
import "./Bio.css";
import profileIcon from "../../assets/profileIcon.svg";
import getPhotoUrl from "get-photo-url";

const Bio = (props) => {
  const [userDetails, setUserDetails] = useState({
    name: "Nduka Emmanuel",
    about: "Learning and growing in the tech space to become better!",
  });

  const [editformIsOpen, setEditFormIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileIcon);

  const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl("#profilePhotoInput");
    setProfilePhoto(newProfilePhoto);
  };

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
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input type="text" id="nameOfUser" placeholder="Your Name"></input>
      <input type="text" id="aboutUser" placeholder="About You"></input>
      <br />
      <button type="button" className="cancel-button" onClick={closeEditForm}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );

  return (
    <section className="bio">
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
        <div
          className="profile-photo"
          role="button"
          title="Click to update photo"
        >
          <img src={profilePhoto} alt="Profile Pic"></img>
        </div>
      </label>

      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>
        {editformIsOpen ? editForm : editButton}
      </div>
    </section>
  );
};

export default Bio;
