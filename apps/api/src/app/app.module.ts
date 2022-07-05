import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { ApiAuthorizationModule } from "@nox/api/authorization";

@Module({
    imports: [ApiAuthorizationModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
