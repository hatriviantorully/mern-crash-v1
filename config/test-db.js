// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// async function testDB() {
//   console.log("Testing MongoDB connection...");
//   console.log("MONGO_URI:", process.env.MONGO_URI);
//   console.log("NODE_ENV:", process.env.NODE_ENV);

//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 5000,
//     });
//     console.log("✅ MongoDB Connected Successfully!");

//     // Check database stats
//     const adminDb = mongoose.connection.db.admin();
//     const result = await adminDb.command({ ping: 1 });
//     console.log("✅ Ping result:", result);

//     await mongoose.connection.close();
//     console.log("Connection closed.");
//   } catch (error) {
//     console.error("❌ Connection failed:", error.message);
//   }
// }

// testDB();

import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fix for ES modules __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root directory (dua level di atas config)
const envPath = path.resolve(__dirname, "../..", ".env");
console.log("Loading .env from:", envPath);

dotenv.config({ path: envPath });

async function testDB() {
  console.log("Testing MongoDB connection...");
  console.log("MONGO_URI:", process.env.MONGO_URI);
  console.log("NODE_ENV:", process.env.NODE_ENV);

  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is undefined! Check .env file location.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ MongoDB Connected Successfully!");

    await mongoose.connection.close();
    console.log("Connection closed.");
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
  }
}

testDB();
