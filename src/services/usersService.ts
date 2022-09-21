import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import User from '../interface/usersInterface';
import tokenValidation from '../middlewares/tokenValidations';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: User): Promise<string> {
    const result = await this.model.create(user);
    const resultValidation = tokenValidation(result);
    return resultValidation;
  } 
}

export default UsersService;