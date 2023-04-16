import {HttpException, Injectable} from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { User, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import {ValidationError} from "class-validator";
import {ResetPasswordDto} from "../dto/resetPassword.dto";
import {RecoverPasswordDto} from "../dto/recoverPassword.dto";

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async findOne({email}: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {email}
    })
  }

  async createAccount(account: Prisma.UserCreateInput): Promise<User | null> {
    account.password = await bcrypt.hash(account.password, 10);
    try {
      return await this.prisma.user.create({data: account})
    } catch (e) {
      throw new ValidationError()
    }

  }

  async resetPassword(reset_password: ResetPasswordDto) {
    return undefined;
  }

  async recoverPassword(recover_password: RecoverPasswordDto) {
    return undefined;
  }
}
