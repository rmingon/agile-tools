import {IsEmail, IsNotEmpty, MinLength} from 'class-validator';

export class EditAccountDto {
  @IsNotEmpty()
  @MinLength(10)
  password: string;

  @IsNotEmpty()
  username: string;
}