"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IPurchaseOrderSummary } from "@/utils/types/po.type";
import { ISupplier } from "@/utils/types/supplier.type";

const PurchaseOrderDetails = ({
  poSupplier,
  summary,
  poNumber,
  status,
  createdAt,
}: {
  poSupplier: ISupplier;
  summary: IPurchaseOrderSummary;
  poNumber: string;
  status: string;
  createdAt: string;
}) => {
  console.log(poSupplier);
  console.log(summary);

  return (
    <Card className="w-full shadow-sm">
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="space-y-1">
          <CardTitle>PO #{poNumber}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-yellow-200 text-yellow-800"
            >
              {status}
            </Badge>
            <span className="text-sm text-gray-500">
              Created: {new Date(createdAt).toLocaleDateString()}
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
          <p>{poSupplier.company_name}</p>
          <p>Code: {poSupplier.supplier_code}</p>
          <p>Phone: {poSupplier.contact_number}</p>
          <p>Email: {poSupplier.email}</p>
        </div>

        {/* Delivery Info (Static) */}
        <div className="space-y-1">
          <h3 className="font-semibold">Delivery Information</h3>
          <p>Outlet: Downtown Outlet</p>
          <p>Address: 456 Main St, Downtown</p>
          <p>Requested Date: Jan 18, 2024</p>
          <p>Contact: Sarah Johnson</p>
          <p>Phone: +1 (555) 987-6543</p>
        </div>

        {/* Order Summary */}
        <div className="space-y-1">
          <h3 className="font-semibold">Order Summary</h3>
          <p>Total Items: {summary.items_count}</p>
          <p>Subtotal: ${summary.subtotal.toFixed(2)}</p>
          <p>Tax: ${summary.tax.toFixed(2)}</p>
          <p>Delivery Fee: ${summary.delivery_fee.toFixed(2)}</p>
          <p className="font-bold text-lg">
            Total: ${summary.total.toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseOrderDetails;
