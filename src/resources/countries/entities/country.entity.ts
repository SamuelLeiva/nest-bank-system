import { Client } from "src/resources/clients/entities/client.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'countries'})
export class Country {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Client, client => client.country)
    clients: Client[]
}
