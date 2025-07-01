import { Request, Response } from 'express';

export const getWishlist = async (req: Request, res: Response) => {
  // Dummy response for now
  res.json({ wishlist: [] });
};

export const createWishlist = async (req: Request, res: Response) => {
  // Dummy response
  res.status(201).json({ message: 'Wishlist created', data: req.body });
};

export const deleteWishlistItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  // Dummy response
  res.json({ message: `Wishlist item ${id} deleted` });
};
