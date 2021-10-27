import { expose } from "threads/worker";

expose({
  hashPassword(name) {
    return `hello ${name}`;
  },
});
