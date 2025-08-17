"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import clsx from "clsx";
import Image from "next/image";

interface CatalogueCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  unit: string;
  stock: number;
  supplier: string;
  inStock: boolean;
  onAddToPO?: () => void;
}

const CatalogueCard = ({
  imageUrl,
  title,
  description,
  price,
  unit,
  stock,
  supplier,
  inStock,
  onAddToPO,
}: CatalogueCardProps) => {
  return (
    <Card className="w-full overflow-hidden pt-0">
      {/* Image */}
      <div className="relative w-full ">
        <Image
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span
            className={clsx(
              "px-2 py-0.5 text-xs rounded-full font-medium",
              inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700",
            )}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="text-lg font-bold">
          ${price.toFixed(2)}{" "}
          <span className="text-sm font-normal text-muted-foreground">
            {unit}
          </span>
        </div>
        <div className="text-sm text-muted-foreground mt-1">
          Stock: {stock} {stock === 1 ? "loaf" : "loaves"}
          <br />
          Supplier: {supplier}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter>
        <Button
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white"
          onClick={onAddToPO}
          disabled={!inStock}
        >
          Add to PO
        </Button>
      </CardFooter>
    </Card>
  );
};
export default CatalogueCard;
