/**
 * 
 * Asynchronous allow us to excute a chunk of code while not blocking user input and task
 * This can happen in javascript as it is single threaded.
 */

const asyncErrorHandler = asyncFunc => {
  return async (req, res, next) => {
    try {
      await asyncFunc(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = {
  asyncErrorHandler
};
