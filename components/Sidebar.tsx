import { ReactElement } from "react";
import Card from "./Card";
import SidebarLink from "./SidebarLink";

export type SidebarLinkData = {
    label: string,
    icon: string,
    link: string
}

const links:SidebarLinkData[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
        {links.map((link) => (
            <SidebarLink link={link} />
        ))}
    </Card>
  );
};

export default Sidebar;