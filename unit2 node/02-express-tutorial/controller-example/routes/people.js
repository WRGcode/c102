const express = require("express");
const router = express.Router();

const {
  createPerson,
  readPeople,
  deletePerson,
  updatePerson,
} = require("../controllers/people");

// router.get("/" , readPeople)F
// router.post("/" , createPerson)
// router.put("/:id" , updatePerson)
// router.delete("/:id" , deletePerson)

// / ===> /api/people
router.route("/").get(readPeople).post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
