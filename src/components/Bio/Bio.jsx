import { useState, useEffect } from "react";
import "./Bio.css";
import profileIcon from "../../assets/profileIcon.svg";
import getPhotoUrl from "get-photo-url";
import { db } from "../../dexie";

const Bio = (props) => {
  const [userDetails, setUserDetails] = useState({
    name: "Nduka Emmanuel",
    about: "Learning and growing in the tech space to become better!",
  });
  const [editformIsOpen, setEditFormIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileIcon);

  useEffect(() => {
    const setDataFromDB = async () => {
      const userDetailsFromDB = await db.bio.get("info");
      const userProfilePhotoFromDB = await db.bio.get("profilePhoto");
      userDetailsFromDB && setUserDetails(userDetailsFromDB);
      userProfilePhotoFromDB && setProfilePhoto(userProfilePhotoFromDB);
    };

    setDataFromDB();
  }, []);

  const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl("#profilePhotoInput");
    setProfilePhoto(newProfilePhoto);
    await db.bio.put(newProfilePhoto, "profilePhoto");
  };

  const updateUserDetails = async (event) => {
    event.preventDefault();

    const objectData = {
      name: document.querySelector("#nameOfUser").value,
      about: document.querySelector("#aboutUser").value,
    };

    setUserDetails(objectData);

    await db.bio.put(objectData, "info");

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
      <input
        type="text"
        id="nameOfUser"
        defaultValue={userDetails.name}
        placeholder="Your Name"
      ></input>
      <input
        type="text"
        id="aboutUser"
        defaultValue={userDetails.about}
        placeholder="About You"
      ></input>
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
