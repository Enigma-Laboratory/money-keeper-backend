import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type as validateType } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
  ValidateNested,
} from 'class-validator';

export enum UserRoles {
  'system-admin' = 'system-admin',
  'restaurant-admin' = 'restaurant-admin',
  'restaurant-user' = 'restaurant-user',
  'delivery-partner' = 'delivery-partner',
}

export class CreateAddressDto {
  @ApiProperty({
    description: 'city',
    example: 'delhi',
    required: true,
  })
  @IsDefined()
  @IsString()
  public city!: string;

  @ApiProperty({
    description: 'state',
    example: 'delhi',
    required: true,
  })
  @IsDefined()
  @IsString()
  public state!: string;

  @ApiProperty({
    description: 'lat',
    example: '12',
    required: true,
  })
  @IsOptional()
  @IsString()
  public lat!: string;

  @ApiProperty({
    description: 'long',
    example: '11',
    required: true,
  })
  @IsOptional()
  @IsString()
  public long!: string;

  @ApiProperty({
    description: 'country',
    example: 'Vn',
    required: true,
  })
  @IsDefined()
  @IsString()
  public country!: string;

  @ApiProperty({
    description: 'pinCode',
    example: '6789876',
    required: true,
  })
  @IsDefined()
  @IsString()
  public pinCode!: string;

  @ApiProperty({
    description: 'street',
    example: 'street',
    required: true,
  })
  @IsDefined()
  @IsString()
  public street!: string;

  @ApiProperty({
    description: 'full address',
    example: 'full address',
    required: true,
  })
  @IsDefined()
  @IsString()
  public name!: string;
}

export class UserSignupDto {
  @ApiProperty({
    description: 'email',
    example: 'hello@gmail.com',
    required: true,
  })
  @IsDefined()
  @IsString()
  @IsEmail()
  public email!: string;

  @ApiProperty({
    description: 'firstName',
    example: 'john',
    required: false,
  })
  @IsOptional()
  @IsString()
  public firstName!: string;

  @ApiProperty({
    description: 'lastName',
    example: 'doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  public lastName!: string;

  @ApiProperty({
    description: 'password',
    example: '34535SDF353@#22342',
    required: true,
  })
  @IsDefined()
  @IsString()
  @MinLength(8)
  public password!: string;
}

export class UpdateUserByIdDto {
  @ApiProperty({
    description: 'uuid userId',
    example: '',
    required: true,
  })
  @IsUUID()
  public id!: string;
}
export class UpdateUserPermissionBodyDto {
  @ApiProperty({
    description: 'uuid userId',
    example: '',
    enum: UserRoles,
  })
  @IsEnum(UserRoles)
  public permissions!: UserRoles;
}

export class FindUserDto {
  @ApiProperty({
    description: 'email',
    example: 'demo@gmail.com',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsEmail()
  public email!: string;

  @ApiProperty({
    description: 'name',
    example: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  public name!: string;

  @ApiProperty({
    description: 'firstName',
    example: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  public firstName!: string;

  @ApiProperty({
    description: 'lastName',
    example: '',
    required: false,
  })
  @IsOptional()
  @IsString()
  public lastName!: string;
}

export class BothPassword {
  @IsDefined()
  @IsString()
  oldPassword: string;

  @IsDefined()
  @IsString()
  newPassword: string;
}

// update user and here things will be optional
export class fieldsToUpdateDto extends PartialType(UserSignupDto) {
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @validateType(() => BothPassword)
  public passwordUpdate!: BothPassword;
}
