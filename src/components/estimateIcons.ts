import { Bike, Briefcase, Calendar, Scissors, ShoppingBag, Stethoscope, Store, UtensilsCrossed, Wrench } from 'lucide-react';
import type { EstimateCapability, EstimateIndustry } from '../utils/estimate';

export const INDUSTRY_ICONS: Record<EstimateIndustry, typeof Scissors> = {
  salon: Scissors,
  healthcare: Stethoscope,
  craftsman: Wrench,
  office: Briefcase,
  ecommerce: Store,
  restaurant: UtensilsCrossed,
};

export const CAPABILITY_ICONS: Record<EstimateCapability, typeof Calendar> = {
  booking: Calendar,
  webshop: ShoppingBag,
  delivery: Bike,
};
