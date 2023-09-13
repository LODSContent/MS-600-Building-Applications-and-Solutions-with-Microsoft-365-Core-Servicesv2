import { useContext } from "react";
import { Tickets } from "./Tickets";
import { TeamsFxContext } from "./Context";

export default function DashboardTab() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div className={themeString === "default" ? "" : "dark"}>
      <Tickets />
    </div>
  );
}
