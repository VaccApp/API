const { Schema, model } = require("mongoose");

const vaccineSchema = new Schema(
  {
    vaccineName: {
      type: String,
      required: [true, "Vaccine's name is required."],
    },
    description: {
      type: String,
    },
    vaccinationAge: {
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
