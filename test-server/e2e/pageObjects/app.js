import { root } from "./index";

const resultSelector = "#result";

export const getResultText = async () => {
  const app = await root();
  return await app.$eval(resultSelector, (el) => el.innerText);
};
