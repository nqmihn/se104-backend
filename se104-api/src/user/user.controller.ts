import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("user")
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.create(user)
    }
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto)
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }
    @Get()
    findAll() {
        return this.userService.findAll();
    }
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.delete(+id);
    }
}
