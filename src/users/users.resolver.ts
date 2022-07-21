import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetUsersArgs } from "./dto/args/get-user.args";
import { User } from "./models/user";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService){}
    
    @Query(() => User, { name: 'user', nullable: true })
    getUser(@Args() getUserArgs: GetUsersArgs): User {
        return this.usersService.getUser();
    }

    @Query(() => [User], { name: 'users', nullable: 'items' })
    getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
        return this.usersService.getUsers();
    }

    @Mutation()
    createUser(): User {
        return this.usersService.createUser()
    }
}
