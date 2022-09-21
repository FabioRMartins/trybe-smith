import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productsService.create(product);
    res.status(201).json(productCreated);
  };
}

export default ProductsController;