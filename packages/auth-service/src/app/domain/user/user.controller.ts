import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { UserSignupDto } from './dto/user-request.dto';
import { UserSignupResponseDto } from './dto/user-response.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @UseGuards(AccessTokenGuard)
  @ApiOperation({
    description: 'get all Users',
  })
  @ApiOkResponse({
    description: 'return users details',
  })
  @ApiConsumes('application/json')
  @Get('/')
  public async getAllUsers() {
    return this.service.getAllUsers();
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    type: UserSignupResponseDto,
    description: 'user created successfully',
  })
  @ApiOkResponse({ type: UserSignupResponseDto, description: '' })
  @ApiOperation({ description: 'user create api ' })
  @ApiConsumes('application/json')
  @Post('/')
  public async createUser(@Body() body: UserSignupDto) {
    return this.service.create(body);
  }
}
