import { Client } from "src/resources/clients/entities/client.entity";
import { Product } from "src/resources/products/entities/product.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'countries'})
export class Country {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Client, client => client.country)
    clients: Client[]

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]
}
