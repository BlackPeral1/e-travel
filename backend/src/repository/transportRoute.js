import TransportRoute from "../models/transportRoute.model";

export const insertTransportRoute = async (data) => {
  //cannot just insert need to use push
  return await new TransportRoute(data).save();
};

export const lastTransportRoute = async () => {
  //limit(1) means getting one record
  return await TransportRoute.findOne().sort({ _id: -1 }).limit(1);
};

export const TransportRoutes = async (filters) => {
  return await TransportRoute.find(filters)
    .populate("journies timetable")
    .exec();
};

export const findTransportRoute = async (filters) => {
  return await TransportRoute.findOne(filters)
    .populate("journies timetable")
    .exec();
};

export const findAndUpdateTransportRoute = async (
  id,
  updatedTransportRoute
) => {
  //updating has to be changed
  return await TransportRoute.findByIdAndUpdate(id, updatedTransportRoute, {
    new: true,
  });
};

export const removeTransportRoute = async (id) => {
  return await await TransportRoute.findByIdAndRemove(id);
};
