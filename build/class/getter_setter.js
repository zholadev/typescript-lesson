"use strict";
class Client {
    // constructor(login: string, password: string) {
    //     this.login = login
    //     this.password = password
    // }
    set login(l) {
        this._login = `user-${l}`;
    }
    get login() {
        return 'no_login';
    }
}
// const client = new Client('zholadev', '121212asdas')
const client = new Client();
client.login = 'zholadev';
console.log(client);
console.log(client.login);
//# sourceMappingURL=getter_setter.js.map