import {IsEmail, IsNotEmpty, MinLength} from 'class-validator';

export class CreateAccountDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(10)
  password: string;

  @IsNotEmpty()
  username: string;
}