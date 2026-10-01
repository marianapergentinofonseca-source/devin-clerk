export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Coliving_App",
  description: "App para controlar as contas de um apartamento compartilhado",
  emoji: "🏠",
  accent: "#0d9488",
  upcomingFeatures: [
    {
      title: "Add a shared bill",
      description:
        "Log rent, electricity, internet and other bills with an amount and due date.",
    },
    {
      title: "Split bills automatically",
      description:
        "Divide each bill equally or by custom shares between roommates.",
    },
    {
      title: "Who owes whom",
      description:
        "See a single balance per roommate showing who should pay whom.",
    },
    {
      title: "Invite roommates",
      description: "Add your flatmates to the apartment by email.",
    },
    {
      title: "Mark as paid",
      description: "Settle a debt and keep a history of every payment.",
    },
  ] satisfies Feature[],
};
