export enum TransferInOut {
  IN = "IN",
  OUT = "OUT",
}

export enum TransferStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
  InTransit = "InTransit",
  Received = "Received",
}

export interface ITransfer {
  transfer_id: number;
  sourceOutlet: string;
  destinationOutlet: string;
  department: string | undefined;
  date: string | undefined;
  inOut: string | undefined;
  reason: string | undefined;
  status: TransferStatus | undefined;
  items: number;
}
