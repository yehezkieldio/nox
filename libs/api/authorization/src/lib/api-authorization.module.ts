import { Module } from "@nestjs/common";
import { ApiAuthorizationController } from "./api-authorization.controller";
import { ApiAuthorizationService } from "./api-authorization.service";

import { ApiUsersModule } from "@nox/api/users";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [ApiUsersModule, PassportModule],
    controllers: [ApiAuthorizationController],
    providers: [ApiAuthorizationService, LocalStrategy],
    exports: [ApiAuthorizationService],
})
export class ApiAuthorizationModule {}
