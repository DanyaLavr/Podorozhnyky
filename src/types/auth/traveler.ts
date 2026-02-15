export interface Travelerss {
  id: number;
  name: string;
  avatar: string;
  description: string;
}

export interface TravelerCardProps {
  name: string;
  avatar: string;
  description: string;
  onViewProfile: () => void;
}