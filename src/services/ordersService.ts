import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';
import Order from '../interface/ordersInterface';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.model.getAll();
    return result;
  }
}

export default OrdersService;