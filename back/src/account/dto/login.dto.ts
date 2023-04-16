import {IsBoolean, IsEmail, IsNotEmpty} from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsBoolean()
  remember: boolean;
}