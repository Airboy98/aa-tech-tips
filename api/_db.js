import mongoose from "mongoose";

let cached = { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const messageSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, index: true },
  sender: { type: String, enum: ["visitor", "admin"], required: true },
  name: String,
  email: String,
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  lastReadAt: { type: Date },
  visitorLastReadAt: { type: Date },
});

export const Session =
  mongoose.models.Session || mongoose.model("Session", sessionSchema);

const pushSubscriptionSchema = new mongoose.Schema({
  endpoint: { type: String, required: true, unique: true },
  keys: { p256dh: String, auth: String },
  createdAt: { type: Date, default: Date.now },
});

export const PushSubscription =
  mongoose.models.PushSubscription ||
  mongoose.model("PushSubscription", pushSubscriptionSchema);

const appointmentNoteSchema = new mongoose.Schema({
  eventUri: { type: String, required: true, unique: true },
  notes: { type: String, default: "" },
  updatedAt: { type: Date, default: Date.now },
});

export const AppointmentNote =
  mongoose.models.AppointmentNote ||
  mongoose.model("AppointmentNote", appointmentNoteSchema);

const transactionSchema = new mongoose.Schema({
  date: { type: String, required: true },
  type: String,
  package: String,
  client: String,
  details: String,
  miles: Number,
  rate: Number,
  hours: Number,
  fee: { type: Number, required: true },
});

export const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

const expenseSchema = new mongoose.Schema({
  date: { type: String, required: true },
  vendor: String,
  category: String,
  description: String,
  amount: { type: Number, required: true },
});

export const Expense =
  mongoose.models.Expense || mongoose.model("Expense", expenseSchema);
