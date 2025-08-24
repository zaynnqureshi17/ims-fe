"use client";

import CatalogueCard from "@/components/card/catalogue/CatalogueCard";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useGetCatalogue } from "@/queries/catalogue/useGetCatalogue.query";

const CatalogueCartItem = () => {
  const { data: catalogueData, status, error } = useGetCatalogue({});

  const isLoading = status === "pending";
  const items = catalogueData?.body?.data || [];
  const isError = status === "error";
  const notFound = !isLoading && !isError && items.length === 0;

  return (
    <StateWrapper
      loading={isLoading}
      error={
        isError ? ((error as Error)?.message ?? "Failed to load data") : null
      }
      notFound={notFound}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item: any) => (
          <CatalogueCard
            key={item.item_id}
            imageUrl="/static/catalogue-cart.svg" // static image
            title={item.item_name}
            description={item.specification}
            price={item.unit_price}
            unit={`per ${item.purchase_unit}`}
            stock={item.purchase_quantity}
            supplier={item.brand_name}
            inStock={item.purchase_quantity > 0}
            onAddToPO={() => console.log(`Added ${item.item_name}`)}
          />
        ))}
      </div>
    </StateWrapper>
  );
};

export default CatalogueCartItem;
