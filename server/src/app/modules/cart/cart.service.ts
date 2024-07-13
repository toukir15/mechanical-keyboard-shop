import { Product } from '../product/product.model'
import { TCart } from './cart.interface'
import { Cart } from './cart.model'

const createCartIntoDB = async (payload: TCart) => {
  // check product is exist in db or not
  const findProduct = await Product.findOne({ _id: payload.product })
  if (!findProduct) {
    console.log('product is not exist')
  }

  //   check is already cart is create or not
  const findCart = await Cart.findOne({ product: payload.product })
  if (findCart) {
    // update cart quantity
    const updateCart = await Cart.findOneAndUpdate(
      { product: payload.product },
      { $inc: { cartQuantity: payload.cartQuantity } },
      { new: true },
    )
    return updateCart
  } else {
    const result = await Cart.create(payload)
    return result
  }
}

const getCartsFromDB = async () => {
  const result = await Cart.aggregate([
    // step-1: extract the data of products collection
    {
      $lookup: {
        from: 'products',
        localField: 'product',
        foreignField: '_id',
        as: 'productDetails',
      },
    },

    // step-2: unwind the productDetails array
    {
      $unwind: '$productDetails',
    },

    // step-3: add new field
    {
      $addFields: {
        inStock: {
          $subtract: ['$productDetails.availableQuantity', '$cartQuantity'],
        },
        totalPrice: {
          $multiply: ['$productDetails.price', '$cartQuantity'],
        },
      },
    },

    // step-4: project the nessessary data
    {
      $project: {
        _id: 1,
        name: '$productDetails.name',
        cartQuantity: 1,
        brand: '$productDetails.brand',
        price: '$productDetails.price',
        img: '$productDetails.img',
        inStock: 1,
        totalPrice: 1,
        product: 1,
      },
    },
  ])
  return result
}

const updateCartIntoDB = async (payload: { type: string }, id: string) => {
  const result = await Cart.findByIdAndUpdate(
    id,
    { $inc: { cartQuantity: payload.type == 'increment' ? 1 : -1 } },
    { new: true },
  )

  return result
}

const deleteCartFromDB = async (id: string) => {
  const result = await Cart.findByIdAndDelete(id)
  return result
}

export const CartServices = {
  createCartIntoDB,
  getCartsFromDB,
  updateCartIntoDB,
  deleteCartFromDB,
}
