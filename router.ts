import { Router } from "express"
import UserController from "./Api/Users/UserContoller";
let RouteHandeler = Router();

const UserContoller = new UserController
RouteHandeler.get('/', (req, res) => {
    res.json({ "appstatus": "active" })
})

RouteHandeler.get('/api/get-users', UserContoller.getUsers)


RouteHandeler.post('/api/set-user', UserContoller.SaveUsers)

export default RouteHandeler