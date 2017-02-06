
// Dependencies
import Express from 'express';

// Models
import Stock from '../models/stock';
import Comment from '../models/comment';

const apiRoutes = Express.Router();

// Routes
Stock.methods(['get', 'put', 'post', 'delete']);
Stock.register(apiRoutes, '/stocks');

Comment.methods(['get', 'put', 'post', 'delete']);
Comment.register(apiRoutes, '/comments');

// Return router
export default apiRoutes;