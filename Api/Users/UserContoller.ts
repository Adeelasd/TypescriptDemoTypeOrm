import { Request, Response } from "express";
import Connection from "../../db";
import { User } from "../../models/User";

export default class UserController {
  async getUsers(req: Request, res: Response) {
    let users = (await Connection).getRepository(User)
    res.send(await users.find());
  }
  async SaveUsers(req: Request, res: Response) {

    let users = (await Connection).getRepository(User)
    let setUser = new User
    setUser.name = req.body.name
    setUser.email = req.body.email
    setUser.password = req.body.password
    setUser.isPublished = true
    await users.save(setUser);
    res.json({ "status": "saved" })
  }
}
