import { ProtectedUrls } from "../urls/urls";

// --- Protected URLs for different roles ---
export const ProtectedRoutes = {
  //  --- Admin URLs ---
  admin: {
    dashboard: {
      path: ProtectedUrls.admin.dashboard,
      title: "Dashboard",
      icon: "dashboard-icon",
      activeRoute: "dashboard",
    },
    manageUsers: {
      path: ProtectedUrls.admin.manageUsers,
      title: "Users",
      icon: "users-icon",
      activeRoute: "manageUsers",
    },
    manageItems: {
      path: ProtectedUrls.common.manageItems,
      title: "Items",
      icon: "items-icon",
      activeRoute: "manageItems",
    },
    manageSuppliers: {
      path: ProtectedUrls.common.manageSuppliers,
      title: "Suppliers",
      icon: "suppliers-icon",
      activeRoute: "manageSuppliers",
    },
    manageBrands: {
      path: ProtectedUrls.admin.manageBrands,
      title: "Brands",
      icon: "brands-icon",
      activeRoute: "manageBrands",
    },
    manageOutlets: {
      path: ProtectedUrls.common.manageOutlets,
      title: "Outlets",
      icon: "outlets-icon",
      activeRoute: "manageOutlets",
    },
    reports: {
      path: ProtectedUrls.common.reports,
      title: "Reports",
      icon: "reports-icon",
      activeRoute: "reports",
    },
    settings: {
      path: ProtectedUrls.common.settings,
      title: "Settings",
      icon: "settings-icon",
      activeRoute: "settings",
    },
    manageWaste: {
      path: ProtectedUrls.common.manageWaste,
      title: "Waste",
      icon: "waste-icon",
      activeRoute: "manageWaste",
    },
    manageTransfers: {
      path: ProtectedUrls.common.manageTransfers,
      title: "Transfer",
      icon: "transfers-icon",
      activeRoute: "manageTransfers",
    },
  },
  //  --- Brand Manager URLs ---
  brandManager: {
    dashboard: {
      path: ProtectedUrls.brandManager.dashboard,
      title: "Dashboard",
      icon: "dashboard-icon",
      activeRoute: "dashboard",
    },
    manageItems: {
      path: ProtectedUrls.common.manageItems,
      title: "Manage Items",
      icon: "items-icon",
      activeRoute: "manageItems",
    },
    manageSuppliers: {
      path: ProtectedUrls.common.manageSuppliers,
      title: "Manage Suppliers",
      icon: "suppliers-icon",
      activeRoute: "manageSuppliers",
    },
    manageOutlets: {
      path: ProtectedUrls.common.manageOutlets,
      title: "Manage Outlets",
      icon: "outlets-icon",
      activeRoute: "manageOutlets",
    },
    reports: {
      path: ProtectedUrls.common.reports,
      title: "Reports",
      icon: "reports-icon",
      activeRoute: "reports",
    },
    manageWaste: {
      path: ProtectedUrls.common.manageWaste,
      title: "Waste",
      icon: "waste-icon",
      activeRoute: "manageWaste",
    },
    manageTransfers: {
      path: ProtectedUrls.common.manageTransfers,
      title: "Transfer",
      icon: "transfers-icon",
      activeRoute: "manageTransfers",
    },
  },
  //  --- Outlet Manager URLs ---
  outletManager: {
    dashboard: {
      path: ProtectedUrls.outletManager.dashboard,
      title: "Dashboard",
      icon: "dashboard-icon",
      activeRoute: "dashboard",
    },
    manageInventory: {
      path: ProtectedUrls.outletManager.manageInventory,
      title: "Manage Inventory",
      icon: "inventory-icon",
      activeRoute: "manageInventory",
    },
    manageTransfers: {
      path: ProtectedUrls.common.manageTransfers,
      title: "Transfer",
      icon: "transfers-icon",
      activeRoute: "manageTransfers",
    },
    manageWaste: {
      path: ProtectedUrls.common.manageWaste,
      title: "Waste",
      icon: "waste-icon",
      activeRoute: "manageWaste",
    },
    createOrders: {
      path: ProtectedUrls.outletManager.createOrders,
      title: "Order",
      icon: "orders-icon",
      activeRoute: "createOrders",
    },
    reports: {
      path: ProtectedUrls.common.reports,
      title: "Reports",
      icon: "reports-icon",
      activeRoute: "reports",
    },
    manageStaffMeals: {
      path: ProtectedUrls.outletManager.manageStaffMeals,
      title: "Staff Meals",
      icon: "staff-meals-icon",
      activeRoute: "manageStaffMeals",
    },
  },
  //  --- Finance URLs ---
  finance: {
    dashboard: {
      path: ProtectedUrls.finance.dashboard,
      title: "Dashboard",
      icon: "dashboard-icon",
      activeRoute: "dashboard",
    },
    financialReports: {
      path: ProtectedUrls.finance.financialReports,
      title: "Financial Reports",
      icon: "financial-reports-icon",
      activeRoute: "financialReports",
    },
    purchaseReport: {
      path: ProtectedUrls.finance.purchaseReport,
      title: "Purchase Report",
      icon: "purchase-report-icon",
      activeRoute: "purchaseReport",
    },
    salesReport: {
      path: ProtectedUrls.finance.salesReport,
      title: "Sales Report",
      icon: "sales-report-icon",
      activeRoute: "salesReport",
    },
  },
  //  --- Staff URLs ---
  staff: {
    dashboard: {
      path: ProtectedUrls.staff.dashboard,
      title: "Dashboard",
      icon: "dashboard-icon",
      activeRoute: "dashboard",
    },
  },
};
