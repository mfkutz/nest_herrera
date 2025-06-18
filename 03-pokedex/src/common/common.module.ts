import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
    providers: [AxiosAdapter],   //Importamos y exportamos para poder usar en otros modulos
    exports: [AxiosAdapter]
})
export class CommonModule { }
