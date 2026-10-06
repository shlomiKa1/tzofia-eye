import { createApp } from "./app.js";
import { PORT } from "./config.js";
import createAlertsCtrl from "./ctrl/alerts.ctrl.js";
import createAuthCtrl from "./ctrl/auth.ctrl.js";
import createAlertsRepo from "./repository/alerts.repository.js";
import createUsersRepo from "./repository/users.repository.js";
import createAuthService from "./services/auth.service.js";

const start = async () => {
  try {
    const alertsRepo = createAlertsRepo();
    const alertsCtrl = createAlertsCtrl(alertsRepo);

    const usersRepo = createUsersRepo();
    const authService = createAuthService(usersRepo);
    const authCtrl = createAuthCtrl(authService);

    const app = createApp({ alertsCtrl, authCtrl });

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (err) {
    console.log("Failed to start:", err);
    process.exit(1);
  }
};

start();
