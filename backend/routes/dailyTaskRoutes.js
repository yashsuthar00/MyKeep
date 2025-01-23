const express  = require('express')
const router = express.Router();
const { getDailyTasks, addDailyTask, updateDailyTask, deleteDailyTask } = require('../controllers/dailyTaskController');

router.route("/").get(getDailyTasks).post(addDailyTask);
router.route("/:id").put(updateDailyTask).delete(deleteDailyTask);

module.exports = router;