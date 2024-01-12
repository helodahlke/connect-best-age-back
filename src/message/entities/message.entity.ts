import { Conversation } from "src/conversation/entities/conversation.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Conversation, conversation => conversation.id)
    @JoinColumn({ name: 'id'})
    conversation: string

    @Column()
    content: string

    @Column()
    sendingTime: Date

    @ManyToMany(() => User, user => user.id)
    @JoinColumn({ name: 'id'})
    sender: User

    @ManyToMany(() => User, user => user.id)
    @JoinColumn({ name: 'id'})
    receiver: User
}
