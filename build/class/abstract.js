"use strict";
class Controller {
    handleWithLogs(req) {
        console.log('Start');
        this.handler(req);
        console.log('End');
    }
}
class UserController extends Controller {
    handler(req) {
        console.log(req);
    }
}
// new Controller() - get error
const sa = new UserController();
sa.handleWithLogs('request');
//# sourceMappingURL=abstract.js.map