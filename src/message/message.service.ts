import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {

  constructor(@InjectRepository(Message) private readonly messageRepository: Repository<Message>){}

  sendMessage(createMessageDto: CreateMessageDto): Promise<Message>{
    const message = new Message()
    message.content = createMessageDto.content
    message.sender = createMessageDto.sender
    message.receiver = createMessageDto.receiver
    message.sendingTime = new Date()
    message.conversation = createMessageDto.conversationId
    return this.messageRepository.save(message)
  }

  searchMessagesFromConversation(conversationId): Promise<Message[]>{
    return this.messageRepository.findBy({
      conversation: conversationId
    })
  }
}
