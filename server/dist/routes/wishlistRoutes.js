"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wishlistController_1 = require("../controllers/wishlistController");
const router = (0, express_1.Router)();
router.get('/', wishlistController_1.getWishlist);
router.post('/', wishlistController_1.createWishlist);
router.delete('/:id', wishlistController_1.deleteWishlistItem);
exports.default = router;
