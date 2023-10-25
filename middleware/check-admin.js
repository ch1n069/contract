const jwt = require("jsonwebtoken");

function checkAdmin(req, res, next) {
  try {
    // first get the token
    const token = req.headers.authorization.split(" ")[1];
    const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (verifiedToken.role === 3) {
      //  user is admin give them access
      next();
    } else {
      return res.status(403).json({ message: "Permission denied" });
    }
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
}

module.exports = checkAdmin;
