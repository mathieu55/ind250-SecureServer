module.exports={
  isLambda: process.env.IND250_SECURE_SERVER_IS_LAMBDA || 0,
  port: process.argv[2] || process.env.IND250_SECURE_SERVER_PORT || 80
}