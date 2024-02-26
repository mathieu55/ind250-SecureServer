const MainController = require('../controllers/MainController');

module.exports = (server) => {
  server.get("/validate/:key",MainController.validate);
};
