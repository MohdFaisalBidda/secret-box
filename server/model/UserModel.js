const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  secret: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
