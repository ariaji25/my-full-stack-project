import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjectRepository, MikroOrmModule } from '@mikro-orm/nestjs';
import databaseOption from './database/config';
import User from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';
import { FirebaseAuthMiddleware } from './midleware/auth.midleware';
import { APP_FILTER } from '@nestjs/core';
import { EntityRepository } from '@mikro-orm/postgresql';

@Module({
  imports: [
    MikroOrmModule.forRoot(databaseOption),
    MikroOrmModule.forFeature([User]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, FirebaseAuthMiddleware],
})
export class AppModule { }
