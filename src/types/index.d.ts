export interface User {
    id: string;
    username: string;
    name: string;
    email: string;
    role: "admin" | "operator";
    lastLogin?: Date;
}
export interface Participant {
    id?: string;
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    birthPlace?: string;
    address?: {
        commune?: string;
        neighborhood?: string;
        subNeighborhood?: string;
    };
    nationality?: string;
    contact?: string;
    educationLevel?: string;
    diplomas?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}
export interface FamilyInfo {
    participantId?: string;
    fatherName?: string;
    fatherResidence?: string;
    fatherProfession?: string;
    fatherContact?: string;
    motherName?: string;
    motherResidence?: string;
    motherProfession?: string;
    motherContact?: string;
    guardianName?: string;
    guardianResidence?: string;
    guardianProfession?: string;
    guardianContact?: string;
    maritalStatus?: string;
    familyStatus?: string;
    familyStatusOther?: string;
    isOrphan?: string;
    orphanType?: string;
}
export interface ProfessionalBackground {
    participantId?: string;
    previousJobs?: Array<{
        title?: string;
        duration?: string;
        description?: string;
    }>;
    desiredJob?: string;
    livingBeforeCenter?: string;
    hasPartner?: string;
}
export interface ProfessionalDetails {
    pastProfession?: string;
    currentProfession?: string;
}
export interface SchoolReturn {
    hasReturnedToSchool?: boolean;
    returnReason?: string;
    schoolStopDate?: string;
    lastClass?: string;
    desiredClass?: string;
    emergencyProject?: string;
    dormitory?: string;
    formDate?: string;
}
export interface FormData {
    participant: Participant;
    familyInfo: FamilyInfo;
    professionalBackground: ProfessionalBackground;
    professionalDetails?: ProfessionalDetails;
    schoolReturn?: SchoolReturn;
}
export interface SearchFilter {
    query: string;
    commune?: string;
    educationLevel?: string;
    nationality?: string;
    desiredJob?: string;
}
export interface StatisticData {
    label: string;
    value: number;
    percentage?: number;
}
