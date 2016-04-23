var handlers = require('./handlers');

module.exports = function(app) { //routes setup
    app.get(    '/',                handlers.index );
    app.get(    '/api/getAll',      handlers.getAll );
};
