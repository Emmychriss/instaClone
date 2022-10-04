import Dexie from "dexie";

export const db = new Dexie("instaClone");
db.version(1).stores({
  bio: ",name, about",
  gallery: "++id, url",
});
