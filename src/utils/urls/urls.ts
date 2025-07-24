export const AuthUrls = {
  signIn: "/sign-in",
  forgotPassword: "/forgot-password",
};

// --- Protected URLs for different roles ---
export const ProtectedUrls = {
  //  --- Admin URLs ---
  admin: {
    manageDashboard: "/admin/dashboard",
    manageBrands: "/brands",
    addBrand: "/brands/add-brand",
    editBrand: "/brands/edit-brand/:id",
    viewBrand: "/brands/view-brand/:id",
    manageSuppliers: "/suppliers",
    manageSettings: "/settings",
    manageOutlets: "/outlets",
    addOutlet: "/outlets/add-outlet",
    editOutlet: "/outlets/edit-outlet/:id",
    viewOutlet: "/outlets/view-outlet/:id",
    manageIngredients: "/ingredients",
  },

  //  --- Brand Manager URLs ---
  brandManager: {
    manageDashboard: "/brand-manager/dashboard",
  },

  //  --- Outlet Manager URLs ---
  outletManager: {
    manageDashboard: "/outlet-manager/dashboard",
  },

  //  --- Finance URLs ---
  finance: {
    manageDashboard: "/dashboard",
  },

  //  --- Staff URLs ---
  staff: {
    manageDashboard: "/stuff/dashboard",
  },

  // --- Common URLs (shared across roles) ---
  common: {
    manageSalesReport: "/sales-report",
    manageFinancialReports: "/financial-reports",
    manageCatalogue: "/catalogue",
    manageSettings: "/settings",
    manageProduction: "/production",
    manageStockCount: "/stock-count",
    manageTransfers: "/transfers",
    manageWaste: "/waste",
    managePurchaseOrder: "/purchase-order",
    manageItemReceiving: "/item-receiving",
    manageRecipes: "/recipes",
    manageTransfer: "/transfers",
    managePurchaseReport: "/report",
    manageUsers: "/users",
  },
};
