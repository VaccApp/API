const { Schema, model } = require("mongoose");

const calendarSchema = new Schema(
  {
    calendar: {
      type: Array,
      required: [true, "Calendar is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Calendar = model("Calendar", calendarSchema);

module.exports = Calendar;
