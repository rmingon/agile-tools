import {Body, Controller, Get, Post} from '@nestjs/common';
import {LoginDto} from "./dto/login.dto";
import {AuthService} from "./auth/auth.service";
import {CreateAccountDto} from "./dto/createAccount.dto";
import {UsersService} from "./users/users.service";
import {User} from "@prisma/client";
import {Logged} from "./interface/logged.interface";

@Controller({
  version: '1',
  path: 'account'
})
export class AccountController {

  constructor(private readonly authService: AuthService, private readonly userService: UsersService) {}

  @Post('login')
  async login(@Body() {email, password}: LoginDto): Promise<Logged> {
    return await this.authService.signIn(email, password)
  }

  @Post('create')
  async createAccount(@Body() account: CreateAccountDto): Promise<User> {
    return await this.userService.createAccount(account)
  }

  @Post('refresh_token')
  async refreshToken(@Body() account: CreateAccountDto): Promise<User> {
    return await this.userService.createAccount(account)
  }
}
