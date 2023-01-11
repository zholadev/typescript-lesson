"use strict";
class UserService {
    static getUser(id) {
        return UserService.db.findById(id);
    }
    create() {
        UserService.db;
    }
}
UserService.db;
UserService.getUser(1);
const inst = new UserService();
inst.create();
//# sourceMappingURL=static.js.map