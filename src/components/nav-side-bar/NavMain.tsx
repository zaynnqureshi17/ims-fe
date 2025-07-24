"use client";
import { startsWith } from "lodash";

import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type RouteItem = {
  title: string;
  path: string;
  icon: string;
  activeRoute: string;
};

interface NavMainProps {
  roleRoutes: Record<string, RouteItem>;
}

export function NavMain({ roleRoutes }: NavMainProps) {
  const { state } = useSidebar(); // collapsed | expanded
  const path = usePathname();
  const route = path.split("/").slice(2).join("/");

  const isActive = startsWith(route, roleRoutes?.[route]?.activeRoute);

  return (
    <SidebarGroup>
      <SidebarMenu className="flex flex-col gap-2">
        {Object.entries(roleRoutes).map(([key, route]) => (
          <Collapsible
            key={key}
            defaultOpen={isActive}
            className={`group/collapsible flex justify-start items-center gap-1 text-white ${state === "collapsed" ? "" : "hover:bg-orange-200/10 rounded-md"} `}
          >
            <CollapsibleTrigger asChild className="w-auto px-2">
              <SidebarMenuButton
                tooltip={route.title}
                size={state === "collapsed" ? "lg" : "default"}
                variant={"default"}
              >
                <Image
                  className="transition-all duration-300 "
                  src={route.icon}
                  alt={route.title}
                  width={16}
                  height={16}
                />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            {state !== "collapsed" && (
              <Link href={route.path} className="w-full">
                <SidebarMenuItem>
                  <span className="text-sm">{route.title}</span>
                </SidebarMenuItem>
              </Link>
            )}
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
