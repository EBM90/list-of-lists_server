const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    name: String,
    description: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);


const List = mongoose.model("List", listSchema);

module.exports = List;