const { Schema, model } = require("mongoose");

const vaccineSchema = new Schema(
  {
    vaccinename: {
      type: String,
      required: [true, "Vaccine's name is required."],
    },
    description: {
      type: String,
    },
    vaccinationage: {
      type: Number,
      required: [true, "Vaccination age is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Vaccine = model("Vaccine", vaccineSchema);

module.exports = Vaccine;
