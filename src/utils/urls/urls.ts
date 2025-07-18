export const AuthUrls = {
  signIn: "/sign-in",
  forgotPassword: "/forgot-password",
};

// --- Protected URLs for different roles ---
export const ProtectedUrls = {
  //  --- Admin URLs ---
  admin: {
    dashboard: "/admin/dashboard",
    manageUsers: "/users",
    manageBrands: "/brands",
  },

  //  --- Brand Manager URLs ---
  brandManager: {
    dashboard: "/brand-manager/dashboard",
  },

  //  --- Outlet Manager URLs ---
  outletManager: {
    dashboard: "/outlet-manager/dashboard",
    manageInventory: "/inventory",
    createOrders: "/create-orders",
    manageStaffMeals: "/staff-meals",
  },

  //  --- Finance URLs ---
  finance: {
    dashboard: "/dashboard",
    financialReports: "/financial-reports",
    purchaseReport: "/purchase-report",
    salesReport: "/sales-report",
  },

  //  --- Staff URLs ---
  staff: {
    dashboard: "/stuff/dashboard",
  },

  // --- Common URLs (shared across roles) ---
  common: {
    manageItems: "/items",
    manageSuppliers: "/suppliers",
    reports: "/reports",
    settings: "/settings",
    production: "/production",
    manageTransfers: "/transfers",
    manageOutlets: "/outlets",
    manageWaste: "/waste", // newly added
  },
};
