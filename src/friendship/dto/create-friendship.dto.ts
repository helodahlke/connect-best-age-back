import { User } from "src/user/entities/user.entity";

export class CreateFriendshipDto {
    firstFriend: User
    secondFriend: User
    beggining: Date

}
