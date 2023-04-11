import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {LoginDto} from "./dto/login.dto";
import {AuthService} from "./auth/auth.service";
import {CreateAccountDto} from "./dto/createAccount.dto";
import {UsersService} from "./users/users.service";
import {User} from "@prisma/client";
import {Logged} from "./interface/logged.interface";
import {RefreshTokenDto} from "./dto/refreshToken.dto";
import { AuthGuard } from './auth/auth.guard';

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
  async refreshToken(@Body() refresh_token: RefreshTokenDto): Promise<User> {
    return await this.authService.refreshToken(refresh_token)
  }

  @UseGuards(AuthGuard)
  @Post('change_my_password')
  async changePassword(@Body() {password}: Pick<CreateAccountDto, 'password'>): Promise<User> {
    return await this.userService.changePasswordAccount(password)
  }
}
