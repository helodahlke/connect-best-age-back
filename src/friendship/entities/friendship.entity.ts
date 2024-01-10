import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Friendship {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => User, user => user.id)
    firstFriend: User
    
    @ManyToOne(() => User, user => user.id)
    secondFriend: User

    @Column()
    beginning: Date
}
