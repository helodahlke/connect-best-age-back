import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

  create(createUserDto: CreateUserDto) {
    const user: User = new User()
    user.name = createUserDto.name
    user.description = createUserDto.description
    user.password = createUserDto.password
    user.createdAt = new Date()
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findOne(id: string) {
    return this.userRepository.findBy({
      id: id
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(
      id, updateUserDto
    )
  }
}
