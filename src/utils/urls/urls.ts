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
    manageOutlets: "/outlets",
    addOutlet: "/outlets/add-outlet",
    editOutlet: "/outlets/edit-outlet/:id",
    viewOutlet: "/outlets/view-outlet/:id",

    manageSuppliers: "/suppliers",
    addSupplier: "/suppliers/add-supplier",
    editSupplier: "/suppliers/edit-supplier/:id",
    viewSupplier: "/suppliers/view-supplier/:id",
    manageSettings: "/settings",
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
    //  Stock Count URLs
    manageStockCount: "/stock-count",
    addStockCount: "/stock-count/add-stock-count",
    editStockCount: "/stock-count/edit-stock-count/:id",
    viewStockCount: "/stock-count/view-stock-count/:id",

    manageTransfers: "/transfers",
    manageWaste: "/waste",
    managePurchaseOrder: "/purchase-order",

    manageItemReceiving: "/item-receiving",
    addItemReceiving: "/item-receiving/add-item-receiving",
    editItemReceiving: "/item-receiving/edit-item-receiving/:id",
    viewItemReceiving: "/item-receiving/view-item-receiving/:id",

    manageRecipes: "/recipes",
    manageTransfer: "/transfers",
    managePurchaseReport: "/reports",
    // Users management
    manageUsers: "/users",
    addUser: "/users/add-user",
    editUser: "/users/edit-user/:id",
    viewUser: "/users/view-user/:id",
  },
};
