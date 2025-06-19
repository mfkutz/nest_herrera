import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([ //this line is how register a model (pokemon) with Mongoose inside Nest Module
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      }
    ])
  ],
  exports: [MongooseModule] //export to use in other modules
})
export class PokemonModule { }
