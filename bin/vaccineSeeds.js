require("dotenv").config();
const mongoose = require("mongoose");

const Vaccine = require("../models/Vaccine.model");

const vaccinesData = [
  {
    vaccinename: "Hexavalente",
    description: "[HEX-1]",
    vaccinationage: 2,
  },
  {
    vaccinename: "Hexavalente",
    description: "[HEX-2]",
    vaccinationage: 4,
  },
  {
    vaccinename: "Hexavalente",
    description: "[HEX-LR]",
    vaccinationage: 11,
  },
  {
    vaccinename: "Neumococo",
    description: "[NEC-L1]",
    vaccinationage: 2,
  },
  {
    vaccinename: "Neumococo",
    description: "[NEC-L2]",
    vaccinationage: 4,
  },
  {
    vaccinename: "Neumococo",
    description: "[NEC-LR]",
    vaccinationage: 11,
  },
  {
    vaccinename: "Meningococo B",
    description: "[MEB-L1]",
    vaccinationage: 2,
  },
  {
    vaccinename: "Meningococo B",
    description: "[MEB-L2]",
    vaccinationage: 4,
  },
  {
    vaccinename: "Meningococo B",
    description: "[MEB-LR]",
    vaccinationage: 12,
  },
  {
    vaccinename: "Meningococo C",
    description: "[MEC-L1]",
    vaccinationage: 4,
  },
  {
    vaccinename: "Meningococo C",
    description: "[MEC-LR]",
    vaccinationage: 12,
  },
  {
    vaccinename: "Triple vírica",
    description: "[TV-1]",
    vaccinationage: 12,
  },
  {
    vaccinename: "Varicela",
    description: "[VAR-L1]",
    vaccinationage: 15,
  },
  {
    vaccinename: "Tetravírica",
    description: "[4V-N2]",
    vaccinationage: 48,
  },
  {
    vaccinename: "DTPa-VPI",
    description: "[DTPI-N]",
    vaccinationage: 72,
  },
  {
    vaccinename: "Meningoc. ACWY",
    description: "[ME4-A1]",
    vaccinationage: 144,
  },
  {
    vaccinename: "Varicela*",
    description:
      "[VAR-A1]. Vacunar de varicela a los 12 años si pauta incompleta (2 dosis) y no ha pasado la enfermedad.",
    vaccinationage: 144,
  },
  {
    vaccinename: "Papilomavirus**",
    description:
      "[VPH-A1]. Chicas y chicos (estos, nacidos desde ENE/2011). Citar 6 meses después para la 2ª dosis [VPH-A2].",
    vaccinationage: 144,
  },
  {
    vaccinename: "Tétanos-difteria",
    description: "[TD-A1]",
    vaccinationage: 168,
  },
];

const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

Vaccine.create(vaccinesData)
  .then((newVaccines) => {
    console.log(`Created ${newVaccines.length} vaccines`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating fake users in the DB: ${err}`)
  );
