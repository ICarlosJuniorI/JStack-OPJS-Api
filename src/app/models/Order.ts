import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING'
  },
  createdAt: {
    type: Date,
    default: Date.now
    /* Se passar Date.now() vai salvar a data em que esse arquivo foi carregado
    e não a data em que foi feito o cadastro do pedido no banco */
  },
  products: {
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        default: 1
      }
    }],
  }
}));