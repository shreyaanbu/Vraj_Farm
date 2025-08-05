import express from 'express';
import { listProduct, addProduct, singleProduct, removeProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add',adminAuth, upload.fields([{name:"image1", maxCount:1}]), addProduct);
productRouter.post('/remove',adminAuth, removeProduct);
productRouter.get('/list', listProduct);
productRouter.post('/single',adminAuth, singleProduct);

export default productRouter;