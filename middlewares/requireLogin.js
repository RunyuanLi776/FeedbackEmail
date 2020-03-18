module.exports = (req, res, next) => {
  if (!req.user) {
    return res.statue(410).send({ erroe: "You must log in!" });
  }

  next();
};
