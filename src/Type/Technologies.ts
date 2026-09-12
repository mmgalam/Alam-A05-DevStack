import type { Dispatch, SetStateAction } from "react";

export interface Itechnology {
    id: string,
    name: string,
    category: string,
    description: string,
    icon: string,
    rating: number,
    difficulty: string,
    badge: string
}

export interface ExploreTecProps {
    technologiesPromise: Promise<Itechnology[]>
}

export interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>;
    selectedTech: Itechnology[];
    setSelectedTech: Dispatch<SetStateAction<Itechnology[]>>;
}

export interface TechCardProps {
    technology: Itechnology;
    selectedTech: Itechnology[];
    setSelectedTech: Dispatch<SetStateAction<Itechnology[]>>;
}

export interface YourStackProps {
    selectedTech: Itechnology[];
    setSelectedTech: Dispatch<SetStateAction<Itechnology[]>>;
}