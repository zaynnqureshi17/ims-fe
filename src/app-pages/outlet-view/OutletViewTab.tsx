import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OutletDepartmentAdd from "./outlet-tabs/OutletDepartmentAdd";
import OutletInventorySnapShot from "./outlet-tabs/OutletInventorySnapShot";
import OutletOverview from "./outlet-tabs/OutletOverview";
import OutletUserTableWrap from "./outlet-tabs/OutletUserTableWrap";

const OutletViewTab = () => {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="departments">Departments</TabsTrigger>
        <TabsTrigger value="users">Users</TabsTrigger>
        <TabsTrigger value="inventory-snapshot">Inventory Snapshot</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <OutletOverview />
      </TabsContent>
      <TabsContent value="departments">
        <OutletDepartmentAdd />
      </TabsContent>
      <TabsContent value="users">
        <OutletUserTableWrap />
      </TabsContent>
      <TabsContent value="inventory-snapshot">
        <OutletInventorySnapShot />
      </TabsContent>
    </Tabs>
  );
};

export default OutletViewTab;
