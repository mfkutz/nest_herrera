import axios from 'axios';
import type { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
// export class Pokemon {
//     public readonly id: number;
//     public name: string;


//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }

//forma abreviada
export class Pokemon2 {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string
    ) { }

    //Metodos (por defecto y por mas que no lo definamos, todo es public)
    scream() {
        console.log(`${this.name.toUpperCase()!!!}`);
        this.speak();
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/4`)
        // console.log(data.sprites)
        return data.moves;
    }

}

export const charmander = new Pokemon2(1, 'Charmander');
// charmander.id = 2; //no se puede por ser readonly
// console.log(charmander.imageUrl);

// charmander.scream();
// charmander.speak(); //al ser privado no lo podemos llamar desde afuera de la clase


// console.log(charmander.getMoves());
charmander.getMoves()