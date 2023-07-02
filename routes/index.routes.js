const Vaccine = require("../models/Vaccine.model");
const Citizen = require("../models/Citizen.model");
const axios = require("axios");

const router = require("express").Router();

const CENTERAPI_URL =
  "https://datos.madrid.es/egob/catalogo/201544-0-centros-salud.json";

router.get("/centers", (req, res, next) => {
  axios
    .get(`${CENTERAPI_URL}`)
    .then((response) => res.status(200).json(response.data))
    .catch((error) => console.log(error));
});

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

router.post("/citizen", (req, res, next) => {
  const { childname, vaccines } = req.body;
  Citizen.create({ childname, vaccines })
    .then((newCitizen) => {
      res.status(200).json(newCitizen);
    })
    .catch((error) => console.log(error));
});

router.get("/citizen/:childId", (req, res, next) => {
  const { childId } = req.params;
  Citizen.findById(childId).then((foundCitizen) => {
    res.status(200).json(foundCitizen);
  });
});

router.get("/centers", (req, res, next) => {});

module.exports = router;
