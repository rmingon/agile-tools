import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async findOne({email}: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {email}
    })
  }

  async createAccount(account: Prisma.UserCreateInput): Promise<User | null> {
    return await this.prisma.user.create({data: account})
  }
}
