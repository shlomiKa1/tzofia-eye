import AlertsMap from "../componenets/AlertsMap";
import { useEffect, useState } from "react";
import AddAlert from "../componenets/AddAlert";
import { alertApi } from "../api/alertApi";
import UpdateAlert from "../componenets/UpdateAlert";
import type { Alert } from "../types/alert";

const MapPage = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  useEffect(() => {
    alertApi
      .getAll()
      .then(setAlerts)
      .catch(() => "");
  }, []);

  return (
    <>
      <AlertsMap alerts={alerts as never} />
      <AddAlert />
      <UpdateAlert id={1} />
    </>
  );
};

export default MapPage;
