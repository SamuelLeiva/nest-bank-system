import { Country } from "src/resources/countries/entities/country.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    countryId: number

    @ManyToOne(() => Country, country => country.clients)
    country: Country
}
