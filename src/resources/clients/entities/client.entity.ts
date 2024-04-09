import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'clients'})
export class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    income: number

    @Column()
    city: string

    @Column()
    age: number

    @Column()
    country_id: number
}
