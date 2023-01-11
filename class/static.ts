class UserService {
    static db: any;

    static getUser(id: number) {
        return UserService.db.findById(id)
    }

    create() {
        UserService.db
    }
}

UserService.db
UserService.getUser(1)

const inst = new UserService()
inst.create()