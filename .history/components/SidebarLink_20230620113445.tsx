'use client';

import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const icons = {Settings, User, Grid, Calendar}

const SidebarLink = ({link}: {
  link: {
    icon: typeof icons;
    link: string;
  };
}) => {
  const pathname = usePathname()
  let isActive = false

  if (pathname === link.link) {
    isActive = true
  }

  // const Icon = icons[link.icon]
  const Icon = (props: any) => (
    <div {...props}>
      {'click me'}
    </div>
  )
  return (
    <Link href={link.link}>
      <Icon className={clsx("stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out", isActive && 'stroke-violet-600')}/>
    </Link>
  )
}

export default SidebarLink