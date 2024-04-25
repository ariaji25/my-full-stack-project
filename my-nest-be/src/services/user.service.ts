import { EntityRepository } from "@mikro-orm/core";
import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import User from "src/entities/user.entity";

@Injectable()
export class UserService {
    @InjectRepository(User) private readonly userRepository: EntityRepository<User>;

    createOrUpdate(user: User) {
        this.userRepository.upsert(user);
    }
}