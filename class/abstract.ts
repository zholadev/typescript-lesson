abstract class Controller {
    abstract handler(req: any): void

    handleWithLogs(req: any) {
        console.log('Start')
        this.handler(req)
        console.log('End')
    }
}

class UserController extends Controller {
    handler(req: any): void {
        console.log(req)
    }
}

// new Controller() - get error
const sa = new UserController()
sa.handleWithLogs('request')