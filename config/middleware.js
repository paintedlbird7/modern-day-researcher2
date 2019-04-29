const jwt = require("jsonwebtoken");

const jwtKey = require("../secrets/keys").jwtKey;

// quickly see what this file exports
module.exports = {
  authenticate,
  generateToken
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get("Authorization");
  console.log(token);

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
}

function generateToken(user) {
    const jwtPayload = {
      ...user,
      extra: "extra info",
    //  subject: user.id,
    // username: user.username,
    };
    const jwtOptions = {
      expiresIn: "1d"
    };
    return jwt.sign(jwtPayload, jwtKey, jwtOptions);
  }