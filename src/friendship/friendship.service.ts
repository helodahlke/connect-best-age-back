import { Injectable } from '@nestjs/common';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Friendship } from './entities/friendship.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FriendshipService {

  constructor(
    @InjectRepository(Friendship) private readonly friendshipRepository: Repository<Friendship>
  ) {}

  create(createFriendshipDto: CreateFriendshipDto) {
    const friendship: Friendship = new Friendship()
    friendship.firstFriend = createFriendshipDto.firstFriend
    friendship.secondFriend = createFriendshipDto.secondFriend
    friendship.beginning = new Date()
    return this.friendshipRepository.save(friendship)
    
  }

  findAll() {
    return this.friendshipRepository.find();
  }

  findOne(id: string) {
    return this.friendshipRepository.findBy({
      id: id
    })
  }

  remove(id: string) {
    return this.friendshipRepository.delete({
      id: id
    })
  }
}
