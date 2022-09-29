import picture1 from "../../assets/picture1.jpg";
import picture2 from "../../assets/picture2.jpg";
import picture3 from "../../assets/picture3.jpg";
import picture4 from "../../assets/picture4.jpg";
import picture5 from "../../assets/picture5.jpg";
import picture6 from "../../assets/picture6.jpg";

import classes from "./Gallery.module.css";

const Gallery = () => {
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoIInput">
        <i className="add-photo-button fa-solid fa-square-plus"></i>
      </label>

      <section className={classes.gallery}>
        <div className={classes.item}>
          <img src={picture1} className={classes["item-image"]} alt="" />
          <button className={classes["delete-button"]}>Delete</button>
        </div>
        <div className={classes.item}>
          <img src={picture2} className={classes["item-image"]} alt="" />
          <button className={classes["delete-button"]}>Delete</button>
        </div>
        <div className={classes.item}>
          <img src={picture3} className={classes["item-image"]} alt="" />
          <button className={classes["delete-button"]}>Delete</button>
        </div>
        <div className={classes.item}>
          <img src={picture4} className={classes["item-image"]} alt="" />
          <button className={classes["delete-button"]}>Delete</button>
        </div>
        <div className={classes.item}>
          <img src={picture5} className={classes["item-image"]} alt="" />
          <button className={classes["delete-button"]}>Delete</button>
        </div>
        <div className={classes.item}>
          <img src={picture6} className={classes["item-image"]} alt="" />
          <button className={classes["delete-button"]}>Delete</button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
