/**
 *
 * @param {*} req not being used
 * @param {*} res
 * @param {*} next not being used
 */

const showHomepage = (req, res, next) => {
  res.status(200).json({ message: "Homepage" });
};
module.exports = { showHomepage };
