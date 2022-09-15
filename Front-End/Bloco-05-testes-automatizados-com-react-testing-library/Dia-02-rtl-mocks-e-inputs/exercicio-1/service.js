const randomNumber = () => Math.floor(Math.random() * 101);

const toUpperCase = (str) => str.toUpperCase();

const firstLetter = (str) =>  str.charAt(0);

const concatStrings = (str1, str2) => str1.concat(str2);

async function fetchDog() {
  const URL = "https://dog.ceo/api/breeds/image/random"
  const response = await fetch(URL);
  const json = await response.json();
  return await (response.ok ? Promise.resolve(json) : Promise.reject(json));
}

module.exports = {
  randomNumber,
  toUpperCase,
  firstLetter,
  concatStrings,
  fetchDog,
};
