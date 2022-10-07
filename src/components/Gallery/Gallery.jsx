import { useLiveQuery } from "dexie-react-hooks";

import classes from "./Gallery.module.css";
import getPhotoUrl from "get-photo-url";
import { db } from "../../dexie";
import Spinner from "../Spinner/Spinner";

const Gallery = () => {
  const allPhotos = useLiveQuery(() => db.gallery.toArray(), []);

  const addPhotoHandler = async () => {
    db.gallery.add({
      url: await getPhotoUrl("#addPhotoInput"),
    });
  };

  const removePhotoHandler = (id) => {
    db.gallery.delete(id);
  };

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhotoHandler}>
        <i className="add-photo-button fa-solid fa-square-plus" title="Click to add photo"></i>
      </label>

      <section className={classes.gallery}>
        {!allPhotos && <Spinner />}
        {allPhotos?.map((photo) => {
          return (
            <div className={classes.item} key={photo.id}>
              <img src={photo.url} className={classes["item-image"]} alt="" />
              <button
                className={classes["delete-button"]}
                onClick={() => removePhotoHandler(photo.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Gallery;
