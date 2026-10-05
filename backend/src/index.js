import { createApp } from "./app.js";
import { PORT } from "./config.js";

const start = async () => {
  try {
    const app = createApp();

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (err) {
    console.log("Failed to start:", err);
    process.exit(1);
  }
};

start();
