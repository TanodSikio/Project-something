import "server-only";

export type Project = { slug: string; title: string; year: number; summary: string};

const PROJECTS: Project[] = [
    { slug: "store-ledger", title: "Store Ledger", year: 2023, summary: "A web application for managing store inventory and sales." },
    { slug: "org-check-in", title: "Org Check-In", year: 2022, summary: "A mobile app for event check-ins and attendee management." },
    { slug: "barangay-reports", title: "Barangay Reports", year: 2021, summary: "A platform for generating and managing barangay reports." },
];

export const getProjects = async () => PROJECTS;
export const getProject = async (slug: string) => PROJECTS.find((p) => p.slug === slug);