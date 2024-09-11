import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { BaseError } from "../error/BaseError"
import { CatchError } from "../error/CatchError"

export class UserController {

    catchError = new CatchError()
    public getUsers = async (req: Request, res: Response) => {
        try {
            const q = req.query.q as string | undefined

            const userBusiness = new UserBusiness()
            const output = await userBusiness.getUsers(q)
    
            res.status(200).send(output)
        } catch (error) {
            this.catchError.catchError(error, res)
        }
    }

    public createUser = async (req: Request, res: Response) => {
        try {
            const input = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const output = await userBusiness.createUser(input)
    
            res.status(201).send(output)
        } catch (error) {
            this.catchError.catchError(error, res)
        }
    }
}
