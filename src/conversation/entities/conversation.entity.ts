import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conversation {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToMany(() => User, user => user.id)
    @JoinColumn({ name: 'id'})
    firstUser: User

    @ManyToMany(() => User, user => user.id)
    @JoinColumn({ name: 'id'})
    secondUser: User

    @Column()
    beginning: Date
}

