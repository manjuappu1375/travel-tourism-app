import { Router } from 'express';
import { getWishlist, createWishlist, deleteWishlistItem } from '../controllers/wishlistController';

const router = Router();

router.get('/', getWishlist);
router.post('/', createWishlist);
router.delete('/:id', deleteWishlistItem);

export default router;
