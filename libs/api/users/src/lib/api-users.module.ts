import { Module } from "@nestjs/common";
import { ApiAuthorizationModule, ApiAuthorizationService } from "@nox/api/authorization";
import { ApiUsersController } from "./api-users.controller";
import { ApiUsersService } from "./api-users.service";

@Module({
    controllers: [ApiUsersController],
    providers: [ApiUsersService],
    exports: [ApiUsersService],
})
export class ApiUsersModule {}
