import  getData  from "./app.js";

(async () => {
  let result = await getData(1, 1);
  console.log(result);
})();
