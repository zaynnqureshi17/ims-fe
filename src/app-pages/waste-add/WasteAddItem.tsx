"use client";

import IconBg from "@/components/common/IconBg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import { useCreateWaste } from "@/queries/waste/useCreateWaste.query";
import { brandsActions } from "@/utils/PublicImageBaseUrl";
import { optionsType } from "@/utils/types/common.type";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "react-toastify";
import WasteCostImpact from "./WasteCostImpact";

type WasteRow = {
  id: string;
  outlet_id: number | null;
  department_id: number | null;
  date: string;
  item_id: number | null;
  reason: string;
  quantity: number;
  uom: string;
  cost: number;
  unit_cost: number;
  total_cost: number; // derived client side
};

type WasteFormValues = {
  wastes: WasteRow[];
};

const headtable = [
  "Date",
  "Outlet",
  "Department",
  "Item",
  "Quantity",
  "UOM",
  "Reason",
  "Unit Cost",
  "Total Cost",
  "Actions",
];

const currency = (n: number) =>
  new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(n || 0);

const WasteAddItem = ({
  itemOptions,
  outletOptions,
  departmentOptions,
}: {
  itemOptions: optionsType[];
  outletOptions: optionsType[];
  departmentOptions: optionsType[];
}) => {
  const { mutate: createWaste, status } = useCreateWaste();

  const methods = useForm<WasteFormValues>({
    defaultValues: {
      wastes: [
        {
          outlet_id: null,
          department_id: null,
          date: "",
          item_id: null,
          reason: "",
          quantity: 0,
          uom: "",
          cost: 0,
          unit_cost: 0,
          total_cost: 0,
        },
      ],
    },
  });

  const { control, handleSubmit, reset } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "wastes",
    keyName: "formId",
  });

  const onSubmit = (data: WasteFormValues) => {
    const payload = data.wastes.map((w) => ({
      ...w,
      cost: w.total_cost,
    }));
    createWaste(
      { body: payload },
      {
        onSuccess: () => {
          reset();
          toast.success("Waste records saved successfully!");
        },
      },
    );
  };

  const loading = status === "pending";

  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} disabled={loading}>
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">
            Waste Entry Table
          </h2>
          <Button
            variant="secondary"
            className="w-fit"
            type="button"
            onClick={() =>
              append({
                id: crypto.randomUUID(),
                outlet_id: null,
                department_id: null,
                date: "",
                item_id: null,
                reason: "",
                quantity: 0,
                uom: "",
                cost: 0,
                unit_cost: 0,
                total_cost: 0,
              })
            }
          >
            +Add Another Waste Item
          </Button>
        </div>
        <Table className="bg-white ">
          <TableHeader>
            <TableRow>
              {headtable.map((head, index) => (
                <TableHead key={index}>{head}</TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="bg-white">
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                {/* Date */}
                <TableCell>
                  <Controller
                    name={`wastes.${index}.date`}
                    control={control}
                    render={({ field }) => <Input type="date" {...field} />}
                  />
                </TableCell>

                {/* Outlet */}
                <TableCell>
                  <Controller
                    name={`wastes.${index}.outlet_id`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={(v) => field.onChange(Number(v))}
                        value={field.value ? field.value.toString() : ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Outlet" />
                        </SelectTrigger>
                        <SelectContent>
                          {outletOptions.map((opt) => (
                            <SelectItem
                              key={opt.value}
                              value={opt.value.toString()}
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </TableCell>

                {/* Department */}
                <TableCell>
                  <Controller
                    name={`wastes.${index}.department_id`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={(v) => field.onChange(Number(v))}
                        value={field.value ? field.value.toString() : ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departmentOptions.map((opt) => (
                            <SelectItem
                              key={opt.value}
                              value={opt.value.toString()}
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </TableCell>

                {/* Item */}
                <TableCell>
                  <Controller
                    name={`wastes.${index}.item_id`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={(v) => field.onChange(Number(v))}
                        value={field.value ? field.value.toString() : ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Item" />
                        </SelectTrigger>
                        <SelectContent>
                          {itemOptions.map((opt) => (
                            <SelectItem
                              key={opt.value}
                              value={opt.value.toString()}
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </TableCell>

                {/* Quantity */}
                <TableCell>
                  <Controller
                    name={`wastes.${index}.quantity`}
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => {
                          const qty = Number(e.target.value);
                          field.onChange(qty);
                          const unit = methods.getValues(
                            `wastes.${index}.unit_cost`,
                          );
                          methods.setValue(
                            `wastes.${index}.total_cost`,
                            Number((qty * unit).toFixed(2)),
                          );
                        }}
                      />
                    )}
                  />
                </TableCell>

                {/* UOM */}
                <TableCell>
                  <Controller
                    name={`wastes.${index}.uom`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select UOM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">KG</SelectItem>
                          <SelectItem value="g">Gram</SelectItem>
                          <SelectItem value="pcs">PCS</SelectItem>
                          <SelectItem value="ltr">Litre</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </TableCell>

                {/* Reason */}
                <TableCell>
                  <Controller
                    name={`wastes.${index}.reason`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Reason" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SPOIL">Spoil</SelectItem>
                          <SelectItem value="EXPIRED">Expired</SelectItem>
                          <SelectItem value="TRIMMING">Trimming</SelectItem>
                          <SelectItem value="WRONGLY MAKE ITEM">
                            Wrongly Made
                          </SelectItem>
                          <SelectItem value="OVER COOKED">
                            Overcooked
                          </SelectItem>
                          <SelectItem value="QUALITY NOT GOOD">
                            Quality Not Good
                          </SelectItem>
                          <SelectItem value="PHOTOSHOOT">Photoshoot</SelectItem>
                          <SelectItem value="R&D">R&D</SelectItem>
                          <SelectItem value="SERVICE">Service</SelectItem>
                          <SelectItem value="TRAINING">Training</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </TableCell>

                {/* Unit Cost */}
                <TableCell>
                  <Controller
                    name={`wastes.${index}.unit_cost`}
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          field.onChange(val);
                          const qty = methods.getValues(
                            `wastes.${index}.quantity`,
                          );
                          methods.setValue(
                            `wastes.${index}.total_cost`,
                            Number((qty * val).toFixed(2)),
                          );
                        }}
                      />
                    )}
                  />
                </TableCell>

                {/* Total Cost */}
                <TableCell>
                  <Controller
                    name={`wastes.${index}.total_cost`}
                    control={control}
                    render={({ field }) => (
                      <span className="text-sm">{currency(field.value)}</span>
                    )}
                  />
                </TableCell>

                {/* Delete */}
                <TableCell>
                  <IconBg
                    icon={`${brandsActions}delete-red.svg`}
                    title="Delete"
                    width={16}
                    height={16}
                    className="!p-0 cursor-pointer"
                    onClick={() => remove(index)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <WasteCostImpact />
        <div className="flex justify-end mt-4 gap-6">
          <Button type="button" variant="cancel" className="w-fit">
            Cancel
          </Button>
          <Button type="submit" variant="secondary" className="w-fit">
            Save Waste
          </Button>
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default WasteAddItem;
