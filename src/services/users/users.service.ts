import {Injectable} from '@nestjs/common';
import {User, UserDocument} from "../../schemas/user";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {JwtService} from "@nestjs/jwt";
import {UserDto} from "../../dto/user-dto";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                private jwtService: JwtService) {
    }


    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }

    // обрабатываем id из объекта param
    async getUserById(id): Promise<User> {
        return this.userModel.findById(id);
    }

    async sendUser(data): Promise<User> {
        //библиотека монго ДБ спец синтаксис
        const userData = new this.userModel(data);
        return userData.save();
    }

    async updateUsers(id: string, body: User): Promise<any> {
        return  this.userModel.findByIdAndUpdate(id, body)
    }


    async deleteUsers(): Promise<User> {
        return this.userModel.remove()
    }

    async deleteUsersById(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id);
    }

    async checkRegUser(login: string): Promise<User[]> {
        return this.userModel.find({login: login});
    }

    async checkAuthUser(login: string, psw: string): Promise<User[]> {
        const userFromDB = await this.userModel.find({login: login});
        console.log('userFromDB при авторизации', userFromDB)
        if (userFromDB.length === 0) {
            return null;
        }
        const pswFromDB = userFromDB[0].psw;
        console.log('userFromDB[0].psw', userFromDB[0].psw);

        const isPswMatched = bcrypt.compareSync(psw, pswFromDB);
        console.log('sPswMatched', isPswMatched);
        if (isPswMatched) {
            const userArr = await this.userModel.find({login: login, psw: pswFromDB});
            return userArr.length === 0 ? null : userArr;
        }
    }

    async login(user: UserDto) {
        // формируем уникальный ключ :
        const payload = {login: user.login, psw: user.psw};
        const userFromDB = await this.userModel.find({login: user.login});
        return {
                id: userFromDB[0]._id,
                access_token: this.jwtService.sign(payload),
                psw: userFromDB[0].psw
               };
        }
}


