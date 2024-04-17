import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column({default: 0})
    minAge: number

    @Column({default: 0})
    minIncome: number 
}
