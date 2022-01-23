export const SKILLS = "Skills";

export type Skill = {
  skillColor:
    | "primary"
    | "default"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  skillLabel: string;
};

const PRIMARY_SKILLS = [
  "React",
  "Typescript",
  "Javascript",
  "GraphQL",
  "HTML",
  "CSS",
  "Node.js",
];

const SECONDARY_SKILLS = [
  "NestJS",
  "Next.js",
  "Express",
  "Angular",
  "Handlebars.js",
];

const TERTIARY_SKILLS = ["Prisma", "Postgresql", "MongoDB", "SQL"];

const QUATERNARY_SKILLS = [
  "Jest",
  "Cypress",
  "Selenium",
  "Unit tests",
  "integration tests",
  "e2e",
];

const QUINARY_SKILLS = [
  "Docker",
  "CircleCi",
  "DevSpace",
  "GitHub Actions",
  "Git",
  "REST API",
  "Webhooks",
  "MVC",
  "Agile",
];

export const KNOWN_SKILLS: Array<Skill> = [
  ...PRIMARY_SKILLS.map((skill) => {
    return {
      skillColor: "primary",
      skillLabel: skill,
    } as Skill;
  }),
  ...SECONDARY_SKILLS.map((skill) => {
    return {
      skillColor: "secondary",
      skillLabel: skill,
    } as Skill;
  }),
  ...TERTIARY_SKILLS.map((skill) => {
    return {
      skillColor: "info",
      skillLabel: skill,
    } as Skill;
  }),
  ...QUATERNARY_SKILLS.map((skill) => {
    return {
      skillColor: "success",
      skillLabel: skill,
    } as Skill;
  }),
  ...QUINARY_SKILLS.map((skill) => {
    return {
      skillColor: "default",
      skillLabel: skill,
    } as Skill;
  }),
].sort((a, b) =>
  a.skillLabel > b.skillLabel ? 1 : b.skillLabel > a.skillLabel ? -1 : 0
);
