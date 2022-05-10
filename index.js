"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./models/users");
const router = require('./routes/routes');
const dbsetup = require("./db/dbSetup");
const Userss = require("./models/users");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json("Hello world");
});
// get the user data as a response
app.get("/users", (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    users_1.Users.query().then((users) => {
        response.json(users);
    });
}));
// app.get('/users/:id', async (req, res, next) => {
//     try {
//         const {id} = req.params
//         const user = await Users.query().findById(id)
//         res.json(user)
//     } catch (error) {
//         console.error(error)
//         res.status(500).json(error)
//     }
// })
// app.use("/",router)    
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
dbsetup();
