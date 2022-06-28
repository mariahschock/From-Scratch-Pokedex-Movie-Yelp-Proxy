export async function getPokemon(filter) {
  const rawData = fetch(`http://localhost:8888/.netlify/functions/pokemon?pokeQuery=${filter}`);
  const data = await (await rawData).json();

  return data;
}