const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creamos el modelo User

const userSchema = new Schema(
  {
    username: String,
    password: String,
    lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
    expenses: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
