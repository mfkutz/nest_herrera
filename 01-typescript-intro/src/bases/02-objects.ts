export const pokemonIds = [1, 2, 33, 46, 66]



interface Pokemon {
    id: number;
    name: string;
    age: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 10,
}

export const chamander: Pokemon = {
    id: 2,
    name: 'Chamander',
    age: 12,
}

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur, chamander);

// console.log(pokemons);