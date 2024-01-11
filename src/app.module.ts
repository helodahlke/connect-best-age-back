import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'orm.config';
import { UserModule } from './user/user.module';
import { FriendshipModule } from './friendship/friendship.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    FriendshipModule,
    ConversationModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
