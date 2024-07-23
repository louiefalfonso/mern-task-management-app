const routeNotFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, res) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message =
    err.name === "CastError" && err.kind === "ObjectId"
      ? "Resource not found"
      : err.message;

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { routeNotFound, errorHandler };
