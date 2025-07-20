"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { Bell, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AuthUrls } from "@/utils/urls/urls";

const UserControls = () => {
  const navigate = usePrefetchNavigate();

  const handleLogout = () => {
    navigate(AuthUrls.signIn);
  };

  return (
    <div className="flex items-center space-x-6">
      {/* Outlet Select */}
      <Select>
        <SelectTrigger className="w-[140px] h-9 text-sm">
          <SelectValue placeholder="Select Outlet" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="outlet1">Outlet 1</SelectItem>
          <SelectItem value="outlet2">Outlet 2</SelectItem>
        </SelectContent>
      </Select>

      {/* Notification Bell */}
      <div className="relative">
        <Bell className="w-5 h-5 text-gray-600" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
      </div>

      {/* Avatar + Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Avatar className="h-8 w-8">
              {/* <AvatarImage src="/avatar.jpg" alt="Admin" /> */}
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium text-gray-800">
                Admin User
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserControls;
