import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field({ nullable: true })
    userId?: string;

    @Field()
    email: string;

    @Field(() => Int, { nullable: true })
    age?: number;

    @Field({ nullable: true })
    isSubscribed?: boolean;

    @Field({ nullable: true })
    password?: string;
}