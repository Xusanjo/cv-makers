import {
    CanActivate,
    ExecutionContext, 
    ForbiddenException,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { Roles } from "../roles";
import { MyRequest } from "../user.Controller";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest() as MyRequest
        const roles = this.reflector.get<string[]>(Roles, context.getHandler())

        const user = request.body as any
        console.log({ user, roles });

        const hasRole = () => roles.includes(user.roles)

        if(!user || !user.roles || !hasRole()) {
            throw new ForbiddenException('You do not have access to this resource');
        }
        return true
    }

    getToken(req: Request) {
        const [type, token ] = req.headers.authorization.split(" ")
        if( type !== "Bearer") {
            throw new UnauthorizedException()
        }
        return token
    }
}