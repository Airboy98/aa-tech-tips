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
