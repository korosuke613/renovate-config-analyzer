import { SelectAllConfig } from "renovate/dist/workers/types";
import { PackageFile } from "renovate/dist/modules/manager/types";

export default {
  config: {
    detectGlobalManagerConfig: false,
    detectHostRulesFromEnv: false,
    postUpgradeTasks: {
      commands: [],
      fileFilters: [],
      executionMode: "update",
    },
    onboardingBranch: "renovate/configure",
    onboardingCommitMessage: undefined,
    onboardingConfigFileName: "renovate.json",
    onboardingNoDeps: false,
    onboardingPrTitle: "Configure Renovate",
    configMigration: false,
    productLinks: {
      documentation: "https://docs.renovatebot.com/",
      help: "https://github.com/renovatebot/renovate/discussions",
      homepage: "https://github.com/renovatebot/renovate",
    },
    globalExtends: [],
    description: [
      "Enable Renovate Dependency Dashboard creation.",
      "Use semantic commit type `fix` for dependencies and `chore` for all others if semantic commits are in use.",
      "Ignore `node_modules`, `bower_components`, `vendor` and various test/tests directories.",
      "Group known monorepo packages together.",
      "Use curated list of recommended non-monorepo package groupings.",
      "Apply crowd-sourced package replacement rules.",
      "Apply crowd-sourced workarounds for known problems with packages.",
      "Apply label `renovate` to PRs.",
      "Evaluate schedules according to timezone `Asia/Tokyo`.",
      "Raise PR when vulnerability alerts are detected with label `security`.",
      "If Renovate detects semantic commits, it will use semantic commit type `chore` for all commits.",
      "Schedule monthly.",
    ],
    enabled: true,
    constraintsFiltering: "none",
    repositoryCache: "disabled",
    repositoryCacheType: "local",
    force: {},
    draftPR: false,
    printConfig: false,
    customDatasources: {},
    composerIgnorePlatformReqs: [],
    goGetDirs: ["./..."],
    onboarding: true,
    onboardingConfig: {
      $schema: "https://docs.renovatebot.com/renovate-schema.json",
    },
    onboardingRebaseCheckbox: false,
    forkProcessing: "enabled",
    includeMirrors: false,
    forkToken: undefined,
    forkOrg: undefined,
    requireConfig: "required",
    optimizeForDisabled: false,
    dependencyDashboard: true,
    dependencyDashboardApproval: false,
    dependencyDashboardAutoclose: false,
    dependencyDashboardTitle: "Dependency Dashboard",
    dependencyDashboardHeader:
      "This issue lists Renovate updates and detected dependencies. Read the [Dependency Dashboard](https://docs.renovatebot.com/key-concepts/dashboard/) docs to learn more.",
    dependencyDashboardFooter: undefined,
    dependencyDashboardLabels: undefined,
    dependencyDashboardOSVVulnerabilitySummary: "none",
    configWarningReuseIssue: true,
    privateKeyPath: undefined,
    privateKeyPathOld: undefined,
    encrypted: undefined,
    timezone: "Asia/Tokyo",
    schedule: ["before 4am on the first day of the month"],
    automergeSchedule: ["at any time"],
    updateNotScheduled: true,
    persistRepoData: false,
    ignorePlugins: false,
    ignoreScripts: true,
    username: undefined,
    password: undefined,
    npmrc: undefined,
    npmrcMerge: false,
    npmToken: undefined,
    updateLockFiles: true,
    skipInstalls: undefined,
    baseBranches: [],
    useBaseBranchConfig: "none",
    gitIgnoredAuthors: [],
    enabledManagers: [],
    includePaths: [],
    ignorePaths: [
      "**/node_modules/**",
      "**/bower_components/**",
      "**/vendor/**",
      "**/examples/**",
      "**/__tests__/**",
      "**/test/**",
      "**/tests/**",
      "**/__fixtures__/**",
    ],
    excludeCommitPaths: [],
    registryAliases: {},
    defaultRegistryUrls: undefined,
    registryUrls: undefined,
    extractVersion: undefined,
    versioning: undefined,
    azureWorkItemId: 0,
    autoApprove: false,
    ignoreDeps: [],
    updateInternalDeps: false,
    packageRules: [
      {
        matchPackagePatterns: ["*"],
        semanticCommitType: "chore",
      },
      {
        matchDepTypes: ["dependencies", "require"],
        semanticCommitType: "fix",
      },
      {
        matchDatasources: ["maven"],
        matchDepTypes: [
          "compile",
          "provided",
          "runtime",
          "system",
          "import",
          "parent",
        ],
        semanticCommitType: "fix",
      },
      {
        description: [
          "accounts monorepo",
          "Group packages from accounts monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/accounts-js/accounts"],
        groupName: "accounts monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "acot monorepo",
          "Group packages from acot monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/acot-a11y/acot"],
        groupName: "acot monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "ag-grid monorepo",
          "Group packages from ag-grid monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/ag-grid/ag-grid"],
        groupName: "ag-grid monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "algolia-instantsearch monorepo",
          "Group packages from algolia-instantsearch monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/algolia/instantsearch",
          "https://github.com/algolia/instantsearch.js",
        ],
        groupName: "algolia-instantsearch monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "algolia-react-instantsearch monorepo",
          "Group packages from algolia-react-instantsearch monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/algolia/react-instantsearch"],
        groupName: "algolia-react-instantsearch monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "algoliasearch-autocomplete monorepo",
          "Group packages from algoliasearch-autocomplete monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/algolia/autocomplete"],
        groupName: "algoliasearch-autocomplete monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "algoliasearch-client-javascript monorepo",
          "Group packages from algoliasearch-client-javascript monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/algolia/algoliasearch-client-javascript",
        ],
        groupName: "algoliasearch-client-javascript monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "angular monorepo",
          "Group packages from angular monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/angular/angular"],
        groupName: "angular monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "angular-cli monorepo",
          "Group packages from angular-cli monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/angular/angular-cli"],
        groupName: "angular-cli monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "angular-eslint monorepo",
          "Group packages from angular-eslint monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/angular-eslint/angular-eslint"],
        groupName: "angular-eslint monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "angularfire monorepo",
          "Group packages from angularfire monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/angular/angularfire"],
        groupName: "angularfire monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "angularjs monorepo",
          "Group packages from angularjs monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/angular/angular.js"],
        groupName: "angularjs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "apollo-server monorepo",
          "Group packages from apollo-server monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/apollographql/apollo-server"],
        groupName: "apollo-server monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "apolloclient monorepo",
          "Group packages from apolloclient monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/apollographql/apollo-client"],
        groupName: "apolloclient monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "applicationinsights-dotnet monorepo",
          "Group packages from applicationinsights-dotnet monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/Microsoft/ApplicationInsights-dotnet",
        ],
        groupName: "applicationinsights-dotnet monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "arcus.background-jobs monorepo",
          "Group packages from arcus.background-jobs monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/arcus-azure/arcus.backgroundjobs",
        ],
        groupName: "arcus.background-jobs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "arcus.event-grid monorepo",
          "Group packages from arcus.event-grid monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/arcus-azure/arcus.eventgrid"],
        groupName: "arcus.event-grid monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "arcus.messaging monorepo",
          "Group packages from arcus.messaging monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/arcus-azure/arcus.messaging"],
        groupName: "arcus.messaging monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "arcus.observability monorepo",
          "Group packages from arcus.observability monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/arcus-azure/arcus.observability"],
        groupName: "arcus.observability monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "arcus.security monorepo",
          "Group packages from arcus.security monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/arcus-azure/arcus.security"],
        groupName: "arcus.security monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "arcus.webapi monorepo",
          "Group packages from arcus.webapi monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/arcus-azure/arcus.webapi"],
        groupName: "arcus.webapi monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "aspnet aspnetwebstack monorepo",
          "Group packages from aspnet aspnetwebstack monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/aspnet/AspNetWebStack"],
        groupName: "aspnet aspnetwebstack monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "aspnet extensions monorepo",
          "Group packages from aspnet extensions monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/aspnet/Extensions"],
        groupName: "aspnet extensions monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "aspnet-api-versioning monorepo",
          "Group packages from aspnet-api-versioning monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/Microsoft/aspnet-api-versioning"],
        groupName: "aspnet-api-versioning monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "automapper-dotnet monorepo",
          "Group packages from automapper-dotnet monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/AutoMapper/AutoMapper",
          "https://github.com/AutoMapper/AutoMapper.Extensions.Microsoft.DependencyInjection",
        ],
        groupName: "automapper-dotnet monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "aws-cdk monorepo",
          "Group packages from aws-cdk monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/aws/aws-cdk"],
        groupName: "aws-cdk monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "aws-lambda-powertools-typescript monorepo",
          "Group packages from aws-lambda-powertools-typescript monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/awslabs/aws-lambda-powertools-typescript",
          "https://github.com/aws-powertools/powertools-lambda-typescript",
        ],
        groupName: "aws-lambda-powertools-typescript monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "aws-sdk-js-v3 monorepo",
          "Group packages from aws-sdk-js-v3 monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/aws/aws-sdk-js-v3"],
        groupName: "aws-sdk-js-v3 monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "aws-sdk-net monorepo",
          "Group packages from aws-sdk-net monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/aws/aws-sdk-net"],
        groupName: "aws-sdk-net monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "awsappsync monorepo",
          "Group packages from awsappsync monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/awslabs/aws-mobile-appsync-sdk-js",
        ],
        groupName: "awsappsync monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "azure azure-libraries-for-net monorepo",
          "Group packages from azure azure-libraries-for-net monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/Azure/azure-libraries-for-net"],
        groupName: "azure azure-libraries-for-net monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "azure azure-sdk-for-net monorepo",
          "Group packages from azure azure-sdk-for-net monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/Azure/azure-sdk-for-net"],
        groupName: "azure azure-sdk-for-net monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "azure azure-storage-net monorepo",
          "Group packages from azure azure-storage-net monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/Azure/azure-storage-net"],
        groupName: "azure azure-storage-net monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "babel monorepo",
          "Group packages from babel monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/babel/babel"],
        groupName: "babel monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "baset monorepo",
          "Group packages from baset monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/igmat/baset"],
        groupName: "baset monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "brave monorepo",
          "Group packages from brave monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/openzipkin/brave"],
        groupName: "brave monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "bugsnag-js monorepo",
          "Group packages from bugsnag-js monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/bugsnag/bugsnag-js"],
        groupName: "bugsnag-js monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "cake monorepo",
          "Group packages from cake monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/cake-build/cake"],
        groupName: "cake monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "capacitor monorepo",
          "Group packages from capacitor monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/ionic-team/capacitor"],
        groupName: "capacitor monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "chakra-ui monorepo",
          "Group packages from chakra-ui monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/chakra-ui/chakra-ui"],
        groupName: "chakra-ui monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "chromely monorepo",
          "Group packages from chromely monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/chromelyapps/Chromely"],
        groupName: "chromely monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^@cds/", "^@clr/"],
        description: ["Group packages from clarity monorepo together."],
        groupName: "clarity monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "clearscript monorepo",
          "Group packages from clearscript monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/microsoft/ClearScript",
          "https://github.com/Microsoft/ClearScript",
        ],
        groupName: "clearscript monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "commitlint monorepo",
          "Group packages from commitlint monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/conventional-changelog/commitlint",
        ],
        groupName: "commitlint monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "contentful-rich-text monorepo",
          "Group packages from contentful-rich-text monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/contentful/rich-text"],
        groupName: "contentful-rich-text monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "datadog-browser-sdk monorepo",
          "Group packages from datadog-browser-sdk monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/DataDog/browser-sdk"],
        groupName: "datadog-browser-sdk monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "date-io monorepo",
          "Group packages from date-io monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/dmtrKovalenko/date-io"],
        groupName: "date-io monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "deno monorepo",
          "Group packages from deno monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/denoland/deno"],
        groupName: "deno monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "devextreme-reactive monorepo",
          "Group packages from devextreme-reactive monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/DevExpress/devextreme-reactive"],
        groupName: "devextreme-reactive monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "dnd-kit monorepo",
          "Group packages from dnd-kit monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/clauderic/dnd-kit"],
        groupName: "dnd-kit monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "docusaurus monorepo",
          "Group packages from docusaurus monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/facebook/docusaurus"],
        groupName: "docusaurus monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "dotnet monorepo",
          "Group packages from dotnet monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/dotnet/aspnetcore",
          "https://github.com/dotnet/efcore",
          "https://github.com/dotnet/extensions",
          "https://github.com/dotnet/maui",
          "https://github.com/dotnet/runtime",
          "https://github.com/dotnet/sdk",
        ],
        groupName: "dotnet monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "dotnet-azure-ad-identitymodel-extensions monorepo",
          "Group packages from dotnet-azure-ad-identitymodel-extensions monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet",
        ],
        groupName: "dotnet-azure-ad-identitymodel-extensions monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "dotnet-azure-ad-microsoft-identity-web monorepo",
          "Group packages from dotnet-azure-ad-microsoft-identity-web monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/AzureAD/microsoft-identity-web"],
        groupName: "dotnet-azure-ad-microsoft-identity-web monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "dotnet-wcf monorepo",
          "Group packages from dotnet-wcf monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/dotnet/wcf"],
        groupName: "dotnet-wcf monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "dropwizard monorepo",
          "Group packages from dropwizard monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/dropwizard/dropwizard"],
        groupName: "dropwizard monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "elastic-apm-agent-rum-js monorepo",
          "Group packages from elastic-apm-agent-rum-js monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/elastic/apm-agent-rum-js"],
        groupName: "elastic-apm-agent-rum-js monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "electron-forge monorepo",
          "Group packages from electron-forge monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/electron-userland/electron-forge",
        ],
        groupName: "electron-forge monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "ember-decorators monorepo",
          "Group packages from ember-decorators monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/ember-decorators/ember-decorators",
        ],
        groupName: "ember-decorators monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "emojibase monorepo",
          "Group packages from emojibase monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/milesj/emojibase"],
        groupName: "emojibase monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "emotion monorepo",
          "Group packages from emotion monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/emotion-js/emotion"],
        groupName: "emotion monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "eslint-config-globex monorepo",
          "Group packages from eslint-config-globex monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/GlobexDesignsInc/eslint-config-globex",
        ],
        groupName: "eslint-config-globex monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "expo monorepo",
          "Group packages from expo monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/expo/expo"],
        groupName: "expo monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "fabric8-kubernetes-client monorepo",
          "Group packages from fabric8-kubernetes-client monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/fabric8io/kubernetes-client"],
        groupName: "fabric8-kubernetes-client monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "feathers monorepo",
          "Group packages from feathers monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/feathersjs/feathers"],
        groupName: "feathers monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "feign monorepo",
          "Group packages from feign monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/OpenFeign/feign"],
        groupName: "feign monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "fela monorepo",
          "Group packages from fela monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/robinweser/fela"],
        groupName: "fela monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "fimbullinter monorepo",
          "Group packages from fimbullinter monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/fimbullinter/wotan"],
        groupName: "fimbullinter monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "flopflip monorepo",
          "Group packages from flopflip monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/tdeekens/flopflip"],
        groupName: "flopflip monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "fontsource monorepo",
          "Group packages from fontsource monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/fontsource/fontsource",
          "https://github.com/fontsource/font-files",
        ],
        groupName: "fontsource monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "formatjs monorepo",
          "Group packages from formatjs monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/formatjs/formatjs"],
        groupName: "formatjs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "framework7 monorepo",
          "Group packages from framework7 monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/framework7io/framework7"],
        groupName: "framework7 monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "gatsby monorepo",
          "Group packages from gatsby monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/gatsbyjs/gatsby"],
        groupName: "gatsby monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "gitbeaker monorepo",
          "Group packages from gitbeaker monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/jdalrymple/gitbeaker"],
        groupName: "gitbeaker monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "grafana monorepo",
          "Group packages from grafana monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/grafana/grafana"],
        groupName: "grafana monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "graphql-mesh monorepo",
          "Group packages from graphql-mesh monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/Urigo/graphql-mesh"],
        groupName: "graphql-mesh monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "graphql-modules monorepo",
          "Group packages from graphql-modules monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/Urigo/graphql-modules"],
        groupName: "graphql-modules monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "graphql-tools monorepo",
          "Group packages from graphql-tools monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/ardatan/graphql-tools"],
        groupName: "graphql-tools monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "graphqlcodegenerator monorepo",
          "Group packages from graphqlcodegenerator monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/dotansimha/graphql-code-generator-community",
          "https://github.com/dotansimha/graphql-code-generator",
          "https://github.com/dotansimha/graphql-codegen",
        ],
        groupName: "graphqlcodegenerator monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "groovy monorepo",
          "Group packages from groovy monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/apache/groovy"],
        groupName: "groovy monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "guava monorepo",
          "Group packages from guava monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/google/guava"],
        groupName: "guava monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "Hangfire monorepo",
          "Group packages from Hangfire monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/HangfireIO/Hangfire"],
        groupName: "Hangfire monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "infrastructure-ui monorepo",
          "Group packages from infrastructure-ui monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/instructure/instructure-ui"],
        groupName: "infrastructure-ui monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "ionic-native monorepo",
          "Group packages from ionic-native monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/ionic-team/ionic-native"],
        groupName: "ionic-native monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "istanbuljs monorepo",
          "Group packages from istanbuljs monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/istanbuljs/istanbuljs"],
        groupName: "istanbuljs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "jasmine monorepo",
          "Group packages from jasmine monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/jasmine/jasmine"],
        groupName: "jasmine monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "javahamcrest monorepo",
          "Group packages from javahamcrest monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/hamcrest/JavaHamcrest"],
        groupName: "javahamcrest monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "javascriptengineswitcher monorepo",
          "Group packages from javascriptengineswitcher monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/Taritsyn/JavaScriptEngineSwitcher",
        ],
        groupName: "javascriptengineswitcher monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "jersey monorepo",
          "Group packages from jersey monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/eclipse-ee4j/jersey"],
        groupName: "jersey monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "jest monorepo",
          "Group packages from jest monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/facebook/jest"],
        groupName: "jest monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "jsplumb monorepo",
          "Group packages from jsplumb monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/jsplumb/jsplumb"],
        groupName: "jsplumb monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "junit5 monorepo",
          "Group packages from junit5 monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/junit-team/junit5"],
        groupName: "junit5 monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "kotlin monorepo",
          "Group packages from kotlin monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/JetBrains/kotlin"],
        groupName: "kotlin monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "lerna monorepo",
          "Group packages from lerna monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/lerna/lerna"],
        groupName: "lerna monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "linguijs monorepo",
          "Group packages from linguijs monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/lingui/js-lingui"],
        groupName: "linguijs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "loopback monorepo",
          "Group packages from loopback monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/strongloop/loopback-next",
          "https://github.com/loopbackio/loopback-next",
        ],
        groupName: "loopback monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "lrnwebcomponents monorepo",
          "Group packages from lrnwebcomponents monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/elmsln/lrnwebcomponents"],
        groupName: "lrnwebcomponents monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "mailing monorepo",
          "Group packages from mailing monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/sofn-xyz/mailing"],
        groupName: "mailing monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "mantine monorepo",
          "Group packages from mantine monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/mantinedev/mantine"],
        groupName: "mantine monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "mapstruct monorepo",
          "Group packages from mapstruct monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/mapstruct/mapstruct"],
        groupName: "mapstruct monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "masstransit monorepo",
          "Group packages from masstransit monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/MassTransit/MassTransit"],
        groupName: "masstransit monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "material-components-web monorepo",
          "Group packages from material-components-web monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/material-components/material-components-web",
        ],
        groupName: "material-components-web monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "material-ui monorepo",
          "Group packages from material-ui monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/mui-org/material-ui",
          "https://github.com/mui/material-ui",
        ],
        groupName: "material-ui monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "mdc-react monorepo",
          "Group packages from mdc-react monorepo together.",
        ],
        matchSourceUrls: ["material-components/material-components-web-react"],
        groupName: "mdc-react monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "mdx monorepo",
          "Group packages from mdx monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/mdx-js/mdx"],
        groupName: "mdx monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "middy-js monorepo",
          "Group packages from middy-js monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/middyjs/middy"],
        groupName: "middy-js monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "mikro-orm monorepo",
          "Group packages from mikro-orm monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/mikro-orm/mikro-orm"],
        groupName: "mikro-orm monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "mockito monorepo",
          "Group packages from mockito monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/mockito/mockito"],
        groupName: "mockito monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "mstest monorepo",
          "Group packages from mstest monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/microsoft/testfx"],
        groupName: "mstest monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "mutation-testing-elements monorepo",
          "Group packages from mutation-testing-elements monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/stryker-mutator/mutation-testing-elements",
        ],
        groupName: "mutation-testing-elements monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "nest monorepo",
          "Group packages from nest monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/nestjs/nest",
          "https://github.com/nestjs/passport",
          "https://github.com/nestjs/schematics",
          "https://github.com/nestjs/terminus",
        ],
        groupName: "nest monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "netty monorepo",
          "Group packages from netty monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/netty/netty"],
        groupName: "netty monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "neutrino monorepo",
          "Group packages from neutrino monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/neutrinojs/neutrino",
          "https://github.com/mozilla-neutrino/neutrino-dev",
        ],
        groupName: "neutrino monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "nexpect monorepo",
          "Group packages from nexpect monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/fluffynuts/NExpect"],
        groupName: "nexpect monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "nextjs monorepo",
          "Group packages from nextjs monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/zeit/next.js",
          "https://github.com/vercel/next.js",
        ],
        groupName: "nextjs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "nextra monorepo",
          "Group packages from nextra monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/shuding/nextra"],
        groupName: "nextra monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "ngx-formly monorepo",
          "Group packages from ngx-formly monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/ngx-formly/ngx-formly"],
        groupName: "ngx-formly monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "ngxs-store monorepo",
          "Group packages from ngxs-store monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/ngxs/store"],
        groupName: "ngxs-store monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "nivo monorepo",
          "Group packages from nivo monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/plouc/nivo"],
        groupName: "nivo monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "nswag monorepo",
          "Group packages from nswag monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/RicoSuter/NSwag"],
        groupName: "nswag monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "nuxtjs monorepo",
          "Group packages from nuxtjs monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/nuxt/nuxt.js"],
        groupName: "nuxtjs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "opentelemetry-dotnet monorepo",
          "Group packages from opentelemetry-dotnet monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/open-telemetry/opentelemetry-dotnet",
        ],
        groupName: "opentelemetry-dotnet monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "opentelemetry-go monorepo",
          "Group packages from opentelemetry-go monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/open-telemetry/opentelemetry-go"],
        groupName: "opentelemetry-go monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "opentelemetry-js monorepo",
          "Group packages from opentelemetry-js monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/open-telemetry/opentelemetry-js"],
        groupName: "opentelemetry-js monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "orleans monorepo",
          "Group packages from orleans monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/dotnet/orleans"],
        groupName: "orleans monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "parcel monorepo",
          "Group packages from parcel monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/parcel-bundler/parcel"],
        groupName: "parcel monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "percy-cli monorepo",
          "Group packages from percy-cli monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/percy/cli"],
        groupName: "percy-cli monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "picassojs monorepo",
          "Group packages from picassojs monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/qlik-oss/picasso.js"],
        groupName: "picassojs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "pixijs monorepo",
          "Group packages from pixijs monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/pixijs/pixi.js",
          "https://github.com/pixijs/pixijs",
        ],
        groupName: "pixijs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "playwright monorepo",
          "Group packages from playwright monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/Microsoft/playwright"],
        groupName: "playwright monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "pnpjs monorepo",
          "Group packages from pnpjs monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/pnp/pnpjs"],
        groupName: "pnpjs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "pollyjs monorepo",
          "Group packages from pollyjs monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/Netflix/pollyjs"],
        groupName: "pollyjs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "pouchdb monorepo",
          "Group packages from pouchdb monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/pouchdb/pouchdb"],
        groupName: "pouchdb monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "prisma monorepo",
          "Group packages from prisma monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/prisma/prisma"],
        groupName: "prisma monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "quartznet monorepo",
          "Group packages from quartznet monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/quartznet/quartznet"],
        groupName: "quartznet monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "reach-ui monorepo",
          "Group packages from reach-ui monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/reach/reach-ui"],
        groupName: "reach-ui monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "react monorepo",
          "Group packages from react monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/facebook/react"],
        groupName: "react monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "react-admin monorepo",
          "Group packages from react-admin monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/marmelab/react-admin"],
        groupName: "react-admin monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "react-apollo monorepo",
          "Group packages from react-apollo monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/apollographql/react-apollo"],
        groupName: "react-apollo monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "react-dnd monorepo",
          "Group packages from react-dnd monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/react-dnd/react-dnd"],
        groupName: "react-dnd monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "react-navigation monorepo",
          "Group packages from react-navigation monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/react-navigation/react-navigation",
        ],
        groupName: "react-navigation monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "react-page monorepo",
          "Group packages from react-page monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/react-page/react-page"],
        groupName: "react-page monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "react-router monorepo",
          "Group packages from react-router monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/ReactTraining/react-router",
          "https://github.com/remix-run/react-router",
        ],
        groupName: "react-router monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "reactivestack-cookies monorepo",
          "Group packages from reactivestack-cookies monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/reactivestack/cookies"],
        groupName: "reactivestack-cookies monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "reakit monorepo",
          "Group packages from reakit monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/reakit/reakit"],
        groupName: "reakit monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "redwood monorepo",
          "Group packages from redwood monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/redwoodjs/redwood"],
        groupName: "redwood monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "reg-suit monorepo",
          "Group packages from reg-suit monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/reg-viz/reg-suit"],
        groupName: "reg-suit monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "remark monorepo",
          "Group packages from remark monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/remarkjs/remark"],
        groupName: "remark monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "remix monorepo",
          "Group packages from remix monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/remix-run/remix"],
        groupName: "remix monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "rjsf monorepo",
          "Group packages from rjsf monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/rjsf-team/react-jsonschema-form"],
        groupName: "rjsf monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "router5 monorepo",
          "Group packages from router5 monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/router5/router5"],
        groupName: "router5 monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "rust-futures monorepo",
          "Group packages from rust-futures monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/rust-lang/futures-rs"],
        groupName: "rust-futures monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "rust-wasm-bindgen monorepo",
          "Group packages from rust-wasm-bindgen monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/rustwasm/wasm-bindgen"],
        groupName: "rust-wasm-bindgen monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "sanity monorepo",
          "Group packages from sanity monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/sanity-io/sanity"],
        groupName: "sanity monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "sendgrid-nodejs monorepo",
          "Group packages from sendgrid-nodejs monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/sendgrid/sendgrid-nodejs"],
        groupName: "sendgrid-nodejs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "sentry-dotnet monorepo",
          "Group packages from sentry-dotnet monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/getsentry/sentry-dotnet"],
        groupName: "sentry-dotnet monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "sentry-javascript monorepo",
          "Group packages from sentry-javascript monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/getsentry/sentry-javascript"],
        groupName: "sentry-javascript monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "sentry-ruby monorepo",
          "Group packages from sentry-ruby monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/getsentry/sentry-ruby"],
        groupName: "sentry-ruby monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "shedlock monorepo",
          "Group packages from shedlock monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/lukas-krecan/ShedLock"],
        groupName: "shedlock monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "shopify-app-bridge monorepo",
          "Group packages from shopify-app-bridge monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/Shopify/app-bridge"],
        groupName: "shopify-app-bridge monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "sitecore-jss monorepo",
          "Group packages from sitecore-jss monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/Sitecore/jss"],
        groupName: "sitecore-jss monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "skiasharp monorepo",
          "Group packages from skiasharp monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/mono/SkiaSharp"],
        groupName: "skiasharp monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "spectre-console monorepo",
          "Group packages from spectre-console monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/spectreconsole/spectre.console"],
        groupName: "spectre-console monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "springfox monorepo",
          "Group packages from springfox monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/springfox/springfox"],
        groupName: "springfox monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "steeltoe monorepo",
          "Group packages from steeltoe monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/SteeltoeOSS/steeltoe"],
        groupName: "steeltoe monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "storybook monorepo",
          "Group packages from storybook monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/storybookjs/storybook"],
        groupName: "storybook monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "storybook-react-native monorepo",
          "Group packages from storybook-react-native monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/storybookjs/react-native"],
        groupName: "storybook-react-native monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "strapi monorepo",
          "Group packages from strapi monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/strapi/strapi"],
        groupName: "strapi monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "stryker-js monorepo",
          "Group packages from stryker-js monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/stryker-mutator/stryker-js"],
        groupName: "stryker-js monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "surveyjs monorepo",
          "Group packages from surveyjs monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/surveyjs/surveyjs"],
        groupName: "surveyjs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "swashbuckle-aspnetcore monorepo",
          "Group packages from swashbuckle-aspnetcore monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/domaindrivendev/Swashbuckle.AspNetCore",
        ],
        groupName: "swashbuckle-aspnetcore monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "system.io.abstractions monorepo",
          "Group packages from system.io.abstractions monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/System-IO-Abstractions/System.IO.Abstractions/",
        ],
        groupName: "system.io.abstractions monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "tanstack-query monorepo",
          "Group packages from tanstack-query monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/TanStack/query"],
        groupName: "tanstack-query monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "tauri monorepo",
          "Group packages from tauri monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/tauri-apps/tauri"],
        groupName: "tauri monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "telus-tds monorepo",
          "Group packages from telus-tds monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/telusdigital/tds"],
        groupName: "telus-tds monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "telus-tds-core monorepo",
          "Group packages from telus-tds-core monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/telus/tds-core"],
        groupName: "telus-tds-core monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "temporalio-ts monorepo",
          "Group packages from temporalio-ts monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/temporalio/sdk-typescript"],
        groupName: "temporalio-ts monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "testcontainers-java monorepo",
          "Group packages from testcontainers-java monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/testcontainers/testcontainers-java",
        ],
        groupName: "testcontainers-java monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "theme-ui monorepo",
          "Group packages from theme-ui monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/system-ui/theme-ui"],
        groupName: "theme-ui monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "tiptap monorepo",
          "Group packages from tiptap monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/ueberdosis/tiptap"],
        groupName: "tiptap monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "treat monorepo",
          "Group packages from treat monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/seek-oss/treat"],
        groupName: "treat monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "trpc monorepo",
          "Group packages from trpc monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/trpc/trpc"],
        groupName: "trpc monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "tsoa monorepo",
          "Group packages from tsoa monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/lukeautry/tsoa"],
        groupName: "tsoa monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "turbo monorepo",
          "Group packages from turbo monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/vercel/turbo"],
        groupName: "turbo monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "typefaces monorepo",
          "Group packages from typefaces monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/KyleAMathews/typefaces"],
        groupName: "typefaces monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "typescript-eslint monorepo",
          "Group packages from typescript-eslint monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/typescript-eslint/typescript-eslint",
        ],
        groupName: "typescript-eslint monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "typography-js monorepo",
          "Group packages from typography-js monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/KyleAMathews/typography.js"],
        groupName: "typography-js monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "uppy monorepo",
          "Group packages from uppy monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/transloadit/uppy"],
        groupName: "uppy monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "vaadinWebComponents monorepo",
          "Group packages from vaadinWebComponents monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/vaadin/web-components"],
        groupName: "vaadinWebComponents monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "vitest monorepo",
          "Group packages from vitest monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/vitest-dev/vitest"],
        groupName: "vitest monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "vstest monorepo",
          "Group packages from vstest monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/microsoft/vstest"],
        groupName: "vstest monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "vue monorepo",
          "Group packages from vue monorepo together.",
        ],
        matchSourceUrls: [
          "https://github.com/vuejs/vue",
          "https://github.com/vuejs/core",
        ],
        groupName: "vue monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "vue-cli monorepo",
          "Group packages from vue-cli monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/vuejs/vue-cli"],
        groupName: "vue-cli monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "vuepress monorepo",
          "Group packages from vuepress monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/vuejs/vuepress"],
        groupName: "vuepress monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "webdriverio monorepo",
          "Group packages from webdriverio monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/webdriverio/webdriverio"],
        groupName: "webdriverio monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "workbox monorepo",
          "Group packages from workbox monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/googlechrome/workbox"],
        groupName: "workbox monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "xstate monorepo",
          "Group packages from xstate monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/statelyai/xstate"],
        groupName: "xstate monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "xterm monorepo",
          "Group packages from xterm monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/xtermjs/xterm.js"],
        groupName: "xterm monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "xunit-dotnet monorepo",
          "Group packages from xunit-dotnet monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/xunit/xunit"],
        groupName: "xunit-dotnet monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "yarn monorepo",
          "Group packages from yarn monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/yarnpkg/berry"],
        groupName: "yarn monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "zxing-net monorepo",
          "Group packages from zxing-net monorepo together.",
        ],
        matchSourceUrls: ["https://github.com/micjahn/ZXing.Net"],
        groupName: "zxing-net monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "hapijs monorepo",
          "Group packages from hapijs monorepo together.",
        ],
        matchSourceUrlPrefixes: ["https://github.com/hapijs/"],
        groupName: "hapijs monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "lodash monorepo",
          "Group packages from lodash monorepo together.",
        ],
        matchSourceUrlPrefixes: ["https://github.com/lodash/"],
        groupName: "lodash monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "ngrx monorepo",
          "Group packages from ngrx monorepo together.",
        ],
        matchSourceUrlPrefixes: ["https://github.com/ngrx/"],
        groupName: "ngrx monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "nrwl monorepo",
          "Group packages from nrwl monorepo together.",
        ],
        matchSourceUrlPrefixes: ["https://github.com/nrwl/"],
        groupName: "nrwl monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "octokit monorepo",
          "Group packages from octokit monorepo together.",
        ],
        matchSourceUrlPrefixes: ["https://github.com/octokit/"],
        groupName: "octokit monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "semantic-release monorepo",
          "Group packages from semantic-release monorepo together.",
        ],
        matchSourceUrlPrefixes: ["https://github.com/semantic-release/"],
        groupName: "semantic-release monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        description: [
          "swc monorepo",
          "Group packages from swc monorepo together.",
        ],
        matchSourceUrlPrefixes: ["https://github.com/swc-project/"],
        groupName: "swc monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^@angular/material", "^@angular/cdk"],
        description: ["Group packages from angularmaterial monorepo together."],
        groupName: "angularmaterial monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^org.apache.camel:"],
        description: ["Group packages from apache-camel monorepo together."],
        groupName: "apache-camel monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^com.amazonaws:aws-java-sdk-"],
        description: ["Group packages from aws-java-sdk monorepo together."],
        groupName: "aws-java-sdk monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^software.amazon.awssdk:"],
        description: ["Group packages from aws-java-sdk-v2 monorepo together."],
        groupName: "aws-java-sdk-v2 monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^babel6$"],
        description: ["Group packages from babel6 monorepo together."],
        groupName: "babel6 monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^@embroider/"],
        description: ["Group packages from embroider monorepo together."],
        groupName: "embroider monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^@fullcalendar/"],
        description: ["Group packages from fullcalendar monorepo together."],
        groupName: "fullcalendar monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^HotChocolate\\."],
        description: ["Group packages from hotchocolate monorepo together."],
        groupName: "hotchocolate monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: [
          "^@microsoft/sp-",
          "^@microsoft/eslint-.+-spfx$",
        ],
        description: ["Group packages from spfx monorepo together."],
        groupName: "spfx monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^org\\.spockframework:spock-"],
        description: ["Group packages from spock monorepo together."],
        groupName: "spock monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^Syncfusion\\."],
        description: [
          "Group packages from syncfusion-dotnet monorepo together.",
        ],
        groupName: "syncfusion-dotnet monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        matchPackagePatterns: ["^@wordpress/"],
        description: ["Group packages from wordpress monorepo together."],
        groupName: "wordpress monorepo",
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        commitMessageTopic: "Node.js",
        excludePackageNames: ["calico/node", "kindest/node"],
        matchDatasources: ["docker"],
        matchDepNames: ["node"],
        matchPackagePatterns: ["/node$"],
      },
      {
        description: ["All packages published by Apollo GraphQL."],
        matchSourceUrlPrefixes: ["https://github.com/apollographql/"],
        groupName: "Apollo GraphQL packages",
      },
      {
        groupName: "CodeMirror",
        matchPackagePrefixes: ["@codemirror/"],
      },
      {
        groupName: "Font Awesome",
        matchPackagePrefixes: ["@fortawesome/"],
      },
      {
        groupName: "Glimmer.js packages",
        groupSlug: "glimmer",
        matchPackageNames: ["@glimmer/component", "@glimmer/tracking"],
      },
      {
        groupName: "go-openapi packages",
        groupSlug: "go-openapi",
        matchDatasources: ["go"],
        matchPackagePrefixes: ["github.com/go-openapi/"],
      },
      {
        groupName: "hibernate core",
        matchPackagePrefixes: ["org.hibernate:"],
      },
      {
        groupName: "hibernate validator",
        matchPackagePrefixes: ["org.hibernate.validator:"],
      },
      {
        groupName: "hibernate ogm",
        matchPackagePrefixes: ["org.hibernate.ogm:"],
      },
      {
        groupName: "hibernate commons",
        matchPackagePrefixes: ["org.hibernate.common:"],
      },
      {
        groupName: "illuminate packages",
        groupSlug: "illuminate",
        matchPackagePrefixes: ["illuminate/"],
      },
      {
        groupName: "jekyll ecosystem packages",
        matchSourceUrlPrefixes: [
          "https://github.com/jekyll/",
          "https://github.com/github/pages-gem",
        ],
      },
      {
        groupName: "jest monorepo",
        matchSourceUrls: ["https://github.com/kulshekhar/ts-jest"],
        matchUpdateTypes: ["major"],
      },
      {
        groupName: "jest monorepo",
        matchPackageNames: ["@types/jest"],
        matchUpdateTypes: ["digest", "patch", "minor", "major"],
      },
      {
        groupName: "JWT Framework packages",
        matchDatasources: ["packagist"],
        matchPackagePrefixes: ["web-token/"],
      },
      {
        groupName: "kubernetes packages",
        groupSlug: "kubernetes-go",
        matchDatasources: ["go"],
        matchPackagePrefixes: [
          "k8s.io/api",
          "k8s.io/apiextensions-apiserver",
          "k8s.io/apimachinery",
          "k8s.io/apiserver",
          "k8s.io/cli-runtime",
          "k8s.io/client-go",
          "k8s.io/cloud-provider",
          "k8s.io/cluster-bootstrap",
          "k8s.io/code-generator",
          "k8s.io/component-base",
          "k8s.io/controller-manager",
          "k8s.io/cri-api",
          "k8s.io/csi-translation-lib",
          "k8s.io/kube-aggregator",
          "k8s.io/kube-controller-manager",
          "k8s.io/kube-proxy",
          "k8s.io/kube-scheduler",
          "k8s.io/kubectl",
          "k8s.io/kubelet",
          "k8s.io/legacy-cloud-providers",
          "k8s.io/metrics",
          "k8s.io/mount-utils",
          "k8s.io/pod-security-admission",
          "k8s.io/sample-apiserver",
          "k8s.io/sample-cli-plugin",
          "k8s.io/sample-controller",
        ],
      },
      {
        groupName: "PHPStan packages",
        matchDatasources: ["packagist"],
        matchPackagePatterns: ["^phpstan/phpstan$", "/phpstan-"],
      },
      {
        groupName: "polymer packages",
        matchPackagePrefixes: ["@polymer/"],
      },
      {
        groupName: "react monorepo",
        matchPackageNames: ["@types/react", "@types/react-dom"],
      },
      {
        groupName: "resilience4j",
        matchPackagePrefixes: ["io.github.resilience4j:"],
      },
      {
        groupName: "Ruby on Rails packages",
        matchDatasources: ["rubygems"],
        matchPackageNames: [
          "actioncable",
          "actionmailbox",
          "actionmailer",
          "actionpack",
          "actiontext",
          "actionview",
          "activejob",
          "activemodel",
          "activerecord",
          "activestorage",
          "activesupport",
          "railties",
          "rails",
        ],
      },
      {
        groupName: "omniauth packages",
        matchDatasources: ["rubygems"],
        matchPackagePrefixes: ["omniauth"],
      },
      {
        groupName: "socket.io packages",
        matchPackagePrefixes: ["socket.io"],
      },
      {
        groupName: "spring amqp",
        matchPackagePrefixes: ["org.springframework.amqp:"],
      },
      {
        groupName: "spring android",
        matchPackagePrefixes: ["org.springframework.android:"],
      },
      {
        groupName: "spring batch",
        matchPackagePrefixes: ["org.springframework.batch:"],
      },
      {
        groupName: "spring boot",
        matchDepNames: ["org.springframework.boot"],
        matchPackagePrefixes: ["org.springframework.boot:"],
      },
      {
        groupName: "spring cloud",
        matchPackagePrefixes: ["org.springframework.cloud:"],
      },
      {
        groupName: "spring core",
        matchPackagePrefixes: ["org.springframework:"],
      },
      {
        groupName: "spring data",
        matchPackagePrefixes: ["org.springframework.data:"],
      },
      {
        groupName: "spring hateoas",
        matchPackagePrefixes: ["org.springframework.hateoas:"],
      },
      {
        groupName: "spring integration",
        matchPackagePrefixes: ["org.springframework.integration:"],
      },
      {
        groupName: "spring kafka",
        matchPackagePrefixes: ["org.springframework.kafka:"],
      },
      {
        groupName: "spring ldap",
        matchPackagePrefixes: ["org.springframework.ldap:"],
      },
      {
        groupName: "spring mobile",
        matchPackagePrefixes: ["org.springframework.mobile:"],
      },
      {
        groupName: "spring osgi",
        matchPackagePrefixes: ["org.springframework.osgi:"],
      },
      {
        groupName: "spring restdocs",
        matchPackagePrefixes: ["org.springframework.restdocs:"],
      },
      {
        groupName: "spring roo",
        matchPackagePrefixes: ["org.springframework.roo:"],
      },
      {
        groupName: "spring scala",
        matchPackagePrefixes: ["org.springframework.scala:"],
      },
      {
        groupName: "spring security",
        matchPackagePrefixes: ["org.springframework.security:"],
      },
      {
        groupName: "spring session",
        matchPackagePrefixes: ["org.springframework.session:"],
      },
      {
        groupName: "spring shell",
        matchPackagePrefixes: ["org.springframework.shell:"],
      },
      {
        groupName: "spring social",
        matchPackagePrefixes: ["org.springframework.social:"],
      },
      {
        groupName: "spring statemachine",
        matchPackagePrefixes: ["org.springframework.statemachine:"],
      },
      {
        groupName: "spring webflow",
        matchPackagePrefixes: ["org.springframework.webflow:"],
      },
      {
        groupName: "spring ws",
        matchPackagePrefixes: ["org.springframework.ws:"],
      },
      {
        groupName: "symfony packages",
        groupSlug: "symfony",
        matchPackagePrefixes: ["symfony/"],
      },
      {
        matchCurrentVersion: ">=3.10.3",
        matchDatasources: ["npm"],
        matchPackageNames: [
          "apollo-server",
          "apollo-server-core",
          "apollo-server-express",
        ],
        replacementName: "@apollo/server",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=3.3.1",
        matchDatasources: ["npm"],
        matchPackageNames: ["apollo-server-errors"],
        replacementName: "@apollo/server",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=3.6.3",
        matchDatasources: ["npm"],
        matchPackageNames: ["apollo-server-types", "apollo-server-plugin-base"],
        replacementName: "@apollo/server",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=3.7.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["apollo-datasource-rest"],
        replacementName: "@apollo/datasource-rest",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=3.7.1",
        matchDatasources: ["npm"],
        matchPackageNames: ["apollo-server-plugin-response-cache"],
        replacementName: "@apollo/server-plugin-response-cache",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=3.5.1",
        matchDatasources: ["npm"],
        matchPackageNames: ["apollo-server-plugin-operation-registry"],
        replacementName: "@apollo/server-plugin-operation-registry",
        replacementVersion: "3.5.6",
      },
      {
        matchCurrentVersion: ">=3.3.3",
        matchDatasources: ["npm"],
        matchPackageNames: ["apollo-reporting-protobuf"],
        replacementName: "@apollo/usage-reporting-protobuf",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=7.11.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["babel-eslint"],
        replacementName: "@babel/eslint-parser",
        replacementVersion: "7.11.0",
      },
      {
        description: [
          "Replace `containerbase/(buildpack|base)` and `renovate/buildpack` with `ghcr.io/containerbase/base`.",
        ],
        matchDatasources: ["docker"],
        matchPackagePatterns: [
          "^(?:docker\\.io/)?containerbase/(?:buildpack|base)$",
          "^ghcr\\.io/containerbase/buildpack$",
          "^(?:docker\\.io/)?renovate/buildpack$",
        ],
        replacementName: "ghcr.io/containerbase/base",
      },
      {
        description: [
          "Replace `containerbase/node` and `renovate/node` with `ghcr.io/containerbase/node`.",
        ],
        matchDatasources: ["docker"],
        matchPackagePatterns: [
          "^(?:docker\\.io/)?(?:containerbase|renovate)/node$",
        ],
        replacementName: "ghcr.io/containerbase/node",
      },
      {
        description: [
          "Replace `containerbase/sidecar` and `renovate/sidecar` with `ghcr.io/containerbase/sidecar`.",
        ],
        matchDatasources: ["docker"],
        matchPackagePatterns: [
          "^(?:docker\\.io/)?(?:containerbase|renovate)/sidecar$",
        ],
        replacementName: "ghcr.io/containerbase/sidecar",
      },
      {
        description: [
          "Replace `renovatebot/internal-tools` with `containerbase/internal-tools`.",
        ],
        matchDatasources: ["github-tags"],
        matchPackageNames: ["renovatebot/internal-tools"],
        replacementName: "containerbase/internal-tools",
      },
      {
        matchDatasources: ["npm"],
        matchPackageNames: ["cucumber"],
        replacementName: "@cucumber/cucumber",
        replacementVersion: "7.0.0",
      },
      {
        matchCurrentVersion: ">=3.3.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-accepts-serializer"],
        replacementName: "@fastify/accepts-serializer",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=2.3.0 <3.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-accepts"],
        replacementName: "@fastify/accepts",
        replacementVersion: "3.0.0",
      },
      {
        matchCurrentVersion: ">=1.2.0 <2.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-auth"],
        replacementName: "@fastify/auth",
        replacementVersion: "2.0.0",
      },
      {
        matchCurrentVersion: ">=3.13.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-autoload"],
        replacementName: "@fastify/autoload",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=1.3.0 <2.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-awilix"],
        replacementName: "@fastify/awilix",
        replacementVersion: "2.0.0",
      },
      {
        matchCurrentVersion: ">=2.3.0 <3.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-basic-auth"],
        replacementName: "@fastify/basic-auth",
        replacementVersion: "3.0.0",
      },
      {
        matchCurrentVersion: ">=6.3.0 <7.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-bearer-auth"],
        replacementName: "@fastify/bearer-auth",
        replacementVersion: "7.0.0",
      },
      {
        matchCurrentVersion: ">=6.3.0 <7.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-caching"],
        replacementName: "@fastify/caching",
        replacementVersion: "7.0.0",
      },
      {
        matchCurrentVersion: ">=1.2.0 <2.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-circuit-breaker"],
        replacementName: "@fastify/circuit-breaker",
        replacementVersion: "2.0.0",
      },
      {
        matchCurrentVersion: ">=4.1.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-compress"],
        replacementName: "@fastify/compress",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=5.7.0 <6.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-cookie"],
        replacementName: "@fastify/cookie",
        replacementVersion: "6.0.0",
      },
      {
        matchCurrentVersion: ">=6.1.0 <7.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-cors"],
        replacementName: "@fastify/cors",
        replacementVersion: "7.0.0",
      },
      {
        matchCurrentVersion: ">=1.1.0 <2.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-diagnostics-channel"],
        replacementName: "@fastify/diagnostics-channel",
        replacementVersion: "2.0.0",
      },
      {
        matchCurrentVersion: ">=1.2.0 <2.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-elasticsearch"],
        replacementName: "@fastify/elasticsearch",
        replacementVersion: "2.0.0",
      },
      {
        matchCurrentVersion: ">=2.2.0 <3.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-env"],
        replacementName: "@fastify/env",
        replacementVersion: "3.0.0",
      },
      {
        matchCurrentVersion: ">=1.2.0 <2.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-error"],
        replacementName: "@fastify/error",
        replacementVersion: "2.0.0",
      },
      {
        matchCurrentVersion: ">=2.2.0 <3.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-etag"],
        replacementName: "@fastify/etag",
        replacementVersion: "3.0.0",
      },
      {
        matchCurrentVersion: ">=0.4.0 <1.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-express"],
        replacementName: "@fastify/express",
        replacementVersion: "1.0.0",
      },
      {
        matchCurrentVersion: ">=3.1.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-flash"],
        replacementName: "@fastify/flash",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=5.3.0 <6.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-formbody"],
        replacementName: "@fastify/formbody",
        replacementVersion: "6.0.0",
      },
      {
        matchCurrentVersion: ">=1.1.0 <2.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-funky"],
        replacementName: "@fastify/funky",
        replacementVersion: "2.0.0",
      },
      {
        matchCurrentVersion: ">=7.1.0 <8.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-helmet"],
        replacementName: "@fastify/helmet",
        replacementVersion: "8.0.0",
      },
      {
        matchCurrentVersion: ">=0.3.0 <1.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-hotwire"],
        replacementName: "@fastify/hotwire",
        replacementVersion: "1.0.0",
      },
      {
        matchCurrentVersion: ">=6.3.0 <7.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-http-proxy"],
        replacementName: "@fastify/http-proxy",
        replacementVersion: "7.0.0",
      },
      {
        matchCurrentVersion: ">=4.2.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-jwt"],
        replacementName: "@fastify/jwt",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=0.3.0 <1.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-kafka"],
        replacementName: "@fastify/kafka",
        replacementVersion: "1.0.0",
      },
      {
        matchCurrentVersion: ">=3.2.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-leveldb"],
        replacementName: "@fastify/leveldb",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=4.2.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-mongodb"],
        replacementName: "@fastify/mongodb",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=5.4.0 <6.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-multipart"],
        replacementName: "@fastify/multipart",
        replacementVersion: "6.0.0",
      },
      {
        matchCurrentVersion: ">=2.2.0 <3.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-mysql"],
        replacementName: "@fastify/mysql",
        replacementVersion: "3.0.0",
      },
      {
        matchCurrentVersion: ">=7.3.0 <8.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-nextjs"],
        replacementName: "@fastify/nextjs",
        replacementVersion: "8.0.0",
      },
      {
        matchCurrentVersion: ">=4.6.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-oauth2"],
        replacementName: "@fastify/oauth2",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=0.5.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-passport"],
        replacementName: "@fastify/passport",
        replacementVersion: "1.0.0",
      },
      {
        matchCurrentVersion: ">=3.7.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-postgres"],
        replacementName: "@fastify/postgres",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=5.9.0 <6.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-rate-limit"],
        replacementName: "@fastify/rate-limit",
        replacementVersion: "6.0.0",
      },
      {
        matchCurrentVersion: ">=4.4.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-redis"],
        replacementName: "@fastify/redis",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=6.7.0 <7.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-reply-from"],
        replacementName: "@fastify/reply-from",
        replacementVersion: "7.0.0",
      },
      {
        matchCurrentVersion: ">=2.3.0 <3.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-request-context"],
        replacementName: "@fastify/request-context",
        replacementVersion: "3.0.0",
      },
      {
        matchCurrentVersion: ">=0.3.0 <1.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-response-validation"],
        replacementName: "@fastify/response-validation",
        replacementVersion: "1.0.0",
      },
      {
        matchCurrentVersion: ">=2.1.0 <3.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-routes-stats"],
        replacementName: "@fastify/routes-stats",
        replacementVersion: "3.0.0",
      },
      {
        matchCurrentVersion: ">=3.2.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-routes"],
        replacementName: "@fastify/routes",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=1.1.0 <2.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-schedule"],
        replacementName: "@fastify/schedule",
        replacementVersion: "2.0.0",
      },
      {
        matchCurrentVersion: ">=3.2.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-secure-session"],
        replacementName: "@fastify/secure-session",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=3.2.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-sensible"],
        replacementName: "@fastify/sensible",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=0.3.0 <1.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-soap-client"],
        replacementName: "@fastify/soap-client",
        replacementVersion: "1.0.0",
      },
      {
        matchCurrentVersion: ">=4.7.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-static"],
        replacementName: "@fastify/static",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=5.2.0 <6.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-swagger"],
        replacementName: "@fastify/swagger",
        replacementVersion: "6.0.0",
      },
      {
        matchCurrentVersion: ">=3.1.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-url-data"],
        replacementName: "@fastify/url-data",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=4.3.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-websocket"],
        replacementName: "@fastify/websocket",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=2.1.0 <3.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["fastify-zipkin"],
        replacementName: "@fastify/zipkin",
        replacementVersion: "3.0.0",
      },
      {
        matchCurrentVersion: ">=18.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["hapi"],
        replacementName: "@hapi/hapi",
        replacementVersion: "18.2.0",
      },
      {
        matchDatasources: ["npm"],
        matchPackageNames: ["jade"],
        replacementName: "pug",
        replacementVersion: "2.0.0",
      },
      {
        matchCurrentVersion: ">=14.0.0 <14.4.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["joi"],
        replacementName: "@hapi/joi",
        replacementVersion: "14.4.0",
      },
      {
        matchCurrentVersion: ">=17.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@hapi/joi"],
        replacementName: "joi",
        replacementVersion: "17.1.1",
      },
      {
        matchDatasources: ["docker"],
        matchPackagePatterns: ["^k8s\\.gcr\\.io/.+$"],
        replacementNameTemplate:
          "{{{replace 'k8s\\.gcr\\.io/' 'registry.k8s.io/' packageName}}}",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/codemod"],
        replacementName: "@mui/codemod",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/core"],
        replacementName: "@mui/material",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/icons"],
        replacementName: "@mui/icons-material",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/lab"],
        replacementName: "@mui/labs",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/private-theming"],
        replacementName: "@mui/private-theming",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/styled-engine"],
        replacementName: "@mui/styled-engine",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/styled-engine-sc"],
        replacementName: "@mui/styled-engine-sc",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/styles"],
        replacementName: "@mui/styles",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/system"],
        replacementName: "@mui/system",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/types"],
        replacementName: "@mui/types",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["@material-ui/unstyled"],
        replacementName: "@mui/core",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=2.0.0 <3.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["messageformat-cli"],
        replacementName: "@messageformat/cli",
        replacementVersion: "3.0.0",
      },
      {
        matchCurrentVersion: ">=2.0.0 <3.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["messageformat"],
        replacementName: "@messageformat/core",
        replacementVersion: "3.0.0",
      },
      {
        matchCurrentVersion: ">=0.4.0 <1.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["messageformat-convert"],
        replacementName: "@messageformat/convert",
        replacementVersion: "1.0.0",
      },
      {
        matchCurrentVersion: ">=0.4.0 <1.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["react-message-context"],
        replacementName: "@messageformat/react",
        replacementVersion: "1.0.0",
      },
      {
        matchCurrentVersion: ">=4.0.0 <5.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["messageformat-parser"],
        replacementName: "@messageformat/parser",
        replacementVersion: "5.0.0",
      },
      {
        matchCurrentVersion: ">=7.1.0 <8.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["middie"],
        replacementName: "@fastify/middie",
        replacementVersion: "8.0.0",
      },
      {
        matchCurrentVersion: ">=21.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["now"],
        replacementName: "vercel",
        replacementVersion: "21.0.0",
      },
      {
        matchDatasources: ["npm"],
        matchPackageNames: ["@parcel/css"],
        replacementName: "lightningcss",
        replacementVersion: "1.14.0",
      },
      {
        matchCurrentVersion: ">=2.0.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["react-query/devtools"],
        replacementName: "@tanstack/react-query-devtools",
        replacementVersion: "4.0.0",
      },
      {
        matchCurrentVersion: ">=3.0.0 <4.0.0",
        matchDatasources: ["npm"],
        matchPackageNames: ["react-query"],
        replacementName: "@tanstack/react-query",
        replacementVersion: "4.0.5",
      },
      {
        matchDatasources: ["npm"],
        matchPackageNames: ["react-scripts-ts"],
        replacementName: "react-scripts",
        replacementVersion: "2.1.8",
      },
      {
        matchDatasources: ["npm"],
        matchPackageNames: ["@renovate/pep440"],
        replacementName: "@renovatebot/pep440",
        replacementVersion: "1.0.0",
      },
      {
        matchDatasources: ["npm"],
        matchPackageNames: ["rollup-plugin-node-resolve"],
        replacementName: "@rollup/plugin-node-resolve",
        replacementVersion: "6.0.0",
      },
      {
        matchDatasources: ["npm"],
        matchPackageNames: ["vso-task-lib"],
        replacementName: "azure-pipelines-task-lib",
        replacementVersion: "3.4.0",
      },
      {
        matchDatasources: ["npm"],
        matchPackageNames: ["vsts-task-lib"],
        replacementName: "azure-pipelines-task-lib",
        replacementVersion: "3.4.0",
      },
      {
        matchDatasources: ["npm"],
        matchPackageNames: ["xmldom", "xmldom-alpha"],
        replacementName: "@xmldom/xmldom",
        replacementVersion: "0.7.5",
      },
      {
        allowedVersions: "!/^200\\d{5}(\\.\\d+)?/",
        matchDatasources: ["maven", "sbt-package"],
        matchPackagePrefixes: ["commons-"],
      },
      {
        allowedVersions: "/^[A-Z]/",
        matchDatasources: ["maven"],
        matchPackageNames: [
          "org.springframework.cloud:spring-cloud-starter-parent",
        ],
      },
      {
        allowedVersions: "!/^5\\.0\\.0/",
        matchDatasources: ["maven"],
        matchPackageNames: ["org.web3j:core"],
      },
      {
        allowedVersions: "!/^1\\.0-\\d+-[a-fA-F0-9]{7}$/",
        matchManagers: ["sbt"],
        matchPackagePrefixes: ["org.http4s:"],
      },
      {
        matchManagers: ["npm"],
        matchPackageNames: ["@types/node"],
        versioning: "node",
      },
      {
        allowedVersions: "<20000000",
        matchCurrentVersion: "!/^\\d{8}$/",
        matchDatasources: ["docker"],
        matchPackageNames: ["alpine"],
      },
      {
        matchDatasources: ["docker"],
        matchPackageNames: [
          "registry.access.redhat.com/rhel",
          "registry.access.redhat.com/rhel-atomic",
          "registry.access.redhat.com/rhel-init",
          "registry.access.redhat.com/rhel-minimal",
        ],
        matchPackagePrefixes: [
          "registry.access.redhat.com/rhceph/",
          "registry.access.redhat.com/rhgs3/",
          "registry.access.redhat.com/rhel7",
          "registry.access.redhat.com/rhel8/",
          "registry.access.redhat.com/rhel9/",
          "registry.access.redhat.com/rhscl/",
          "registry.access.redhat.com/ubi7",
          "registry.access.redhat.com/ubi8",
          "registry.access.redhat.com/ubi9",
          "redhat/",
        ],
        versioning: "redhat",
      },
      {
        allowedVersions: "/^(?:8|11|17)(?:\\.|-|$)/",
        description: [
          "Limit Java runtime versions to LTS releases. To receive all major releases add `workarounds:javaLTSVersions` to the `ignorePresets` array.",
        ],
        matchDatasources: ["docker", "java-version"],
        matchPackageNames: [
          "eclipse-temurin",
          "amazoncorretto",
          "adoptopenjdk",
          "openjdk",
          "java",
          "java-jre",
          "sapmachine",
        ],
        versioning:
          "regex:^(?<major>\\d+)?(\\.(?<minor>\\d+))?(\\.(?<patch>\\d+))?([\\._+](?<build>\\d+))?(-(?<compatibility>.*))?$",
      },
      {
        enabled: false,
        matchDatasources: ["maven"],
        matchPackageNames: ["org.eclipse.m2e:lifecycle-mapping"],
      },
      {
        enabled: false,
        matchDepTypes: ["parent-root"],
        matchManagers: ["maven"],
      },
      {
        description: [
          "Use node versioning for `(containerbase|renovate)/node` images",
        ],
        matchDatasources: ["docker"],
        matchPackagePatterns: [
          "^(?:(?:docker|ghcr)\\.io/)?(?:containerbase|renovate)/node$",
        ],
        versioning: "node",
      },
      {
        matchPackagePatterns: ["*"],
        semanticCommitType: "chore",
      },
    ],
    autoReplaceGlobalMatch: true,
    pinDigests: false,
    separateMajorMinor: true,
    separateMultipleMajor: false,
    separateMinorPatch: false,
    ignoreUnstable: true,
    ignoreDeprecated: true,
    followTag: undefined,
    respectLatest: true,
    rangeStrategy: "auto",
    branchPrefix: "renovate/",
    branchPrefixOld: "renovate/",
    bumpVersion: undefined,
    major: {},
    minor: {},
    patch: {},
    pin: {
      rebaseWhen: "behind-base-branch",
      groupName: "Pin Dependencies",
      groupSlug: "pin-dependencies",
      commitMessageAction: "Pin",
      group: {
        commitMessageTopic: "dependencies",
        commitMessageExtra: "",
      },
    },
    digest: {
      branchTopic: "{{{depNameSanitized}}}-digest",
      commitMessageExtra: "to {{newDigestShort}}",
      commitMessageTopic: "{{{depName}}} digest",
    },
    pinDigest: {
      groupName: "Pin Dependencies",
      groupSlug: "pin-dependencies",
      commitMessageAction: "Pin",
      group: {
        commitMessageTopic: "dependencies",
        commitMessageExtra: "",
      },
    },
    rollback: {
      branchTopic: "{{{depNameSanitized}}}-rollback",
      commitMessageAction: "Roll back",
      semanticCommitType: "fix",
    },
    replacement: {
      branchTopic: "{{{depNameSanitized}}}-replacement",
      commitMessageAction: "Replace",
      commitMessageExtra:
        "with {{newName}} {{#if isMajor}}{{{prettyNewMajor}}}{{else}}{{#if isSingleVersion}}{{{prettyNewVersion}}}{{else}}{{{newValue}}}{{/if}}{{/if}}",
      prBodyNotes: [
        "This is a special PR that replaces `{{{depNameSanitized}}}` with the community suggested minimal stable replacement version.",
      ],
    },
    semanticCommits: "enabled",
    semanticCommitType: "chore",
    semanticCommitScope: "deps",
    commitMessageLowerCase: "auto",
    rollbackPrs: false,
    recreateWhen: "always",
    rebaseWhen: "auto",
    rebaseLabel: "rebase",
    stopUpdatingLabel: "stop-updating",
    minimumReleaseAge: undefined,
    internalChecksAsSuccess: false,
    internalChecksFilter: "strict",
    prCreation: "immediate",
    prNotPendingHours: 25,
    prHourlyLimit: 2,
    prConcurrentLimit: 10,
    branchConcurrentLimit: undefined,
    prPriority: 0,
    bbUseDefaultReviewers: true,
    bbUseDevelopmentBranch: false,
    automerge: false,
    automergeType: "pr",
    automergeStrategy: "auto",
    automergeComment: "automergeComment",
    ignoreTests: false,
    transitiveRemediation: false,
    vulnerabilityAlerts: {
      groupName: undefined,
      schedule: [],
      dependencyDashboardApproval: false,
      minimumReleaseAge: undefined,
      rangeStrategy: "update-lockfile",
      commitMessageSuffix: "[SECURITY]",
      branchTopic: "{{{datasource}}}-{{{depName}}}-vulnerability",
      prCreation: "immediate",
      enabled: true,
      labels: ["security"],
    },
    osvVulnerabilityAlerts: false,
    pruneBranchAfterAutomerge: true,
    branchName:
      "{{{branchPrefix}}}{{{additionalBranchPrefix}}}{{{branchTopic}}}",
    additionalBranchPrefix: "",
    branchTopic:
      "{{{depNameSanitized}}}-{{{newMajor}}}{{#if separateMinorPatch}}{{#if isPatch}}.{{{newMinor}}}{{/if}}{{/if}}.x{{#if isLockfileUpdate}}-lockfile{{/if}}",
    commitMessage:
      "{{{commitMessagePrefix}}} {{{commitMessageAction}}} {{{commitMessageTopic}}} {{{commitMessageExtra}}} {{{commitMessageSuffix}}}",
    commitBody: undefined,
    commitBodyTable: false,
    commitMessagePrefix: undefined,
    commitMessageAction: "Update",
    commitMessageTopic: "dependency {{depName}}",
    commitMessageExtra:
      "to {{#if isPinDigest}}{{{newDigestShort}}}{{else}}{{#if isMajor}}{{prettyNewMajor}}{{else}}{{#if isSingleVersion}}{{prettyNewVersion}}{{else}}{{#if newValue}}{{{newValue}}}{{else}}{{{newDigestShort}}}{{/if}}{{/if}}{{/if}}{{/if}}",
    commitMessageSuffix: undefined,
    prBodyTemplate:
      "{{{header}}}{{{table}}}{{{warnings}}}{{{notes}}}{{{changelogs}}}{{{configDescription}}}{{{controls}}}{{{footer}}}",
    prTitle: undefined,
    prTitleStrict: false,
    prHeader: undefined,
    prFooter:
      "This PR has been generated by [Renovate Bot](https://github.com/renovatebot/renovate).",
    lockFileMaintenance: {
      enabled: false,
      recreateWhen: "always",
      rebaseStalePrs: true,
      branchTopic: "lock-file-maintenance",
      commitMessageAction: "Lock file maintenance",
      commitMessageTopic: undefined,
      commitMessageExtra: undefined,
      schedule: ["before 4am on monday"],
      groupName: undefined,
      prBodyDefinitions: {
        Change: "All locks refreshed",
      },
    },
    hashedBranchLength: undefined,
    groupName: undefined,
    groupSlug: undefined,
    group: {
      branchTopic: "{{{groupSlug}}}",
      commitMessageTopic: "{{{groupName}}}",
    },
    labels: ["renovate"],
    addLabels: [],
    assignees: [],
    assigneesFromCodeOwners: false,
    assigneesSampleSize: undefined,
    assignAutomerge: false,
    ignoreReviewers: [],
    reviewers: [],
    reviewersFromCodeOwners: false,
    filterUnavailableUsers: false,
    forkModeDisallowMaintainerEdits: false,
    confidential: false,
    reviewersSampleSize: undefined,
    additionalReviewers: [],
    fileMatch: [],
    postUpdateOptions: [],
    constraints: {},
    hostRules: [],
    prBodyDefinitions: {
      Package: "{{{depNameLinked}}}",
      Type: "{{{depType}}}",
      Update: "{{{updateType}}}",
      "Current value": "{{{currentValue}}}",
      "New value": "{{{newValue}}}",
      Change: "`{{{displayFrom}}}` -> `{{{displayTo}}}`",
      Pending: "{{{displayPending}}}",
      References: "{{{references}}}",
      "Package file": "{{{packageFile}}}",
      Age: "[![age](https://developer.mend.io/api/mc/badges/age/{{datasource}}/{{replace '/' '%2f' depName}}/{{{newVersion}}}?slim=true)](https://docs.renovatebot.com/merge-confidence/)",
      Adoption:
        "[![adoption](https://developer.mend.io/api/mc/badges/adoption/{{datasource}}/{{replace '/' '%2f' depName}}/{{{newVersion}}}?slim=true)](https://docs.renovatebot.com/merge-confidence/)",
      Passing:
        "[![passing](https://developer.mend.io/api/mc/badges/compatibility/{{datasource}}/{{replace '/' '%2f' depName}}/{{{currentVersion}}}/{{{newVersion}}}?slim=true)](https://docs.renovatebot.com/merge-confidence/)",
      Confidence:
        "[![confidence](https://developer.mend.io/api/mc/badges/confidence/{{datasource}}/{{replace '/' '%2f' depName}}/{{{currentVersion}}}/{{{newVersion}}}?slim=true)](https://docs.renovatebot.com/merge-confidence/)",
    },
    prBodyColumns: ["Package", "Type", "Update", "Change", "Pending"],
    prBodyNotes: [],
    suppressNotifications: ["deprecationWarningIssues"],
    pruneStaleBranches: true,
    unicodeEmoji: true,
    gitLabIgnoreApprovals: false,
    regexManagers: [],
    fetchReleaseNotes: "pr",
    cloneSubmodules: false,
    ignorePrAuthor: false,
    updatePinnedDependencies: true,
    gitUrl: "default",
    writeDiscoveredRepos: undefined,
    platformAutomerge: true,
    userStrings: {
      ignoreTopic: "Renovate Ignore Notification",
      ignoreMajor:
        "Because you closed this PR without merging, Renovate will ignore this update. You will not get PRs for *any* future {{{newMajor}}}.x releases. But if you manually upgrade to {{{newMajor}}}.x then Renovate will re-enable `minor` and `patch` updates automatically.",
      ignoreDigest:
        "Because you closed this PR without merging, Renovate will ignore this update. You will not get PRs for the `{{{depName}}}` `{{{newDigestShort}}}` update again.",
      ignoreOther:
        "Because you closed this PR without merging, Renovate will ignore this update ({{{newValue}}}). You will get a PR once a newer version is released. To ignore this dependency forever, add it to the `ignoreDeps` array of your Renovate config.",
    },
    platformCommit: false,
    branchNameStrict: false,
    checkedBranches: [],
    ansible: {
      fileMatch: ["(^|/)tasks/[^/]+\\.ya?ml$"],
    },
    "ansible-galaxy": {
      fileMatch: ["(^|/)requirements\\.ya?ml$", "(^|/)galaxy\\.ya?ml$"],
    },
    argocd: {
      fileMatch: [],
    },
    asdf: {
      fileMatch: ["(^|/)\\.tool-versions$"],
    },
    "azure-pipelines": {
      fileMatch: ["azure.*pipelines?.*\\.ya?ml$"],
      enabled: false,
    },
    batect: {
      fileMatch: ["(^|/)batect(-bundle)?\\.ya?ml$"],
    },
    "batect-wrapper": {
      fileMatch: ["(^|/)batect$"],
      versioning: "semver",
    },
    bazel: {
      fileMatch: ["(^|/)WORKSPACE(|\\.bazel)$", "\\.bzl$"],
    },
    "bazel-module": {
      fileMatch: ["(^|/)MODULE\\.bazel$"],
    },
    bazelisk: {
      fileMatch: ["(^|/)\\.bazelversion$"],
      pinDigests: false,
    },
    bicep: {
      fileMatch: ["\\.bicep$"],
    },
    "bitbucket-pipelines": {
      fileMatch: ["(^|/)\\.?bitbucket-pipelines\\.ya?ml$"],
    },
    buildkite: {
      fileMatch: ["buildkite\\.ya?ml", "\\.buildkite/.+\\.ya?ml$"],
      commitMessageTopic: "buildkite plugin {{depName}}",
      commitMessageExtra:
        "to {{#if isMajor}}{{{prettyNewMajor}}}{{else}}{{{newValue}}}{{/if}}",
    },
    bundler: {
      fileMatch: ["(^|/)Gemfile$"],
      versioning: "ruby",
    },
    cake: {
      fileMatch: ["\\.cake$"],
    },
    cargo: {
      commitMessageTopic: "Rust crate {{depName}}",
      fileMatch: ["(^|/)Cargo\\.toml$"],
      versioning: "cargo",
    },
    cdnurl: {
      fileMatch: [],
      versioning: "semver",
    },
    circleci: {
      fileMatch: ["(^|/)\\.circleci/config\\.ya?ml$"],
    },
    cloudbuild: {
      fileMatch: ["(^|/)cloudbuild\\.ya?ml"],
    },
    cocoapods: {
      fileMatch: ["(^|/)Podfile$"],
      versioning: "ruby",
    },
    composer: {
      fileMatch: ["(^|/)([\\w-]*)composer\\.json$"],
      versioning: "composer",
    },
    conan: {
      fileMatch: ["(^|/)conanfile\\.(txt|py)$"],
      datasource: "conan",
      versioning: "conan",
      enabled: false,
    },
    cpanfile: {
      fileMatch: ["(^|/)cpanfile$"],
    },
    "deps-edn": {
      fileMatch: ["(^|/)(?:deps|bb)\\.edn$"],
      versioning: "maven",
    },
    "docker-compose": {
      fileMatch: ["(^|/)(?:docker-)?compose[^/]*\\.ya?ml$"],
    },
    dockerfile: {
      fileMatch: [
        "(^|/|\\.)([Dd]ocker|[Cc]ontainer)file$",
        "(^|/)([Dd]ocker|[Cc]ontainer)file[^/]*$",
      ],
    },
    droneci: {
      fileMatch: ["(^|/)\\.drone\\.yml$"],
    },
    fleet: {
      fileMatch: ["(^|/)fleet\\.ya?ml"],
    },
    flux: {
      fileMatch: ["(^|/)flux-system/(?:.+/)?gotk-components\\.ya?ml$"],
    },
    fvm: {
      fileMatch: ["(^|/)\\.fvm/fvm_config\\.json$"],
      versioning: "semver",
    },
    "git-submodules": {
      enabled: false,
      versioning: "git",
      fileMatch: ["(^|/)\\.gitmodules$"],
    },
    "github-actions": {
      fileMatch: [
        "^(workflow-templates|\\.github/workflows)/[^/]+\\.ya?ml$",
        "(^|/)action\\.ya?ml$",
      ],
    },
    gitlabci: {
      fileMatch: ["\\.gitlab-ci\\.ya?ml$"],
    },
    "gitlabci-include": {
      fileMatch: ["\\.gitlab-ci\\.ya?ml$"],
    },
    gomod: {
      fileMatch: ["(^|/)go\\.mod$"],
      pinDigests: false,
    },
    gradle: {
      fileMatch: [
        "\\.gradle(\\.kts)?$",
        "(^|/)gradle\\.properties$",
        "(^|/)gradle/.+\\.toml$",
        "(^|/)buildSrc/.+\\.kt$",
        "\\.versions\\.toml$",
        "(^|/)versions.props$",
        "(^|/)versions.lock$",
      ],
      timeout: 600,
      versioning: "gradle",
    },
    "gradle-wrapper": {
      fileMatch: ["(^|/)gradle/wrapper/gradle-wrapper\\.properties$"],
      versioning: "gradle",
    },
    "helm-requirements": {
      registryAliases: {
        stable: "https://charts.helm.sh/stable",
      },
      commitMessageTopic: "helm chart {{depName}}",
      fileMatch: ["(^|/)requirements\\.ya?ml$"],
    },
    "helm-values": {
      commitMessageTopic: "helm values {{depName}}",
      fileMatch: ["(^|/)values\\.ya?ml$"],
      pinDigests: false,
    },
    helmfile: {
      registryAliases: {
        stable: "https://charts.helm.sh/stable",
      },
      commitMessageTopic: "helm chart {{depName}}",
      fileMatch: ["(^|/)helmfile\\.ya?ml$"],
    },
    helmsman: {
      fileMatch: [],
    },
    helmv3: {
      registryAliases: {
        stable: "https://charts.helm.sh/stable",
      },
      commitMessageTopic: "helm chart {{depName}}",
      fileMatch: ["(^|/)Chart\\.ya?ml$"],
    },
    hermit: {
      fileMatch: ["(^|/)bin/hermit$"],
      excludeCommitPaths: ["**/bin/hermit"],
      versioning: "hermit",
    },
    homebrew: {
      commitMessageTopic: "Homebrew Formula {{depName}}",
      fileMatch: ["^Formula/[^/]+[.]rb$"],
    },
    html: {
      fileMatch: ["\\.html?$"],
      versioning: "semver",
      digest: {
        enabled: false,
      },
      pinDigests: false,
    },
    jenkins: {
      fileMatch: ["(^|/)plugins\\.(txt|ya?ml)$"],
    },
    "jsonnet-bundler": {
      fileMatch: ["(^|/)jsonnetfile\\.json$"],
      datasource: "git-tags",
    },
    "kotlin-script": {
      fileMatch: ["^.+\\.main\\.kts$"],
    },
    kubernetes: {
      fileMatch: [],
    },
    kustomize: {
      fileMatch: ["(^|/)kustomization\\.ya?ml$"],
      pinDigests: false,
    },
    leiningen: {
      fileMatch: ["(^|/)project\\.clj$"],
      versioning: "maven",
    },
    maven: {
      fileMatch: [
        "(^|/|\\.)pom\\.xml$",
        "^(((\\.mvn)|(\\.m2))/)?settings\\.xml$",
      ],
      versioning: "maven",
    },
    "maven-wrapper": {
      fileMatch: ["(^|\\/).mvn/wrapper/maven-wrapper.properties$"],
      versioning: "maven",
    },
    meteor: {
      fileMatch: ["(^|/)package\\.js$"],
    },
    mint: {
      fileMatch: ["(^|/)Mintfile$"],
    },
    mix: {
      fileMatch: ["(^|/)mix\\.exs$"],
      versioning: "hex",
    },
    nix: {
      fileMatch: ["(^|/)flake\\.nix$"],
      commitMessageTopic: "nixpkgs",
      commitMessageExtra: "to {{newValue}}",
      enabled: false,
    },
    nodenv: {
      fileMatch: ["(^|/)\\.node-version$"],
      versioning: "node",
    },
    npm: {
      fileMatch: ["(^|/)package\\.json$"],
      versioning: "npm",
      digest: {
        prBodyDefinitions: {
          Change:
            "{{#if displayFrom}}`{{{displayFrom}}}` -> {{else}}{{#if currentValue}}`{{{currentValue}}}` -> {{/if}}{{/if}}{{#if displayTo}}`{{{displayTo}}}`{{else}}`{{{newValue}}}`{{/if}}",
        },
      },
      prBodyDefinitions: {
        Change:
          "[{{#if displayFrom}}`{{{displayFrom}}}` -> {{else}}{{#if currentValue}}`{{{currentValue}}}` -> {{/if}}{{/if}}{{#if displayTo}}`{{{displayTo}}}`{{else}}`{{{newValue}}}`{{/if}}]({{#if depName}}https://renovatebot.com/diffs/npm/{{replace '/' '%2f' depName}}/{{{currentVersion}}}/{{{newVersion}}}{{/if}})",
      },
    },
    nuget: {
      fileMatch: [
        "\\.(?:cs|fs|vb)proj$",
        "\\.(?:props|targets)$",
        "(^|/)dotnet-tools\\.json$",
        "(^|/)global\\.json$",
      ],
    },
    nvm: {
      fileMatch: ["(^|/)\\.nvmrc$"],
      versioning: "node",
      pinDigests: false,
    },
    osgi: {
      fileMatch: ["(^|/)src/main/features/.+\\.json$"],
    },
    pep621: {
      fileMatch: ["(^|/)pyproject\\.toml$"],
    },
    "pip-compile": {
      fileMatch: [],
      lockFileMaintenance: {
        enabled: true,
        branchTopic: "pip-compile-refresh",
        commitMessageAction: "Refresh pip-compile outputs",
      },
    },
    pip_requirements: {
      fileMatch: ["(^|/)[\\w-]*requirements(-\\w+)?\\.(txt|pip)$"],
    },
    pip_setup: {
      fileMatch: ["(^|/)setup\\.py$"],
    },
    pipenv: {
      fileMatch: ["(^|/)Pipfile$"],
    },
    poetry: {
      fileMatch: ["(^|/)pyproject\\.toml$"],
    },
    "pre-commit": {
      commitMessageTopic: "pre-commit hook {{depName}}",
      enabled: false,
      fileMatch: ["(^|/)\\.pre-commit-config\\.ya?ml$"],
      prBodyNotes: [
        "Note: The `pre-commit` manager in Renovate is not supported by the `pre-commit` maintainers or community. Please do not report any problems there, instead [create a Discussion in the Renovate repository](https://github.com/renovatebot/renovate/discussions/new) if you have any questions.",
      ],
    },
    pub: {
      fileMatch: ["(^|/)pubspec\\.ya?ml$"],
      versioning: "npm",
    },
    puppet: {
      fileMatch: ["(^|/)Puppetfile$"],
    },
    pyenv: {
      fileMatch: ["(^|/)\\.python-version$"],
      versioning: "docker",
    },
    regex: {
      pinDigests: false,
    },
    "ruby-version": {
      fileMatch: ["(^|/)\\.ruby-version$"],
      versioning: "ruby",
    },
    sbt: {
      fileMatch: [
        "\\.sbt$",
        "project/[^/]*\\.scala$",
        "project/build\\.properties$",
      ],
      versioning: "ivy",
    },
    "setup-cfg": {
      fileMatch: ["(^|/)setup\\.cfg$"],
      versioning: "pep440",
    },
    swift: {
      fileMatch: ["(^|/)Package\\.swift"],
      versioning: "swift",
      pinDigests: false,
    },
    tekton: {
      fileMatch: [],
    },
    terraform: {
      commitMessageTopic: "Terraform {{depName}}",
      fileMatch: ["\\.tf$"],
      pinDigests: false,
    },
    "terraform-version": {
      fileMatch: ["(^|/)\\.terraform-version$"],
      versioning: "hashicorp",
      extractVersion: "^v(?<version>.*)$",
    },
    terragrunt: {
      commitMessageTopic: "Terragrunt dependency {{depName}}",
      fileMatch: ["(^|/)terragrunt\\.hcl$"],
    },
    "terragrunt-version": {
      fileMatch: ["(^|/)\\.terragrunt-version$"],
      versioning: "hashicorp",
      extractVersion: "^v(?<version>.+)$",
    },
    "tflint-plugin": {
      commitMessageTopic: "TFLint plugin {{depName}}",
      fileMatch: ["\\.tflint\\.hcl$"],
      extractVersion: "^v(?<version>.*)$",
    },
    travis: {
      fileMatch: ["^\\.travis\\.ya?ml$"],
      major: {
        enabled: false,
      },
      versioning: "node",
    },
    velaci: {
      fileMatch: ["(^|/)\\.vela\\.ya?ml$"],
    },
    woodpecker: {
      fileMatch: ["^\\.woodpecker(?:/[^/]+)?\\.ya?ml$"],
    },
    renovateUsername: "korosuke613",
    repository: "korosuke613/actions",
    errors: [],
    warnings: [],
    branchList: [],
    defaultBranch: "main",
    isFork: false,
    repoFingerprint:
      "1bedfccfdb611388bff977448ac2ca51c9abfb9b9923574a90538bc83fcaca6db23b45be70b623196ac02495cceee414bf1ec45cffe86339f8751e701e1caef4",
    baseBranch: "main",
    repoIsOnboarded: true,
    matchPackageNames: [
      "fusion-cli",
      "fusion-core",
      "fusion-test-utils",
      "fusion-tokens",
    ],
    matchPackagePrefixes: ["fusion-plugin-", "fusion-react", "^usion-apollo"],
    $schema: "https://docs.renovatebot.com/renovate-schema.json",
    renovateJsonPresent: true,
    dependencyDashboardChecks: {},
  } as SelectAllConfig,
  allBranches: [],
  packageFiles: {
    "github-actions": [
      {
        deps: [
          {
            depName: "korosuke613/actions",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString:
              "korosuke613/actions/.github/workflows/notify-to-slack.yaml@main",
            autoReplaceStringTemplate:
              "{{depName}}/.github/workflows/notify-to-slack.yaml@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "main",
            skipReason: "invalid-version",
            updates: [],
            packageName: "korosuke613/actions",
          },
        ],
        packageFile: ".github/workflows/example-notify-to-slack.yaml",
      },
      {
        deps: [
          {
            depName: "korosuke613/actions",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString:
              "korosuke613/actions/.github/workflows/renovate.yaml@main",
            autoReplaceStringTemplate:
              "{{depName}}/.github/workflows/renovate.yaml@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "main",
            skipReason: "invalid-version",
            updates: [],
            packageName: "korosuke613/actions",
          },
        ],
        packageFile: ".github/workflows/example-renovate.yaml",
      },
      {
        deps: [
          {
            depName: "korosuke613/actions",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString:
              "korosuke613/actions/.github/workflows/tagging.yaml@main",
            autoReplaceStringTemplate:
              "{{depName}}/.github/workflows/tagging.yaml@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "main",
            skipReason: "invalid-version",
            updates: [],
            packageName: "korosuke613/actions",
          },
        ],
        packageFile: ".github/workflows/example-tagging.yaml",
      },
      {
        deps: [
          {
            depName: "slackapi/slack-github-action",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString: "slackapi/slack-github-action@v1",
            autoReplaceStringTemplate:
              "{{depName}}@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "v1",
            updates: [],
            packageName: "slackapi/slack-github-action",
            warnings: [],
            sourceUrl: "https://github.com/slackapi/slack-github-action",
            registryUrl: "https://github.com",
            currentVersion: "v1",
            fixedVersion: "v1",
          },
        ],
        packageFile: ".github/workflows/notify-to-slack.yaml",
      },
      {
        deps: [
          {
            depName: "actions/checkout",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString: "actions/checkout@v3",
            autoReplaceStringTemplate:
              "{{depName}}@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "v3",
            updates: [],
            packageName: "actions/checkout",
            warnings: [],
            sourceUrl: "https://github.com/actions/checkout",
            registryUrl: "https://github.com",
            currentVersion: "v3",
            fixedVersion: "v3",
          },
          {
            depName: "cybozu/renovate-dry-run-action",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString: "cybozu/renovate-dry-run-action@v1",
            autoReplaceStringTemplate:
              "{{depName}}@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "v1",
            updates: [],
            packageName: "cybozu/renovate-dry-run-action",
            warnings: [],
            sourceUrl: "https://github.com/cybozu/renovate-dry-run-action",
            registryUrl: "https://github.com",
            currentVersion: "v1",
            fixedVersion: "v1",
          },
        ],
        packageFile: ".github/workflows/renovate-dry-run.yaml",
      },
      {
        deps: [
          {
            depName: "actions/checkout",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString: "actions/checkout@v3",
            autoReplaceStringTemplate:
              "{{depName}}@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "v3",
            updates: [],
            packageName: "actions/checkout",
            warnings: [],
            sourceUrl: "https://github.com/actions/checkout",
            registryUrl: "https://github.com",
            currentVersion: "v3",
            fixedVersion: "v3",
          },
          {
            depName: "actions/cache",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString: "actions/cache@v3",
            autoReplaceStringTemplate:
              "{{depName}}@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "v3",
            updates: [],
            packageName: "actions/cache",
            warnings: [],
            sourceUrl: "https://github.com/actions/cache",
            registryUrl: "https://github.com",
            currentVersion: "v3",
            fixedVersion: "v3",
          },
          {
            depName: "korosuke613/compare-renovate-logs-workflow",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString:
              "korosuke613/compare-renovate-logs-workflow/.github/workflows/compare-renovate-logs.yaml@v1",
            autoReplaceStringTemplate:
              "{{depName}}/.github/workflows/compare-renovate-logs.yaml@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "v1",
            updates: [],
            packageName: "korosuke613/compare-renovate-logs-workflow",
            warnings: [],
            sourceUrl:
              "https://github.com/korosuke613/compare-renovate-logs-workflow",
            registryUrl: "https://github.com",
            currentVersion: "v1",
            fixedVersion: "v1",
          },
        ],
        packageFile: ".github/workflows/renovate.yaml",
      },
      {
        deps: [
          {
            depName: "actions/checkout",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString: "actions/checkout@v3",
            autoReplaceStringTemplate:
              "{{depName}}@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "v3",
            updates: [],
            packageName: "actions/checkout",
            warnings: [],
            sourceUrl: "https://github.com/actions/checkout",
            registryUrl: "https://github.com",
            currentVersion: "v3",
            fixedVersion: "v3",
          },
          {
            depName: "actions/checkout",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString: "actions/checkout@v3",
            autoReplaceStringTemplate:
              "{{depName}}@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "v3",
            updates: [],
            packageName: "actions/checkout",
            warnings: [],
            sourceUrl: "https://github.com/actions/checkout",
            registryUrl: "https://github.com",
            currentVersion: "v3",
            fixedVersion: "v3",
          },
          {
            depName: "actions/checkout",
            commitMessageTopic: "{{{depName}}} action",
            datasource: "github-tags",
            versioning: "docker",
            depType: "action",
            replaceString: "actions/checkout@v3",
            autoReplaceStringTemplate:
              "{{depName}}@{{#if newDigest}}{{newDigest}}{{#if newValue}} # {{newValue}}{{/if}}{{/if}}{{#unless newDigest}}{{newValue}}{{/unless}}",
            currentValue: "v3",
            updates: [],
            packageName: "actions/checkout",
            warnings: [],
            sourceUrl: "https://github.com/actions/checkout",
            registryUrl: "https://github.com",
            currentVersion: "v3",
            fixedVersion: "v3",
          },
        ],
        packageFile: ".github/workflows/tagging.yaml",
      },
    ],
  } as Record<string, PackageFile[]>,
};
