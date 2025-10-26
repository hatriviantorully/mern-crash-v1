// test-env.js
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env dari root directory
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

console.log("=== ENVIRONMENT VARIABLES ===");
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log(
  "JWT_SECRET length:",
  process.env.JWT_SECRET ? process.env.JWT_SECRET.length : "undefined"
);
