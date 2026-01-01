const Assignment = require("../models/Assignment");

/* CREATE ASSIGNMENT */
exports.createAssignment = async (req, res) => {
  try {
    const { title, description, subject, dueDate } = req.body;

    if (!title || !subject || !dueDate) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const assignment = await Assignment.create({
      title,
      description,
      subject,
      dueDate,
      user: req.userId
    });

    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET USER ASSIGNMENTS */
exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ user: req.userId });
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* UPDATE ASSIGNMENT */
exports.updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );

    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* DELETE ASSIGNMENT */
exports.deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findOneAndDelete({
      _id: req.params.id,
      user: req.userId
    });

    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.status(200).json({ message: "Assignment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
