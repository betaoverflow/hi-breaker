const mongoose = require("mongoose");

var user = mongoose.model("user", {
  email: { type: String },
});

module.exports = { user };
