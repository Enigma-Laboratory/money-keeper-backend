import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiBearerAuth,
  ApiConsumes,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserSignInDto } from './dto/auth-request.dto';
import { UserSignInResponseDto } from './dto/auth-response.dto';
import { AccessTokenGuard } from './guards/access-token.guard';
import { RefreshTokenGuard } from './guards/refresh-token.guard';

@ApiBearerAuth('authorization')
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ description: 'user login api returns access token' })
  @ApiOkResponse({
    description: 'user  has been login successfully',
    type: UserSignInResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error occurred',
  })
  @ApiBadGatewayResponse({ description: 'Bad request response' })
  @ApiConsumes('application/json')
  @Post('/login')
  public async signIn(
    @Body() body: UserSignInDto,
    @Request() req: Request,
    @Response() res: any,
  ): Promise<any> {
    const useResponse = await this.authService.signIn(body);
    res.cookie('accessToken', useResponse.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
    });
    res.cookie('refreshToken', useResponse.refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.send(useResponse);
  }

  @UseGuards(AccessTokenGuard)
  @HttpCode(HttpStatus.OK)
  @ApiConsumes('application/json')
  @Get('/logout')
  public async logout(@Request() req, @Response() res) {
    res.cookie('accessToken', '', {
      httpOnly: true,
      sameSite: 'lax',
    });
    res.cookie('refreshToken', '', {
      httpOnly: true,
      sameSite: 'lax',
    });
    await this.authService.logout(req.user);
    return res.send('logout');
  }

  @UseGuards(RefreshTokenGuard)
  @HttpCode(HttpStatus.OK)
  @ApiConsumes('application/json')
  @Post('/refresh')
  public async refreshToken(@Req() req: any) {
    const user = req.user;
    return await this.authService.refreshToken(user);
  }
}
