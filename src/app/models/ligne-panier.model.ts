// ligne-panier.model.ts
export interface LignePanier {
    id: number;
    quantite: number;
    panierId: number;
    varianteId: number;
    title: string;
    description: string;
    image: string;
    price: number;
  }
  