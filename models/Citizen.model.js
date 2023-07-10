const { Schema, model } = require("mongoose");

const citizenSchema = new Schema(
  {
    childname: {
      type: String,
      required: [true, "Child's name is required."],
    },
    healthcard: {
      type: String,
      required: [true, "Child's healthcard is required."],
    },
    vaccines: {
      type: Array,
      // required: [true, "Vaccines Array is required."],
    },
  },
  {
    timestamps: true,
  }
);

const Citizen = model("Citizen", citizenSchema);

module.exports = Citizen;
