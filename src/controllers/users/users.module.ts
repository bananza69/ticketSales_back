import { Module } from '@nestjs/common';
import {UsersController} from "./users.controller";
import {UsersService} from "../../services/users/users.service";
import {User, UserSchema} from "../../schemas/user";
import {MongooseModule} from "@nestjs/mongoose";
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "../../services/authentification/auth/auth.service";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constants';
import { JwtStrategyService } from 'src/services/authentification/jwt.strategy/jwt.strategy.service';

@Module({
    imports:  [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        PassportModule,

        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '24h'}
        }),
    ],
    controllers: [ UsersController],
        providers: [ UsersService , AuthService, JwtStrategyService],
})
export class UsersModule {}
