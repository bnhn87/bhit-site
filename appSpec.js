// SiteFlow Pro Spec

const appSpec = {
  metadata: {
    name: "SiteFlow Pro",
    platforms: ["iOS", "Android", "Web/PWA"],
    offlineEnabled: true,
    roles: ["Labour", "Supervisor", "ProjectManager", "Admin"],
    languages: ["en", "pl", "es", "ro"]
  },
  features: {
    floorPlanMarkup: {
      pinDrop: true,
      statuses: [
        { type: "Complete", color: "green", opacity: 0.4, requires: ["image"] },
        {
          type: "Damage",
          color: "red",
          opacity: 0.4,
          requires: ["image", "description"],
          optional: ["packagingDamaged"]
        },
        {
          type: "Snag",
          color: "amber",
          opacity: 0.4,
          requires: ["image", "description"]
        },
        {
          type: "Missing Components",
          color: "blue",
          opacity: 0.4,
          requires: ["image", "componentsRequired"]
        }
      ]
    },
    projectSetup: {
      autoParseDocs: true,
      docs: ["WorksOrder", "DeliveryNote", "RAMS", "Quote"],
      fields: [
        "projectTitle",
        "poNumber",
        "startDate",
        "startTime",
        "duration",
        "labourRequired",
        "equipmentRequired",
        "loadingBayDetails",
        "liftDimensions",
        "upliftViaStairsFlag"
      ],
      contacts: ["projectManager", "siteManager", "clientContact"]
    },
    worksOrderIntegration: {
      autoMapProducts: true,
      aiAssistMatch: true,
      fallbackToManual: true
    },
    projectCompletion: {
      requireAllComplete: true,
      overridePermission: "ProjectManager",
      generateSubProjectsForIssues: true
    },
    accessControl: {
      Labour: ["viewPlan", "updateStatus", "uploadImage"],
      Supervisor: ["assignLabour", "reviewStatus"],
      ProjectManager: ["overrideStatus", "approveSubProjects", "viewQuote"],
      Admin: ["fullAccess", "userManagement"]
    },
    shareableLinks: {
      perProject: true,
      qrCode: true,
      languageSelector: true
    },
    timeTracking: {
      quoteBased: true,
      phases: ["uplift", "unwrap", "level", "clearRubbish"]
    }
  },
  advancedFeatures: {
    predictiveAI: true,
    realTimeDashboard: true,
    arOverlay: true,
    videoSupport: true,
    iotIntegration: true,
    sustainabilityTracking: true,
    clientPortal: true,
    modularFeatureToggle: true
  },
  techStack: {
    frontend: ["React Native", "Next.js"],
    backend: ["Node.js", "Express"],
    storage: ["AWS S3"],
    db: ["PostgreSQL"],
    auth: ["OAuth2", "JWT"],
    ai: ["OpenAI", "AWS Rekognition"],
    ocr: ["Google Vision API", "AWS Textract"]
  },
  deliverables: [
    "Installer UI",
    "Admin Portal",
    "Project Management Console",
    "Floor Plan Markup Engine",
    "Quote-Time Sync Logic",
    "Sub-project Snag System",
    "Multi-language Labour Link System"
  ]
};

export default appSpec;
