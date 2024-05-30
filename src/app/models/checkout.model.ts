import { LignePanier } from "./ligne-panier.model";

export interface Panier {
    id: number;
    clientId: number;
    LPs: LignePanier[];
  }