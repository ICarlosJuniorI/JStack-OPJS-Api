import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 }) // Mesma coisa que o orderBy (1: asc | 2: desc)
      .populate('products.product');

    res.status(201).json(orders);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}