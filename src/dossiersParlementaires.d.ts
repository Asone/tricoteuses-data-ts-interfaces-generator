/*
 * Interfaces typescript des dossiers parlementaires de l'assemblée nationale
 * 
 * @author: Nelson Herbin <nelson@herbin.info>
 * 
 */

// interface générique pour les différents types de dossiers parlementaires
export interface DossierParlementaire<T>{
    actesLegislatifs: ActesLegislatifs;
    fusionDossier: FusionDossier;
    indexation: Indexation;
    initiateur: Initiateur;
    legislature: string;
    plf: Plf
    procedureParlementaire: CodeEtLibelle;
    titreDossier: TitreDossier;
    uid: string;
}

// Type de dossiers
export interface DossierLegislatif<DossierParlementaire>{}
export interface DossierInitiativeExecutif<DossierParlementaire>{}
export interface DossierCommissionEnquete<DossierParlementaire>{}
export interface DossierCommissionEnquete<DossierParlementaire>{}
export interface DossierInitiativeExecutif<DossierParlementaire>{}
export interface DossierMissionControle<DossierParlementaire>{}
export interface DossierMissionInformation<DossierParlementaire>{}
export interface DossierResolutionAN<DossierParlementaire>{}
export interface DossierSansType<DossierParlementaire>{}

// sous-élements
export interface ActesLegislatifs{
    actes: ActeLegislatif;
}

export interface ActeLegislatif<>{

}

export interface FusionDossier{
    cause: CauseFusionDossier;
    dossierAbsorbantRef: string;
}

export enum CauseFusionDossier{
    DOSSIER_ABSORBE,
    EXAMEN_COMMUN
}

export interface Indexation{
    themes: Themes;
}

export interface Themes{
    niveau: string;
    theme: Theme
}

export interface Theme{
    libelleTheme: string;
}

export interface Initiateur{
    acteurs: ActeursInitiateur;
    organes: OrganesInitiateur;
}

export interface ActeursInitiateur{
    acteurs: ActeurInitiateur;
}

export interface ActeurInitiateur{
    acteurRef: string
    mandatRef: string
}

export interface OrganesInitiateur{
    organes: OrganeInitiateur;
}

export interface OrganeInitiateur{
    organeRef: OrganeInitiateurRef;
}

export interface OrganeInitiateurRef{
    uid: string;
}

export interface Plf{
    etudePlf: EtudePlf;
}

export interface EtudePlf{
    missionMinefi: Mission;
    ordreCommission: string;
    ordreDiqs: string;
    organeRef: string;
    rapporteurs: Rapporteur;
    texteAssocie: string;
    uid: string;
}

export interface Rapporteur{
    acteurRef: string
    etudePlfRef: string;
    typeRapporteur: TypeRapporteur;
}

export interface Mission{
    libelleCourt: string;
    libelleLong: string;
    missions: Missions;
    typeBudget: TypeBudget;
    typeMission: TypeMission;

}

export interface Missions{
    missions: MissionBase;
}

export interface MissionBase{
    libelleCourt: string;
    libelleLong: string;
    typeBudget: TypeBudget;
    typeMission: TypeMission;
}

export interface TitreDossier{
    titre: string;
    titreChemin: string;
    senatChemin: string;
}

export interface CodeEtLibelle{
    code: string;
    libelle: string;
}

// Enums 
export enum TypeBudget{
    BUDGET_ANNEXE,
    BUDGET_GENERAL,
    COMPTE_DE_COMMERCE_ET_DOPERATIONS_MONETAIRES,
    COMPTE_DE_CONCOURS_FINANCIER,
    COMPTE_SPECIAL,
    PREMIERE_PARTIE
}

export enum TypeMission{
    MISSION_PRINCIPALE,
    MISSION_SECONDAIRE,
    PARTIE_DE_MISSION
}

export enum TypeRapporteur{
    RAPPORTEUR,
    RAPPORTEUR_GENERAL,
    RAPPORTEUR_POUR_AVIS,
    RAPPORTEUR_SPECIAL
}
