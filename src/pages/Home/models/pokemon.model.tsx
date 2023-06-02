export type pokemonShowHome = {
  name: string;
  img: string;
}

export type result = {
  name: string;
  url: string;
}

export type pokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: result[];
}