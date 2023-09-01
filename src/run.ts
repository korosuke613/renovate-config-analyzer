import { start } from "renovate/dist/workers/global";
import { MockRenovate } from "./mocks/MockRenovate";
import { transformUpdatePackages } from "./utils";

const main = async () => {
  process.env.RENOVATE_REPOSITORIES = "korosuke613/actions";
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

  const mockRenovate = new MockRenovate();
  mockRenovate.enableExtractDependencies();
  mockRenovate.enableEnsureDependencyDashboard();
  mockRenovate.enableIsBranchModified();

  await start();

  mockRenovate.disableExtractDependencies();
  mockRenovate.disableEnsureDependencyDashboard();
  mockRenovate.disableIsBranchModified();

  const updatePackages = transformUpdatePackages(mockRenovate.results);

  console.log(JSON.stringify(updatePackages, null, 2));
  // console.log(JSON.stringify(branches, null, 2))
  console.log(mockRenovate.resultDashboard.title);
  console.log(mockRenovate.resultDashboard.body);
};

(async () => {
  await main();
})();
