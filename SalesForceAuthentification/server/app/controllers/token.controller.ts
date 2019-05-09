import { AxiosResponse } from "axios";
import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";

import { TokenService } from "../services/token.service";
import Types from "../types";

@injectable()
export class TokenController {
    public constructor(@inject(Types.TokenService) private tokenService: TokenService) {}

    public get router(): Router {
        const router: Router = Router();

        router.post("/",
                    async (req: Request, res: Response, next: NextFunction) => {
                const code: string = req.body.code;
                await this.tokenService.getTokens(code).then((response: AxiosResponse<JSON>) => {
                    res.send(response.data);
                });
            });

        return router;
    }
}
