import { spawn, Thread, Worker } from "threads";

async function master(name) {
  const helloWorker = await spawn(new Worker("./workers/hello"));
  const result = await helloWorker.hashPassword(name);

  await Thread.terminate(helloWorker);

  return result;
}

export default master;
