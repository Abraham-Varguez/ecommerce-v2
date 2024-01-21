//A file to create some error handlers for our website

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;


    // Log the actual error for debugging
    console.error(err);

  //Check for Mongoose Bad Objects
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found";
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    //This is just if I was in a project that had other developers,
    stack: process.env.NODE_ENV === "production" ? "🪱" : err.stack,
  });
};

export { notFound, errorHandler };
