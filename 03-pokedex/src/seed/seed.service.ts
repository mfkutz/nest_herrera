import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interfases';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter //here inject the AxiosAdapter
  ) { }

  async executeSeed() {

    await this.pokemonModel.deleteMany({}) //delete all data from DB

    //method 1////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // const { data } = await this.axios.get<PokeResponse>("https://pokeapi.co/api/v2/pokemon?limit=10")

    // const insertPromisesArray = [];

    // data.results.forEach( ({ name, url }) => {
    //   // console.log(name, url)
    //   const segments = url.split('/')
    //   const no = segments[segments.length - 2]
    //   // const pokemon = await this.pokemonModel.create({ name, no }); //slow method
    //   insertPromisesArray.push(this.pokemonModel.create({ name, no }))

    // })

    // await Promise.all(insertPromisesArray) //fast method

    // return 'Seed executed!'


    //Method 2 RECOMMENDED ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const data = await this.http.get<PokeResponse>("https://pokeapi.co/api/v2/pokemon?limit=650")

    const pokemonToInsert: { name: string, no: string }[] = []

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no = segments[segments.length - 2]
      pokemonToInsert.push({ name, no })
    })

    await this.pokemonModel.insertMany(pokemonToInsert)
    return 'Seed executed!'

  }

}
