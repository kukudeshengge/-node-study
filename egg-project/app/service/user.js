const Service = require('egg').Service;

class UserService extends Service {
    async findAllData() {
        return await this.app.mysql.select('list_db');   //在数据库中查询全部数据
    }
}

module.exports = UserService;