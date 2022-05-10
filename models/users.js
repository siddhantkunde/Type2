"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const { Model } = require('objection');
class Users extends Model {
    static get tableName() {
        return 'users';
    }
}
exports.Users = Users;
