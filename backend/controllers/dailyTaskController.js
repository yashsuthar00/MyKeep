const asyncHandler = require('express-async-handler');

// @desc Get all dailyTasks
// @route GET /api/dailytask/
// @access public

const getDailyTasks = asyncHandler(async (req, res)=> {
    res.send("Daily Task Route");
});

// @desc post all dailyTasks
// @route POST /api/dailytask/
// @access public

const addDailyTask = asyncHandler(async (req, res)=> {
    res.send("Daily Task Added");
});

// @desc put all dailyTasks
// @route PUT /api/dailytask/:id
// @access public

const updateDailyTask = asyncHandler(async (req, res)=> {
    res.send("Daily Task Updated");
});

// @desc delete all dailyTasks
// @route DELETE /api/dailytask/:id
// @access public

const deleteDailyTask = asyncHandler(async (req, res)=> {
    res.send("Daily Task Deleted");
});

module.exports = { getDailyTasks, addDailyTask, updateDailyTask, deleteDailyTask };