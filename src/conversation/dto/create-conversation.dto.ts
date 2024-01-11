import { User } from "src/user/entities/user.entity"

export class CreateConversationDto {
    id: string
    firstUser: User
    secondUser: User
    beginning: Date
}
