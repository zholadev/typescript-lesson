"use strict";
class Client {
    set login(l) {
        this._login = `user-${l}`;
    }
    get login() {
        return 'no_login';
    }
}
const client = new Client();
client.login = 'zholadev';
console.log(client);
console.log(client.login);
//# sourceMappingURL=getter_setter.js.map