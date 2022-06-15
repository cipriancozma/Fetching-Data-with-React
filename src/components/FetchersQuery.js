export const getAnimal = () => {
  return fetch("https://random.dog/woof.json").then((resp) => resp.json());
};
