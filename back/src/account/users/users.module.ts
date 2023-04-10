import { Global, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from "../../prisma.module";

@Global()
@Module({
  imports: [PrismaModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
