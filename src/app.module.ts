import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'orm.config';
import { UserModule } from './user/user.module';
import { FriendshipModule } from './friendship/friendship.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    FriendshipModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
