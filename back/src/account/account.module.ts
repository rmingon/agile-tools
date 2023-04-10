import {Global, Module} from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { UsersModule } from "./users/users.module";
import {AuthModule} from "./auth/auth.module";

@Global()
@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}
