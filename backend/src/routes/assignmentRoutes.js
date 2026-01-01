const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createAssignment,
  getAssignments,
  updateAssignment,
  deleteAssignment
} = require("../controllers/assignmentController");

router.post("/", authMiddleware, createAssignment);
router.get("/", authMiddleware, getAssignments);
router.put("/:id", authMiddleware, updateAssignment);
router.delete("/:id", authMiddleware, deleteAssignment);

module.exports = router;
