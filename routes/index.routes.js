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

router.get("/vaccines/:vaccineId", (req, res, next) => {
  const { vaccineId } = req.params;
  Vaccine.findById(vaccineId).then((oneVaccine) => {
    res.status(200).json(oneVaccine);
  });
});

router.post("/vaccines", (req, res, next) => {
  const { vaccineName, description, vaccinationAge } = req.body;

  Vaccine.create({ vaccineName, description, vaccinationAge }).then(
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

router.get("/:healthcard", (req, res, next) => {
  const healthcard = req.params.healthcard;
  Citizen.findOne({ healthcard: healthcard }).then((thisCitizen) => {
    res.status(200).json(thisCitizen);
  });
});

router.post("/citizen", (req, res, next) => {
  const { childname, vaccines, healthcard } = req.body;
  Citizen.create({ childname, healthcard, vaccines })
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

router.get("/centers", async (req, res, next) => {
  const call = await axios.get(
    "https://datos.madrid.es/egob/catalogo/201544-0-centros-salud.csv"
  );
  res.status(200).json(call);
});

module.exports = router;
