export function errorHandler(err, _req, res, _next) {
  const message = err.message || "Internal Server Error";
  const status = err.status || 500;

  console.log(`${status}: ${message}`);

  res.status(status).send({ success: false, message });
}
