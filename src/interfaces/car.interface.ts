export type CarGas = "gasoline" | "electric";

export interface Car {
  name: string;
  color: string;
  gas: CarGas;
  year: number;
  description: string;
  price: number;
}
