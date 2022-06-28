export async function getPokemon() {
  const rawData = fetch('http://localhost:8888/.netlify/functions/pokemon');
  const data = await (await rawData).json();

  return data;
}