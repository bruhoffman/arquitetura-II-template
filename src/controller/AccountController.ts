import { Request, Response } from "express"
import { AccountBusiness } from "../business/AccountBusiness"
import { CatchError } from "../error/CatchError"

export class AccountController {

    catchError = new CatchError()

    public getAccounts = async (req: Request, res: Response) => {
        try {
            const accountBusiness = new AccountBusiness()
            const output = await accountBusiness.getAccounts()

            res.status(200).send(output)
        } catch (error) {
            this.catchError.catchError(error, res)
        }
    }

    public getAccountBalance = async (req: Request, res: Response) => {
        try {
            const id = req.params.id

            const accountBusiness = new AccountBusiness()
            const output = await accountBusiness.getAccountBalance(id)

            res.status(200).send(output)
        } catch (error) {
            this.catchError.catchError(error, res)
        }
    }

    public createAccount = async (req: Request, res: Response) => {
        try {
            const input = {
                id: req.body.id,
                ownerId: req.body.ownerId
            }

            const accountBusiness = new AccountBusiness()
            const output = await accountBusiness.createAccount(input)

            res.status(201).send(output)
        } catch (error) {
            this.catchError.catchError(error, res)
        }
    }

    public editAccountBalance = async (req: Request, res: Response) => {
        try {
            const input = {
                id: req.params.id,
                value: req.body.value
            }

            const accountBusiness = new AccountBusiness()
            const output = await accountBusiness.editAccountBalance(input)

            res.status(200).send(output)
        } catch (error) {
            this.catchError.catchError(error, res)
        }
    }
}
