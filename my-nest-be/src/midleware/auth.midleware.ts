import { CanActivate, ExecutionContext, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAuthMiddleware implements CanActivate {
    async canActivate(context: ExecutionContext) : Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        const authToken = req.headers.authorization?.split('Bearer ')[1];
        console.log("Auth token", authToken);
        if (!authToken) {
            throw new UnauthorizedException("Auth token not found");
        }
        try {
            const decodedToken = await admin.auth().verifyIdToken(authToken);
            console.log("Decoded token", decodedToken);
            req.user = decodedToken;
            return true
        } catch (error) {
            console.log("Error", error);
            throw new UnauthorizedException("Invalid auth token");
        }
    }
}