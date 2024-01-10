import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FriendshipService } from './friendship.service';
import { CreateFriendshipDto } from './dto/create-friendship.dto';

@Controller('friendship')
export class FriendshipController {
  constructor(private readonly friendshipService: FriendshipService) {}

  @Post()
  create(@Body() createFriendshipDto: CreateFriendshipDto) {
    return this.friendshipService.create(createFriendshipDto);
  }

  @Get()
  findAll() {
    return this.friendshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.friendshipService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.friendshipService.remove(id);
  }
}
