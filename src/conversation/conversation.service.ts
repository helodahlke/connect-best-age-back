import { Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation } from './entities/conversation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConversationService {

  constructor(@InjectRepository(Conversation) private readonly conversationRepository: Repository<Conversation>){}

  create(createConversationDto: CreateConversationDto) {
    const createConversation = new Conversation()
    createConversation.beginning = new Date()
    createConversation.firstUser = createConversationDto.firstUser
    createConversation.secondUser = createConversationDto.secondUser
    return this.conversationRepository.save(createConversation)
  }

  findAll(): Promise<Conversation[]>  {
    return this.conversationRepository.find()
  }

  findOne(id: string) {
    return this.conversationRepository.findBy({
      id: id
    })
  }
}
