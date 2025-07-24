import { baseNavbarIconPath } from "../PublicImageBaseUrl";
import { ProtectedUrls } from "../urls/urls";

// --- Protected URLs for different roles ---
export const ProtectedRoutes = {
  //  --- Admin URLs ---
  admin: {
    dashboard: {
      path: ProtectedUrls.admin.manageDashboard,
      title: "Dashboard",
      icon: `${baseNavbarIconPath}dashboard.svg`,
      activeRoute: "dashboard",
    },
    manageCatalogue: {
      path: ProtectedUrls.common.manageCatalogue,
      title: "Catalogue",
      icon: `${baseNavbarIconPath}catalogue.svg`,
      activeRoute: "manageCatalogue",
    },
    manageStockCount: {
      path: ProtectedUrls.common.manageStockCount,
      title: "Stock Count",
      icon: `${baseNavbarIconPath}stock-count.svg`,
      activeRoute: "manageStockCount",
    },
    manageItemReceiving: {
      path: ProtectedUrls.common.manageItemReceiving,
      title: "Item Receiving",
      icon: `${baseNavbarIconPath}item-receiving.svg`,
      activeRoute: "manageItemReceiving",
    },
    manageUsers: {
      path: ProtectedUrls.common.manageUsers,
      title: "Users",
      icon: `${baseNavbarIconPath}users.svg`,
      activeRoute: "manageUsers",
    },

    manageBrands: {
      path: ProtectedUrls.admin.manageBrands,
      title: "Brands",
      icon: `${baseNavbarIconPath}brands.svg`,
      activeRoute: "manageBrands",
    },
    manageOutlets: {
      path: ProtectedUrls.admin.manageOutlets,
      title: "Outlets",
      icon: `${baseNavbarIconPath}outlets.svg`,
      activeRoute: "manageOutlets",
    },
    managePurchaseReport: {
      path: ProtectedUrls.common.managePurchaseReport,
      title: "Reports",
      icon: `${baseNavbarIconPath}reports.svg`,
      activeRoute: "managePurchaseReport",
    },
    settings: {
      path: ProtectedUrls.common.manageSettings,
      title: "Settings",
      icon: `${baseNavbarIconPath}settings.svg`,
      activeRoute: "manageSettings",
    },
    manageWaste: {
      path: ProtectedUrls.common.manageWaste,
      title: "Waste",
      icon: `${baseNavbarIconPath}waste-restore.svg`,
      activeRoute: "manageWaste",
    },
    managePurchaseOrder: {
      path: ProtectedUrls.common.managePurchaseOrder,
      title: "Purchase Order",
      icon: `${baseNavbarIconPath}cart.svg`,
      activeRoute: "managePurchaseOrder",
    },
    manageRecipes: {
      path: ProtectedUrls.common.manageRecipes,
      title: "Recipes",
      icon: `${baseNavbarIconPath}recipes.svg`,
      activeRoute: "manageRecipes",
    },
    manageSettings: {
      path: ProtectedUrls.admin.manageSettings,
      title: "Settings",
      icon: `${baseNavbarIconPath}settings.svg`,
      activeRoute: "manageSettings",
    },
    manageTransfers: {
      path: ProtectedUrls.common.manageTransfers,
      title: "Transfer",
      icon: `${baseNavbarIconPath}transfers.svg`,
      activeRoute: "manageTransfers",
    },
    manageProduction: {
      path: ProtectedUrls.common.manageProduction,
      title: "Production",
      icon: `${baseNavbarIconPath}production.svg`,
      activeRoute: "manageProduction",
    },
    salesReport: {
      path: ProtectedUrls.common.manageSalesReport,
      title: "Sales Report",
      icon: `${baseNavbarIconPath}sales-report.svg`,
      activeRoute: "salesReport",
    },
    manageTransfer: {
      path: ProtectedUrls.common.manageTransfer,
      title: "Transfer",
      icon: `${baseNavbarIconPath}transfers.svg`,
      activeRoute: "manageTransfer",
    },
    ingredients: {
      path: ProtectedUrls.admin.manageIngredients,
      title: "Ingredients",
      icon: `${baseNavbarIconPath}ingredients.svg`,
      activeRoute: "ingredients",
    },
  },
  //  --- Brand Manager URLs ---
  brandManager: {
    dashboard: {
      path: ProtectedUrls.brandManager.manageDashboard,
      title: "Dashboard",
      icon: `${baseNavbarIconPath}dashboard.svg`,
      activeRoute: "dashboard",
    },
    manageItemReceiving: {
      path: ProtectedUrls.common.manageItemReceiving,
      title: "Item Receiving",
      icon: `${baseNavbarIconPath}item-receiving.svg`,
      activeRoute: "manageItemReceiving",
    },
    manageCatalogue: {
      path: ProtectedUrls.common.manageCatalogue,
      title: "Catalogue",
      icon: `${baseNavbarIconPath}catalogue.svg`,
      activeRoute: "manageCatalogue",
    },
    managePurchaseOrder: {
      path: ProtectedUrls.common.managePurchaseOrder,
      title: "Purchase Order",
      icon: `${baseNavbarIconPath}cart.svg`,
      activeRoute: "managePurchaseOrder",
    },
    manageUsers: {
      path: ProtectedUrls.common.manageUsers,
      title: "Users",
      icon: `${baseNavbarIconPath}users.svg`,
      activeRoute: "manageUsers",
    },

    manageWaste: {
      path: ProtectedUrls.common.manageWaste,
      title: "Waste",
      icon: `${baseNavbarIconPath}waste-restore.svg`,
      activeRoute: "manageWaste",
    },
    managePurchaseReport: {
      path: ProtectedUrls.common.managePurchaseReport,
      title: "Reports",
      icon: `${baseNavbarIconPath}reports.svg`,
      activeRoute: "managePurchaseReport",
    },

    manageTransfers: {
      path: ProtectedUrls.common.manageTransfers,
      title: "Transfer",
      icon: `${baseNavbarIconPath}transfers.svg`,
      activeRoute: "manageTransfers",
    },
    manageTransfer: {
      path: ProtectedUrls.common.manageTransfer,
      title: "Transfer",
      icon: `${baseNavbarIconPath}transfers.svg`,
      activeRoute: "manageTransfer",
    },
  },
  //  --- Outlet Manager URLs ---
  outletManager: {
    manageDashboard: {
      path: ProtectedUrls.outletManager.manageDashboard,
      title: "Dashboard",
      icon: `${baseNavbarIconPath}dashboard.svg`,
      activeRoute: "manageDashboard",
    },
    manageTransfers: {
      path: ProtectedUrls.common.manageTransfers,
      title: "Transfer",
      icon: `${baseNavbarIconPath}transfers.svg`,
      activeRoute: "manageTransfers",
    },
    manageCatalogue: {
      path: ProtectedUrls.common.manageCatalogue,
      title: "Catalogue",
      icon: `${baseNavbarIconPath}catalogue.svg`,
      activeRoute: "manageCatalogue",
    },
    manageStockCount: {
      path: ProtectedUrls.common.manageStockCount,
      title: "Stock Count",
      icon: `${baseNavbarIconPath}stock-count.svg`,
      activeRoute: "manageStockCount",
    },
    manageProduction: {
      path: ProtectedUrls.common.manageProduction,
      title: "Production",
      icon: `${baseNavbarIconPath}production.svg`,
      activeRoute: "manageProduction",
    },
    manageItemReceiving: {
      path: ProtectedUrls.common.manageItemReceiving,
      title: "Item Receiving",
      icon: `${baseNavbarIconPath}item-receiving.svg`,
      activeRoute: "manageItemReceiving",
    },
    manageWaste: {
      path: ProtectedUrls.common.manageWaste,
      title: "Waste",
      icon: `${baseNavbarIconPath}waste-restore.svg`,
      activeRoute: "manageWaste",
    },
    managePurchaseOrder: {
      path: ProtectedUrls.common.managePurchaseOrder,
      title: "Purchase Order",
      icon: `${baseNavbarIconPath}cart.svg`,
      activeRoute: "managePurchaseOrder",
    },
    managePurchaseReport: {
      path: ProtectedUrls.common.managePurchaseReport,
      title: "Reports",
      icon: `${baseNavbarIconPath}reports.svg`,
      activeRoute: "managePurchaseReport",
    },
    manageTransfer: {
      path: ProtectedUrls.common.manageTransfer,
      title: "Transfer",
      icon: `${baseNavbarIconPath}transfers.svg`,
      activeRoute: "manageTransfer",
    },
  },
  //  --- Finance URLs ---
  finance: {
    manageDashboard: {
      path: ProtectedUrls.finance.manageDashboard,
      title: "Dashboard",
      icon: `${baseNavbarIconPath}dashboard.svg`,
      activeRoute: "manageDashboard",
    },
    managePurchaseReport: {
      path: ProtectedUrls.common.managePurchaseReport,
      title: "Purchase Report",
      icon: `${baseNavbarIconPath}reports.svg`,
      activeRoute: "managePurchaseReport",
    },
  },
  //  --- Staff URLs ---
  staff: {
    manageDashboard: {
      path: ProtectedUrls.staff.manageDashboard,
      title: "Dashboard",
      icon: `${baseNavbarIconPath}dashboard.svg`,
      activeRoute: "manageDashboard",
    },
    manageStockCount: {
      path: ProtectedUrls.common.manageStockCount,
      title: "Stock Count",
      icon: `${baseNavbarIconPath}stock-count.svg`,
      activeRoute: "manageStockCount",
    },
    managePurchaseOrder: {
      path: ProtectedUrls.common.managePurchaseOrder,
      title: "Purchase Order",
      icon: "/side-bar-icon/cart.svg",
      activeRoute: "managePurchaseOrder",
    },
    manageProduction: {
      path: ProtectedUrls.common.manageProduction,
      title: "Production",
      icon: `${baseNavbarIconPath}production.svg`,
      activeRoute: "manageProduction",
    },
    manageSalesReport: {
      path: ProtectedUrls.common.manageSalesReport,
      title: "Sales Report",
      icon: `${baseNavbarIconPath}sales-report.svg`,
      activeRoute: "manageSalesReport",
    },
  },
};
