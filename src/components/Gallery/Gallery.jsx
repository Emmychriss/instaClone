import { useLiveQuery } from "dexie-react-hooks";

import classes from "./Gallery.module.css";
import getPhotoUrl from "get-photo-url";
import { db } from "../../dexie";

const Gallery = () => {
  const allPhotos = useLiveQuery(() => db.gallery.toArray(), []);
  console.log(allPhotos);

  const addPhotoHandler = async () => {
    db.gallery.add({
      url: await getPhotoUrl("#addPhotoInput"),
    });
  };

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhotoHandler}>
        <i className="add-photo-button fa-solid fa-square-plus"></i>
      </label>

      <section className={classes.gallery}>
        {allPhotos?.map((photo) => {
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
