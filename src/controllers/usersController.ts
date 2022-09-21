import { Request, Response } from 'express';
import UsersService from '../services/usersService';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.usersService.create(user);
    res.status(201).json({ token: userCreated });
  };
}

export default UsersController;