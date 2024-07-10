import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseInterceptors, BadRequestException } from "@nestjs/common";
import {Eroles} from "./constants/roles";
import { CreateUserDto } from "./dto/create-user.dto"; 
import { UpdateUserDto } from "./dto/update-user.dto";
import { Roles } from "./roles";
import { UserService } from "./user.service";
import { FileInterceptor } from "@nestjs/platform-express";
import {diskStorage } from "multer";
import { ConfigService } from "@nestjs/config";


export interface MyRequest extends Request {
    user: any
}

@Controller("user")
export class UserController{
    constructor(
        private readonly userService: UserService,
        private readonly configService: ConfigService,
        ) {}

    @Post("user")
    @Roles([Eroles.ADMIN, Eroles.SUPERADMIN])
    @UseInterceptors(
        FileInterceptor("file", {
            storage: diskStorage({
                destination: "./uploads",
                filename(req, file, callback){
                    callback(null, file.orginalname)
                }
            }),
            fileFilter(req,file, callback){
                const mimetypes = ["image.jpg", "vedio.MP4","music.mp3"]
                const mimetype = file.mimetype
                if(!mimetypes.includes(mimetype)){
                    callback(new BadRequestException, false)
                }
                callback(null, true);
            }
        })
    )
    create(@Body() createUserDto: CreateUserDto, @Req() request: MyRequest){
        console.log({user: request.user});
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.userService.findOne(+id);
    }

    @Patch()
    update(@Param('id') id:string, @Body() updateUserDto: UpdateUserDto){
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.userService.remove(+id);
    }
}