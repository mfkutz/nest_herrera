import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Audi',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'BMW',
        createdAt: new Date().getTime()
    },
]