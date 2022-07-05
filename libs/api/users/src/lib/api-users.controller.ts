import { Controller } from "@nestjs/common";
import { ApiUsersService } from "./api-users.service";

@Controller("users")
export class ApiUsersController {
    constructor(private apiUsersService: ApiUsersService) {}
}
