import { RepoGlobalConfig } from "renovate/dist/config/types";

export default {
  allowCustomCrateRegistries: false,
  allowedPostUpgradeCommands: [],
  allowPlugins: false,
  allowPostUpgradeCommandTemplating: true,
  allowScripts: false,
  binarySource: "install",
  cacheDir: "/var/folders/gf/6048_drd30d9d173y3jd61980000gp/T/renovate/cache",
  cacheHardTtlMinutes: 1440,
  containerbaseDir:
    "/var/folders/gf/6048_drd30d9d173y3jd61980000gp/T/renovate/cache/containerbase",
  customEnvVariables: {},
  dockerChildPrefix: "renovate_",
  dockerCliOptions: undefined,
  dockerSidecarImage: "ghcr.io/containerbase/sidecar:9.2.2",
  dockerUser: undefined,
  dryRun: "full",
  exposeAllEnv: false,
  executionTimeout: 15,
  githubTokenWarn: true,
  localDir:
    "/var/folders/gf/6048_drd30d9d173y3jd61980000gp/T/renovate/repos/github/korosuke613/actions",
  migratePresets: {},
  privateKey: undefined,
  privateKeyOld: undefined,
  gitTimeout: 0,
  platform: "github",
  endpoint: "https://api.github.com/",
} as RepoGlobalConfig;
