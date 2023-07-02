const Vaccine = require("../models/Vaccine.model");
const Citizen = require("../models/Citizen.model");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/vaccines", (req, res, next) => {
  Vaccine.find().then((allVaccines) => {
    res.status(200).json(allVaccines);
  });
});

router.post("/vaccines", (req, res, next) => {
  const { vaccinename, description, vaccinationage } = req.body;

  Vaccine.create({ vaccinename, description, vaccinationage }).then(
    (newVaccine) => {
      res.status(200).json(newVaccine);
    }
  );
});

router.get("/citizen", (req, res, next) => {
  Citizen.find().then((allCitizens) => {
    res.status(200).json(allCitizens);
  });
});

router.get("/citizen/citizenId", (req, res, next) => {
  const { citizenId } = req.body;
  Citizen.findById(citizenId).then((foundCitizen) => {
    res.status(200).json(foundCitizen);
  });
});

router.post("/citizen", (req, res, next) => {
  const { childname, vaccines } = req.body;
  Citizen.create({ childname, vaccines }).then((newCitizen) => {
    res.status(200).json(newCitizen);
  });
});

module.exports = router;
