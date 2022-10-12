export interface Characters {
    id: number;
    name: string;
    height: number;
    mass: number;
    gender: string;
    homeworld: any;
    wiki: string;
    image: string;
    born: any;
    bornLocation: string;
    died: number;
    diedLocation: string;
    species: string;
    hairColor: string;
    eyeColor: string;
    skinColor: string;
    cybernetics: any;
    affiliations: string[];
    masters: any;
    apprentices: any;
    formerAffiliations: string[];
    dateCreated?: number;
    dateDestroyed?: number;
    destroyedLocation: string;
    creator: string;
    manufacturer: string;
    model: string;
    class: string;
    sensorColor: string;
    platingColor: string;
    equipment: any;
    productLine: string;
    kajidic: string;
    era: any;
    degree: string;
    armament: any;
}

export interface CharactersResponse {
    count: number;
    next: string;
    previous: string;
    results: Characters[];
}