import Dexie from "dexie";

const db = new Dexie("testDb");
db.version(1).stores({
  persons: `++id,date,person`,
});

export default db;
