export function errorHandler(err, req, res, next) {
  const message = err.message || "Internal Server Error";
  const status = err.status || 500;

  console.log(`${status}: ${message}`);
  console.log(`${status}: ${err}`);

  res.status(status).send({ success: false, message });
}
