import { Conversation } from "src/conversation/entities/conversation.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToMany(() => Conversation, conversation => conversation.id)
    conversation: string

    @Column()
    content: string

    @Column()
    sendingTime: Date

    @ManyToMany(() => User, user => user.id)
    sender: User

    @ManyToMany(() => User, user => user.id)
     receiver: User
}
