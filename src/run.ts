import { start } from "renovate/dist/workers/global";
import * as processHelper from "renovate/dist/workers/repository/process";
import * as dependencyDashboardHelper from "renovate/dist/workers/repository/dependency-dashboard";
import { PackageFile } from "renovate/dist/modules/manager/types";
import * as platform from "renovate/dist/modules/platform/github";
import * as gitHelper from "renovate/dist/util/git";
import { spyOn } from "jest-mock";
import { GlobalConfig } from "renovate/dist/config/global";
import { EnsureIssueConfig } from "renovate/dist/modules/platform";

const main = async () => {
  process.env.RENOVATE_REPOSITORIES = "korosuke613/homepage-2nd";
  // process.env.RENOVATE_REPOSITORIES="cybozu/renovate-dry-run-action"
  // process.env.RENOVATE_CONFIG_FILE="/Users/korosuke613/ghq/github.com/korosuke613/renovate-dry-run-action/renovate-test-data.json5"
  // process.env.RENOVATE_REQUIRE_CONFIG="ignored"
  process.env.RENOVATE_DRY_RUN = "full";
  process.env.LOG_LEVEL = "debug";
  process.env.RENOVATE_RECREATE_WHEN = "always";
  if (process.env.RENOVATE_TOKEN === undefined) {
    throw new Error(
      "RENOVATE_TOKEN is not set, ex: RENOVATE_TOKEN=$(gh auth token)",
    );
  }

  let results: Awaited<ReturnType<typeof processHelper.extractDependencies>> = {
    branches: [],
    branchList: [],
    packageFiles: {},
  };
  const resultDashboard = {
    title: "",
    body: "",
  };

  const originalExtractDependencies = processHelper.extractDependencies;
  const spy = spyOn(processHelper, "extractDependencies");
  spy.mockImplementation(async (config) => {
    console.log("Happy Mocking!");
    const res = await originalExtractDependencies(config);
    results = res;
    return res;
  });

  const originalEnsureDependencyDashboard =
    dependencyDashboardHelper.ensureDependencyDashboard;
  const spy2 = spyOn(dependencyDashboardHelper, "ensureDependencyDashboard");
  spy2.mockImplementation(async (config, allBranches, packageFiles) => {
    console.log("Happy Mocking! 2");
    const originalGlobalConfig = GlobalConfig.get();
    console.log(originalGlobalConfig);
    GlobalConfig.set({ ...originalGlobalConfig, dryRun: undefined });

    const spy3 = spyOn(platform, "ensureIssue");
    spy3.mockImplementation(
      async ({ title, body: rawBody }: EnsureIssueConfig) => {
        resultDashboard.title = title;
        resultDashboard.body = rawBody;
        return null;
      },
    );

    await originalEnsureDependencyDashboard(config, allBranches, packageFiles);

    spy3.mockRestore();

    GlobalConfig.set(originalGlobalConfig);
  });

  const spy4 = spyOn(gitHelper, "isBranchModified");
  spy4.mockImplementation(async () => {
    return false;
  });

  await start();

  spy.mockRestore();
  spy2.mockRestore();
  spy4.mockRestore();

  const { packageFiles } = results;
  const updatePackages: typeof packageFiles = {};
  Object.entries(packageFiles).forEach(([key, value]) => {
    const updates: PackageFile<Record<string, unknown>>[] = [];
    value.forEach((v) => {
      const filtered = v.deps.filter((d) => {
        if (d.updates === undefined) return false;
        return d.updates.length > 0;
      });
      updates.push({
        deps: filtered,
        packageFile: v.packageFile,
      });
    });

    updatePackages[key] = updates;
  });

  console.log(JSON.stringify(updatePackages, null, 2));
  // console.log(JSON.stringify(branches, null, 2))
  console.log(resultDashboard.title);
  console.log(resultDashboard.body);
};

(async () => {
  await main();
})();
