import { Entity, EntityRepositoryType, Property } from "@mikro-orm/core";

@Entity()
export default class User {
    @Property({primary: true})
    uid: string;

    @Property()
    latestLogin: Date;

    @Property({default: false})
    isDeleted: boolean;
}