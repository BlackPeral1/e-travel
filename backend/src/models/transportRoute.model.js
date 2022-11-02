import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const TransportRouteSchema = new mongoose.Schema(
  {
    routeId: {
      type: String,
    },
    startFrom: {
      type: String,
    },
    endsAt: {
      type: String,
    },
    journies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Journey",
      },
    ],
    totalIncome: { type: Number, default: 0.0 },
    totalNumberOfPassengers: { type: Number, default: 0 },
    totalNumberInvalidTickets: { type: Number, default: 0 },
    timetable: { type: mongoose.Schema.Types.ObjectId, ref: "TimeTable" },
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

TransportRouteSchema.plugin(mongoosePaginate);

TransportRouteSchema.index({ createdAt: 1 });

const TransportRoute = mongoose.model("TransportRoute", TransportRouteSchema);

TransportRoute.syncIndexes();

export default TransportRoute;
