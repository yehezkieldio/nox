import { Injectable } from "@nestjs/common";
import { ApiUsersService } from "@nox/api/users";

@Injectable()
export class ApiAuthorizationService {
    constructor(private apiUsersService: ApiUsersService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.apiUsersService.findOneByUsername(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
