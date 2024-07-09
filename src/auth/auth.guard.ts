import { CanActivate, Injectable, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const headers = request.headers.authorization
        if(!headers)
            return false
        const [type, token] = headers.split(' ')
        if(type !== "Bearer" || !token)
            return false
        return true
    }
}