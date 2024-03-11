const MainController = require('../controllers/MainController');

module.exports = (server) => {
  server.get("/validate/:key",MainController.validate);
  server.get("/generate",MainController.generate);
  server.get("/diag",MainController.diag);
};
