import TimeTable from "../models/timeTable.model";

export const insertTimeTable = async (data) => {
  return await new TimeTable(data).save();
};

export const lastTimeTable = async () => {
  //limit(1) means getting one record
  return await TimeTable.findOne().sort({ _id: -1 }).limit(1);
};

export const TimeTables = async (filters) => {
  return await TimeTable.find(filters);
};

export const findTimeTable = async (filters) => {
  return await TimeTable.findOne(filters);
};

export const findAndUpdateTimeTable = async (id, updatedTimeTable) => {
  return await TimeTable.findByIdAndUpdate(id, updatedTimeTable, {
    new: true,
  });
};

export const removeTimeTable = async (id) => {
  return await await TimeTable.findByIdAndRemove(id);
};
