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
const sa = new UserController();
sa.handleWithLogs('request');
//# sourceMappingURL=abstract.js.map