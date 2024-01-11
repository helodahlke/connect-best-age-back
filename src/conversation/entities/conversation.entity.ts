import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conversation {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToMany(() => User, user => user.id)
    firstUser: User

    @ManyToMany(() => User, user => user.id)
    secondUser: User

    @Column()
    beginning: Date
}

