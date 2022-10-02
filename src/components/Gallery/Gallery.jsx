import { useState } from "react";

import classes from "./Gallery.module.css";
import getPhotoUrl from "get-photo-url";

const Gallery = () => {
  const [allPhotos, setAllPhotos] = useState([]);

  const addPhotoHandler = async () => {
    const newPhoto = {
      id: Date.now(),
      url: await getPhotoUrl("#addPhotoInput"),
    };

    setAllPhotos([newPhoto, ...allPhotos]);
  };

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhotoHandler}>
        <i className="add-photo-button fa-solid fa-square-plus"></i>
      </label>

      <section className={classes.gallery}>
        {allPhotos.map((photo) => {
          return (
            <div className={classes.item} key={photo.id}>
              <img src={photo.url} className={classes["item-image"]} alt="" />
              <button className={classes["delete-button"]}>Delete</button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Gallery;
