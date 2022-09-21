import { Pool } from 'mysql2/promise';
import Orders from '../interface/ordersInterface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Orders[]> {
    const result = await this.connection
      .execute(`SELECT orders.id,
      orders.userId,
      JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS products
      ON products.orderId = orders.id
      GROUP BY orders.id
      ORDER BY orders.userId`);
    const [rows] = result;
    return rows as Orders[];
  }
}