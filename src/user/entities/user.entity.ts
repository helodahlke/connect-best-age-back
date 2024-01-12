import { Conversation } from "src/conversation/entities/conversation.entity";
import { Friendship } from "src/friendship/entities/friendship.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToMany(() => Conversation, conversation => conversation.id)
    @JoinColumn({ name: 'id'})
    conversations: Conversation

    @ManyToMany(() => Friendship, friendship => friendship.id)
    @JoinColumn({ name: 'id'})
    friendships: Friendship
}
