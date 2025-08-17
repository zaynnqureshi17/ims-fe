"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const purchaseOrder = {
  id: "PO-2024-001",
  status: "Pending Approval",
  createdDate: "Jan 15, 2024",
  supplier: {
    name: "Fresh Foods Suppliers Ltd.",
    address: "123 Market Street, Downtown, City 12345",
    phone: "+1 (555) 123-4567",
    email: "orders@freshfoods.com",
  },
  delivery: {
    outlet: "Downtown Outlet",
    address: "456 Main St, Downtown",
    requestedDate: "Jan 18, 2024",
    contact: "Sarah Johnson I",
    phone: "+1 (555) 987-6543",
  },
  summary: {
    totalItems: 12,
    subtotal: 1245.5,
    tax: 99.64,
    deliveryFee: 25,
    total: 1370.14,
  },
};

const PurchaseOrderDetails = () => {
  return (
    <Card className="w-full shadow-sm">
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="space-y-1">
          <CardTitle>PO #{purchaseOrder.id}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-yellow-200 text-yellow-800"
            >
              {purchaseOrder.status}
            </Badge>
            <span className="text-sm text-gray-500">
              Created: {purchaseOrder.createdDate}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="w-fit" variant="secondary">
            Download PO
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            Send to WhatsApp
          </Button>
        </div>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {/* Supplier Info */}
        <div className="space-y-1">
          <h3 className="font-semibold">Supplier Information</h3>
          <p>{purchaseOrder.supplier.name}</p>
          <p>{purchaseOrder.supplier.address}</p>
          <p>Phone: {purchaseOrder.supplier.phone}</p>
          <p>Email: {purchaseOrder.supplier.email}</p>
        </div>

        {/* Delivery Info */}
        <div className="space-y-1">
          <h3 className="font-semibold">Delivery Information</h3>
          <p>Outlet: {purchaseOrder.delivery.outlet}</p>
          <p>Address: {purchaseOrder.delivery.address}</p>
          <p>Requested Date: {purchaseOrder.delivery.requestedDate}</p>
          <p>Contact: {purchaseOrder.delivery.contact}</p>
          <p>Phone: {purchaseOrder.delivery.phone}</p>
        </div>

        {/* Order Summary */}
        <div className="space-y-1">
          <h3 className="font-semibold">Order Summary</h3>
          <p>Total Items: {purchaseOrder.summary.totalItems}</p>
          <p>Subtotal: ${purchaseOrder.summary.subtotal.toFixed(2)}</p>
          <p>Tax (8%): ${purchaseOrder.summary.tax.toFixed(2)}</p>
          <p>Delivery Fee: ${purchaseOrder.summary.deliveryFee.toFixed(2)}</p>
          <p className="font-bold text-lg">
            Total: ${purchaseOrder.summary.total.toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseOrderDetails;
