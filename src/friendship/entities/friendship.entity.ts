import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Friendship {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToMany(() => User, user => user.id)
    @JoinColumn({ name: 'id'})
    firstFriend: User
    
    @ManyToMany(() => User, user => user.id)
    @JoinColumn({ name: 'id'})
    secondFriend: User

    @Column()
    beginning: Date
}
