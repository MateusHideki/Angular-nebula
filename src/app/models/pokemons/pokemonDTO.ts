import { FormatSpecies } from "./formatSpecies";

export interface PokemonDTO {
    count: number;
    previous: boolean;
    results: Array<FormatSpecies>;
    next: string;
}