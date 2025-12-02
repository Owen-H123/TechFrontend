import NabvarPanel from "./subcomponents/NavbarPanel";
import { Outlet } from "react-router-dom";

export default function PanelAd() {
  return (
    <>
      <NabvarPanel />
      <Outlet />
    </>
  );
}
