import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    password: string

    @Column()
    createdAt: Date


}
