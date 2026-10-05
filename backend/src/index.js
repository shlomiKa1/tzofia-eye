import { createApp } from "./app.js";
import { PORT } from "./config.js";
import createAlertsCtrl from "./ctrl/alerts.ctrl.js";
import createAlertsRepo from "./repository/alerts.repository.js";

const start = async () => {
  try {
    const alertsRepo = createAlertsRepo();
    const alertsCtrl = createAlertsCtrl(alertsRepo);

    const app = createApp({ alertsCtrl });

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (err) {
    console.log("Failed to start:", err);
    process.exit(1);
  }
};

start();
