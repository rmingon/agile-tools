import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {LoginDto} from "./dto/login.dto";
import {AuthService} from "./auth/auth.service";
import {CreateAccountDto} from "./dto/createAccount.dto";
import {UsersService} from "./users/users.service";
import {User} from "@prisma/client";
import { Logged } from "./interface/logged.interface";
import { RefreshTokenDto } from "./dto/refreshToken.dto";
import { AuthGuard } from './auth/auth.guard';
import {ResetPasswordDto} from "./dto/resetPassword.dto";
import {RecoverPasswordDto} from "./dto/recoverPassword.dto";

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
  async createAccount(@Body() account: CreateAccountDto): Promise<Omit<User, 'password'>> {
    const {password, ...user} = await this.userService.createAccount(account)
    return user
  }

  @Post('refresh_token')
  async refreshToken(@Body() refresh_token: RefreshTokenDto): Promise<User> {
    return await this.authService.refreshToken(refresh_token)
  }

  // @UseGuards(AuthGuard)
  @Post('reset_my_password')
  async resetPassword(@Body() reset_password: ResetPasswordDto): Promise<User> {
    return await this.userService.resetPassword(reset_password)
  }

  @Post('recover_my_password')
  async recoverPassword(@Body() recover_password: RecoverPasswordDto): Promise<User> {
    return await this.userService.recoverPassword(recover_password)
  }
}
