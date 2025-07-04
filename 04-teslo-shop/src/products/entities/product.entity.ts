import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from "./";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true
    })
    title: string;

    @Column('float', {
        default: 0
    })
    price: number;

    @Column({
        type: 'text',
        nullable: true
    })
    description: string;

    @Column("text", {
        unique: true
    })
    slug: string;


    @Column("int", {
        default: 0
    })
    stock: number;


    @Column("text", {
        array: true,
    })
    sizes: string[];

    @Column("text")
    gender: string;


    @Column("text", {
        array: true,
        default: []
    })
    tags: string[];

    //image relation
    @OneToMany(
        () => ProductImage,
        (productImage) => productImage.product,
        { cascade: true }
    )
    images?: ProductImage[];

    @BeforeInsert()
    checkSlugInsert() {
        if (!this.slug) {
            this.slug = this.title
        }
        this.checkSlug();
    }

    @BeforeUpdate()
    checkSlugUpdate() {
        this.checkSlug();
    }

    private checkSlug() {
        this.slug = this.slug
            .toLowerCase()
            .replaceAll(" ", "_")
            .replaceAll("'", "");
    }
}
