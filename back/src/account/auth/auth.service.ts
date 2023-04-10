import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {Logged} from "../interface/logged.interface";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, pass: Readonly<string>): Promise<Logged> {
    const user = await this.usersService.findOne({email});
    if (await bcrypt.compare(pass, user.password)) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, sub: user.id };
    return {
      token: await this.jwtService.signAsync(payload),
      refresh_token: ""
    };
  }
}