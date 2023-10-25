const crypto = require("crypto"); // For generating verification tokens

export const generateToken = () => {
  return crypto.randomBytes(64).toString("hex");
};
