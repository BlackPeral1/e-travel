import {
  getAllTimeTables,
  findTimeTable,
  lastTimeTable,
  insertTimeTable,
  findAndUpdateTimeTable,
  removeTimeTable,
} from "../repository/timeTable";

export const createTimeTable = async (data) => {
  const result = await lastTimeTable();
  if (result) {
    data.timeTableId =
      "TTID-" + (parseInt(result.timeTableId.split("-")[1]) + 1);
  } else {
    data.timeTableId = "TTID-1";
  }
  const timeTable = await findTimeTable({
    timeTableId: data.timeTableId,
  });
  if (timeTable) return { status: 400, message: "Already added" };
  return await insertTimeTable({ ...data });
};

export const getTimeTables = async () => {
  console.log(getAllTimeTables());
  return getAllTimeTables();
};

export const getTimeTable = async (id) => {
  const result = await findTimeTable({ _id: id });
  console.log(result);
  if (result.length === 0)
    return {
      status: 400,
      message: "Time Table doesn't exist ",
    };
  return {
    status: 200,
    data: result,
    message: "Time Table retrieved successfully",
  };
};
export const checkObjectEmptyAttributes = (data) => {
  var hasEmptyattribues = false;
  var emptyArray = data.length == 0 ? true : false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].startLocation == undefined) {
      hasEmptyattribues = true;
      break;
    } else if (data[i].startTime == undefined) {
      hasEmptyattribues = true;
      break;
    } else if (data[i].endLocation == undefined) {
      hasEmptyattribues = true;
      break;
    } else if (data[i].endTime == undefined) {
      hasEmptyattribues = true;
      break;
    } else if (data[i]._id == undefined) {
      hasEmptyattribues = true;
      break;
    }
  }
  if (hasEmptyattribues || emptyArray) {
    return false;
  }
  return true;
};
export const updateTimeTableById = async (id, data) => {
  let timeTable = await findTimeTable({
    _id: id,
  });
  if (!timeTable)
    return {
      status: 400,
      message: "Time Table doesn't exist to update",
    };
  return await findAndUpdateTimeTable(id, data);
};

export const deleteTimeTable = async (id) => {
  let timeTable = await findTimeTable({
    _id: id,
  });
  if (!timeTable)
    return {
      status: 400,
      message: "Time Table doesn't exist to delete",
    };
  return await removeTimeTable(id);
};
