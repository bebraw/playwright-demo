import { spawn, Thread, Worker } from "threads";
import db from "./db";

async function master(name) {
  const helloWorker = await spawn(new Worker("./workers/hello"));
  const result = await helloWorker.hashPassword(name);

  // Just add something to the db to prove it works within a worker.
  // Ideally db handling would go through another worker and messaging.
  const id = await db.persons.put({
    date: Date.now(),
    person: "Tester",
  });

  await Thread.terminate(helloWorker);

  return { result, id };
}

export default master;
