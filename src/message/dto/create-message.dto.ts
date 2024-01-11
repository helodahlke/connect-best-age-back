import { User } from "src/user/entities/user.entity"

export class CreateMessageDto {
    id: string
    conversationId: string
    content: string
    sendingTime: Date
    sender: User
    receiver: User
}
