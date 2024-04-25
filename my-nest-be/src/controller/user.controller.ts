import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Request } from "express";
import User from "src/entities/user.entity";
import { FirebaseAuthMiddleware } from "src/midleware/auth.midleware";
import { UserService } from "src/services/user.service";

@Controller('me')
@ApiTags("User")
@ApiBearerAuth()
@UseGuards(FirebaseAuthMiddleware)
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get("")
    async claimToken(@Req() req: Request) {
        const user = req["user"]
        await this.userService.createOrUpdate(<User>{
            uid: user["uid"],
            latestLogin: new Date(user["auth_time"]),
        });
        console.log("User", user);
        return {
            uid: user["uid"],
            email: user["firebase"]["email"],
        }
    }
}