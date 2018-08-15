/*
 * Interfaces typescript des réunions de l'assemblée nationale
 * 
 * @author: Nelson Herbin <nelson@herbin.info>
 * 
 */

export interface Reunion{
    compteRenduRef: string;
    cycleDeVie: CycleDeVie;
    demandeurs: Demandeurs;
    formatReunion: string;
    identifiants: Identifiants;
    infosReunionsInternationale: InfosReunionsInternationale;
    lieu: LieuReunion;
    odj: Odj;
    organeReuni: Organe;
    organeReuniRef: string;
    ouverturePresse: Boolean;
    participants: Participants;
    sessionRef: string;
    timestampDebut: DateTimeFixedOffset;
    timestampFin: string;
    typeReunion: string;
    uid: string;
}

export interface CycleDeVie{
    chrono: Chrono;
    etat: string;
}

export interface Chrono{
    cloture: string;
    creation: string;
}

export interface Demandeurs{
    acteurs: Acteur;
    acteursRefs: string;
    organe: Organe;
    organeRef: string;
}

export interface Acteur{
    etatCivil: EtatCivil;
    commissionPermanente(date: string): OrganeParlementaire;
    groupePolitique(date: string): GroupePolitique;
    mandats(date: string): Mandat;
    photo: PhotoDepute;
    profession: Profession;
    uid: string;
    uriHatvp: string;
}

export interface EtatCivil{
    dateDeces: string;
    ident: Ident;
    infoNaissance: InfoNaissance;
}

export interface Ident{
    alpha: string;
    civ: string;
    nom: string;
    prenom: string;
    trigramme: string;
}

export interface OrganeParlementaire{
    chambre: any;
    codeType: CodeTypeOrgane;
    legislature: string;
    libelle: string;
    libelleAbrege: string;
    libelleAbrev: string;
    libelleEdition: string;
    organeParent: string;
    regime: string;
    secretariat: Secretariat;
    uid: string;
    vimode: Vimode;
}

export enum CodeTypeOrgane{
    API,
    ASSEMBLEE,
    CJR,
    CMP,
    CNPE,
    CNPS,
    COMNL,
    COMPER,
    COMSENAT,
    COMSPSENAT,
    CONFPT,
    CONSTITU,
    DELEG,
    DELEGBUREAU,
    DELEGSENAT,
    GA,
    GE,
    GEVI,
    GOUVERNEMENT,
    GP,
    GROUPESENAT,
    MINISTERE,
    MISINFO,
    MISINFOCOM,
    MISINFOPRE,
    OFFPAR,
    ORGAINT,
    ORGEXTPARL,
    PARPOL,
    PRESREP,
    SENAT
}

export interface Secretariat{
    secretaire01: string;
    secretaire02: string;
}

export interface Vimode{
    dateAgrement: string;
    dateDebut: string;
    dateFin: string;
}

export interface GroupePolitique{
    chambre: any;
    codeType: CodeTypeOrgane;
    legislature: string;
    libelle: string;
    libelleAbrege: string;
    libelleAbrev: string;
    libelleEdition: string;
    organeParent: string;
    positionPolitique: string;
    regime: string;
    secretariat: Secretariat;
    uid: string;
    vimode: Vimode;
}

export interface Mandat{
    acteur: Acteur;
    acteurRef: string;
    dateDebut: string;
    dateFin: string;
    datePublication: string;
    infosQualite: InfosQualite;
    legislature: string;
    nominPrincipale: Boolean;
    organes: Organe<GroupePolitique | OrganeExterne | OrganeExtraParlementaire | OrganeParlementaireInternational>;
    organesRefs: string;
    preseance: string;
    typeOrgane: CodeTypeOrgane;
    uid: string;
}
export interface Organe<T>{
    chambre: any;
    codeType: CodeTypeOrgane;
    legislature: string;
    libelle: string;
    libelleAbrege: string;
    libelleAbrev: string;
    libelleEdition: string;
    organeParent: string;
    positionPolitique: string;
    regime: string;
    secretariat: Secretariat;
    uid: string;
    vimode: Vimode;
}
export interface GroupePolitique{}
export interface OrganeExterne {}
export interface OrganeExtraParlementaire{}
export interface OrganeParlementaireInternational{}

export interface InfosQualite{
    codeQualite: string;
    libQualite: string;
    libQualiteSex: string;
}

export interface MandatMission{
    acteur: Acteur;
    acteurRef: string;
    dateDebut: string;
    dateFin: string;
    datePublication: string;
    infosQualite: InfosQualite;
    legislature: string;
    libelle: string;
    missionPrecedenteRef: string;
    missionSuivanteRef: string;
    nominPrincipale: Boolean;
    organes: Organe<GroupePolitique | OrganeExterne | OrganeExtraParlementaire | OrganeParlementaireInternational>
    organesRefs: string;
    preseance: string;
    typeOrgane: CodeTypeOrgane;
    uid: string;
}


export interface MandatParlementaire{
    acteur: Acteur;
    acteurRef: string;
    collaborateurs: Collaborateur;
    dateDebut: string;
    dateFin: string;
    datePublication: string;
    election: Election;
    infosHorsSian: InfosHorsSian;
    infosQualite: InfosQualite;
    legislature: string;
    mandature: Mandature;
    nominPrincipale: Boolean;
    organes: Organe;
    organesRefs: string;
    preseance: string;
    typeOrgane: CodeTypeOrgane;
    uid: string;
}

export interface Collaborateur{
    dateDebut: any;
    dateFin: any;
    nom: string
    prenom: string
    qualite: string
}

export interface Election{
    causeMandat: string;
    lieu: LieuElection
    refCirconscription: string;
}

export interface 