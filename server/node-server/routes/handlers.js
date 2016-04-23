var handlers = {};

handlers.index = function ( req, res, next ){
    res.send('please check the air-check API');
};


handlers.getAll = function ( req, res, next ){
    //here will should send some  initial data to the app...
    res.send('not working yet');
};


module.exports = handlers;
