import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import Product from '../interface/productsInterface';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.model.getAll();
    return result;
  }

  public async create(product: Product): Promise<Product> {
    const result = await this.model.create(product);
    return result;
  }
}

export default ProductsService;