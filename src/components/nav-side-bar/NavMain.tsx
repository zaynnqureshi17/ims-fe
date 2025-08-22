"use client";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { startsWith } from "lodash";
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

  // normalize route segment(s)
  const currentRoute = path.split("/").filter(Boolean).pop() ?? "";

  return (
    <SidebarGroup>
      <SidebarMenu className="flex flex-col gap-2">
        {Object.entries(roleRoutes).map(([key, route]) => {
          const isActive =
            startsWith(path, route.path) || currentRoute === route.activeRoute;
          return (
            <div
              className={`text-sm ${
                isActive
                  ? " border-l-4 rounded-l-xs border-orange-300 bg-orange-300/20"
                  : ""
              }`}
            >
              <Collapsible
                key={key}
                defaultOpen={isActive}
                className={`group/collapsible flex justify-start items-center gap-1 text-white ${
                  state === "collapsed"
                    ? ""
                    : "hover:bg-orange-200/10 rounded-md"
                } `}
              >
                <CollapsibleTrigger asChild className="w-auto px-2">
                  <SidebarMenuButton
                    tooltip={route.title}
                    size={state === "collapsed" ? "lg" : "default"}
                    variant="default"
                  >
                    <Image
                      className="transition-all duration-300"
                      src={route.icon}
                      alt={route.title}
                      width={24}
                      height={24}
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                {state !== "collapsed" && (
                  <Link href={route.path} className="w-full">
                    <SidebarMenuItem>
                      <span>{route.title}</span>
                    </SidebarMenuItem>
                  </Link>
                )}
              </Collapsible>
            </div>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
