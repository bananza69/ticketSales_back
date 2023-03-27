import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException , HttpException , HttpStatus} from '@nestjs/common';
import { UsersService } from '../../users/users.service';

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
    constructor(private userService: UsersService) {
        super({usernameField: 'login', passwordField: 'psw'});
    }
    async validate(login: string, psw: string): Promise<any> {
        const user = await this.userService.checkAuthUser(login, psw);
        if (!user) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                errorText: 'Неверно введены данные',
            },  HttpStatus.CONFLICT);
        }
        return true;
    }

}