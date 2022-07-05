import { Injectable } from "@nestjs/common";

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class ApiUsersService {
    private readonly users = [
        {
            userId: 1,
            username: "mirae",
            password: "mirae",
            email: "mirae.dev@gmail.com",
        },
    ];

    async findOneByUsername(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}
