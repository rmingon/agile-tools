import {Body, Controller, Get, Post} from '@nestjs/common';
import {LoginDto} from "./dto/login.dto";
import {AuthService} from "./auth/auth.service";
import {CreateAccountDto} from "./dto/createAccount.dto";
import {UsersService} from "./users/users.service";
import {User} from "@prisma/client";

@Controller('account')
export class AccountController {

  constructor(private readonly authService: AuthService, private readonly userService: UsersService) {}

  @Post('login')
  async login(@Body() {email, password}: LoginDto): Promise<any> {
    return await this.authService.signIn(email, password)
  }

  @Post('create')
  async createAccount(@Body() account: CreateAccountDto): Promise<User> {
    return await this.userService.createAccount(account)
  }
}
