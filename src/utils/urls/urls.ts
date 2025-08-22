export const AuthUrls = {
  signIn: "/sign-in",
  forgotPassword: "/forgot-password",
  OTPVerify: "/otp-verify/:token",
  resetPassword: "/reset-password/:token",
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

    uom: "/uom",
    addUom: "/uom/add-uom",
    editUom: "/uom/edit-uom/:id",
    viewUom: "/uom/view-uom/:id",

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
    manageDashboard: "/finance-manager/dashboard",
  },

  //  --- Staff URLs ---
  staff: {
    manageDashboard: "/stuff/dashboard",
  },

  // --- Common URLs (shared across roles) ---
  common: {
    manageSalesReport: "/sales-report",
    viewSalesReport: "/sales-report/view-sales-report",
    manageFinancialReports: "/financial-reports",
    manageCatalogue: "/catalogue",
    manageSettings: "/settings",
    // Production URLs
    manageProduction: "/production",
    addProduction: "/production/add-production",
    editProduction: "/production/edit-production/:id",
    viewProduction: "/production/view-production/:id",
    //  Stock Count URLs
    manageStockCount: "/stock-count",
    addStockCount: "/stock-count/add-stock-count",
    editStockCount: "/stock-count/edit-stock-count/:id",
    viewStockCount: "/stock-count/view-stock-count/:id",

    //  Storage Count URLs
    manageStorage: "/storage",
    addStorage: "/storage/add-storage",
    editStorage: "/storage/edit-storage/:id",
    viewStorage: "/storage/view-storage/:id",

    manageTransfers: "/transfers",
    addTransfer: "/transfers/add-transfer",
    editTransfer: "/transfers/edit-transfer/:id",
    viewTransfer: "/transfers/view-transfer/:id",

    manageWaste: "/waste",
    addWaste: "/waste/add-waste",
    editWaste: "/waste/edit-waste/:id",
    viewWaste: "/waste/view-waste/:id",

    managePurchaseOrder: "/purchase-order",
    addPurchaseOrder: "/purchase-order/add-purchase-order",
    editPurchaseOrder: "/purchase-order/edit-purchase-order/:id",
    viewPurchaseOrder: "/purchase-order/view-purchase-order/:id",

    manageItemReceiving: "/item-receiving",
    addItemReceiving: "/item-receiving/add-item-receiving",
    editItemReceiving: "/item-receiving/edit-item-receiving/:id",
    viewItemReceiving: "/item-receiving/view-item-receiving/:id",

    manageRecipes: "/recipes",
    addRecipe: "/recipes/add-recipe",
    editRecipe: "/recipes/edit-recipe/:id",
    viewRecipe: "/recipes/view-recipe/:id",

    manageTransfer: "/transfers",
    managePurchaseReport: "/reports",
    // Users management
    manageUsers: "/users",
    addUser: "/users/add-user",
    editUser: "/users/edit-user/:id",
    viewUser: "/users/view-user/:id",
  },
};
export const AuthRoutes = [
  AuthUrls.signIn,
  AuthUrls.forgotPassword,
  AuthUrls.OTPVerify,
  AuthUrls.resetPassword,
];
