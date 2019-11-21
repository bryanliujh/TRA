/**
 * 
 * express middleware executes in order
 * 
 */
//split up the error handler function
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message
    }
  });
};

/**
 function handleDatabaseError(error, req, res, next) {
  if (error instanceof MySQLError) {
    return res.status(503).json({
      type: 'MYSQLError',
      message: error.message
    });
  }
  next(error);
 */


//function name can be better like handleUserError 
const error400sHandler = (err, req, res, next) => {
  if (err.name === "UserError") {
    return res.status(400).json({
      errors: {
        message: err.message
      }
    });
  } else {
    next(err);
  }
};

module.exports = { errorHandler, error400sHandler };
