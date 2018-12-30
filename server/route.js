const Router = require('koa-router');
const action = require('./controllers/action.js');
const {add,del,updet,search} = action;
const route = Router();

route.get('/search',search);

route.get('/add',add);

// route.get('/update',update);

// route.get('/del',del);

module.exports = route;