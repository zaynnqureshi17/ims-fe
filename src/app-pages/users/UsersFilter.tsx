"use client";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import UsersRoleOutletDepartmentFilter from "./UsersRoleOutletDepartmentFilter";
import UsersSearch from "./UsersSearch";

type queryParams = string;

const UsersFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedRole, setSelectedRole] = useState<queryParams>("");
  const [selectedRegion, setSelectedRegion] = useState<queryParams>("");
  const [selectedDepartment, setSelectedDepartment] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");

  // Load from URL on page load
  useEffect(() => {
    const role = searchParams.get("role") || "";
    const outlet = searchParams.get("outlet") || "";
    const department = searchParams.get("department") || "";
    const search = searchParams.get("search") || "";

    setSelectedRole(role);
    setSelectedRegion(outlet);
    setSelectedDepartment(department);
    setSearchText(search);
  }, [searchParams]);

  const handleUpdateQuery = (
    role?: string,
    outlet?: string,
    department?: string,
    search?: string,
  ) => {
    console.log("Updating query params:", { role, outlet, department, search });
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.common.manageUsers,
      queryParams: {
        role: role === "all-roles" ? "" : role,
        outlet: outlet === "all-outlets" ? "" : outlet,
        department: department === "all-departments" ? "" : department,
        search: search || "",
      },
    });
  };

  return (
    <div className="flex gap-6">
      <UsersSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(
            selectedRole,
            selectedRegion,
            selectedDepartment,
            val,
          )
        }
      />
      <UsersRoleOutletDepartmentFilter
        selectedRole={selectedRole}
        selectedOutlet={selectedRegion}
        selectedDepartment={selectedDepartment}
        setSelectedRole={setSelectedRole}
        setSelectedOutlet={setSelectedRegion}
        setSelectedDepartment={setSelectedDepartment}
        handleUpdateQuery={(role, outlet, department) =>
          handleUpdateQuery(role, outlet, department, searchText)
        }
      />
    </div>
  );
};

export default memo(UsersFilter);
