"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWishlistItem = exports.createWishlist = exports.getWishlist = void 0;
const getWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Dummy response for now
    res.json({ wishlist: [] });
});
exports.getWishlist = getWishlist;
const createWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Dummy response
    res.status(201).json({ message: 'Wishlist created', data: req.body });
});
exports.createWishlist = createWishlist;
const deleteWishlistItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Dummy response
    res.json({ message: `Wishlist item ${id} deleted` });
});
exports.deleteWishlistItem = deleteWishlistItem;
