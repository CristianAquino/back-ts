import "dotenv/config";
import { dbConnect } from "./db";
import { app } from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`run server in: http://localhost:${PORT}`);
});
dbConnect().then(() => {});
