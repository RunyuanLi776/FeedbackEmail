module.exports = (req, res, next) => {
  if (req.user.credit < 1) {
    return res.status(403).send({ erroe: "Not enough credits!" });
  }

  next();
};
