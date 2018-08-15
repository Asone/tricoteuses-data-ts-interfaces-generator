/*
 * Interfaces typescript des scrutins de l'assemblée nationale.
 * 
 * @author: Nelson Herbin <nelson@herbin.info>
 * 
 */

export interface scrutin{
    dateScrutin: string;
    demandeur: Demandeur;
    legislature: number|string;
    miseAuPoint: DecompteMiseAuPoint;
    modePublicationDesVotes: ModePublicationDesVotes;
    numero: number|string;
    objet: Objet;
    organeRef: string;
    quantiemeJourSeance: string;
    seanceRef: string;
    sessionRef: string;
    sort: Sort; 
    syntheseVote: SyntheseVote;
    titre: string;
    typeVote: TypeVote;
    uid: number|string;
    ventilationVotes: any;
    xmlXsi: any;
}

export interface Demandeur{
    referenceLegislative: any;
    texte: string;
}

export interface DecompteMiseAuPoint{
    abstentions: DecompteVotants;
    contres: DecompteVotants;
    nonVotants: DecompteVotantsAvecMotivationVote;
    nonVotantsVolontaires: DecompteVotantsAvecMotivationVote;
    pours: DecompteVotants
}

export interface DecompteVotants{
    votants: Votant;
}

export interface Votant{
    acteurRef: string;
    mandatRef: string;
    parDelegation: boolean;
}

export interface DecompteVotantsAvecMotivationVote{
    votants: VotantAvecMotivationVote;
}

export interface VotantAvecMotivationVote{
    acteurRef: String;
    causePositionVote: CausePositionVote;
    mandatRef: String;
}

export enum CausePositionVote{
    MEMBRE_GOUVERNEMENT,
    POSITION_PERSONNELLE,
    PRESIDENT_ASSEMBLEE_NATIONALE,
    PRESIDENT_SEANCE
}


export enum ModePublicationDesVotes{
    DECOMPTE_NOMINATIF
}

export interface Objet{
    libelle: string;
    referenceLegislative: any;
}

export interface Sort{
    code: string;
    libelle: string;
}

export interface SyntheseVote{
    annonce: string;
    decompte: DecompteVoix;
    nbrSuffragesRequis: String;
    nombreVotants: String;
    suffragesExprimes: String;
}

export interface DecompteVoix{
    abstentions: string;
    contre: String;
    nonVotants: String;
    nonVotantsVolontaires: String;
    pour: String;
}

export interface TypeVote{
    codeTypeVote: String;
    libelleTypeVote: String;
    typeMajorite: String;
}

