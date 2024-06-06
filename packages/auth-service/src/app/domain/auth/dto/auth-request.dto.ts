import { IsDefined, IsEmail, IsString } from 'class-validator';

export class UserSignInDto {
  @IsDefined()
  @IsString()
  @IsEmail()
  public email!: string;

  @IsDefined()
  @IsString()
  public password!: string;
}
