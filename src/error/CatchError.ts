import { BaseError } from "./BaseError"

export class CatchError {

    public catchError = (error: any, res: any) => {
        console.log(error)
    
            if (res.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
    }

}