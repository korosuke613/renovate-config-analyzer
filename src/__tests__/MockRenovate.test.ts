import { MockRenovate } from "../mocks/MockRenovate";
import { extractDependencies } from "renovate/dist/workers/repository/process";
import renovateConfig from "./data/renovateConfig";
import extractDependenciesReturn from "./data/extractDependenciesReturn";
import globalConfig from "./data/globalConfig";
import ensure from "./data/ensure";
import { GlobalConfig } from "renovate/dist/config/global";

import { spyOn } from "jest-mock";
import * as processHelper from "renovate/dist/workers/repository/process";
import { PackageFiles } from "renovate/dist/workers/repository/package-files";
import { ensureDependencyDashboard } from "renovate/dist/workers/repository/dependency-dashboard";
import { setPlatformApi } from "renovate/dist/modules/platform";

describe("MockRenovate", () => {
  process.env.RENOVATE_REPOSITORIES = "korosuke613/actions";
  process.env.RENOVATE_DRY_RUN = "full";
  process.env.RENOVATE_RECREATE_WHEN = "always";

  describe("should be mocked", () => {
    let mockRenovate: MockRenovate;
    beforeEach(() => {
      mockRenovate = new MockRenovate();
      setPlatformApi("github");
    });

    it("enableExtractDependencies", async () => {
      const spy = spyOn(processHelper, "extractDependencies");
      spy.mockResolvedValueOnce(extractDependenciesReturn);

      mockRenovate.enableExtractDependencies();

      const result = await extractDependencies(renovateConfig);

      spy.mockRestore();

      expect(result).toBe(extractDependenciesReturn);
    });

    it("enableEnsureDependencyDashboard", async () => {
      GlobalConfig.set(globalConfig);
      mockRenovate.enableEnsureDependencyDashboard();

      PackageFiles.add(ensure.config.baseBranch!, { ...ensure.packageFiles });

      await ensureDependencyDashboard(
        ensure.config,
        ensure.allBranches,
        ensure.packageFiles,
      );

      expect(mockRenovate.resultDashboard).toStrictEqual({
        body: "This issue lists Renovate updates and detected dependencies. Read the [Dependency Dashboard](https://docs.renovatebot.com/key-concepts/dashboard/) docs to learn more.\n\nThis repository currently has no open or pending branches.\n\n## Detected dependencies\n\n<details><summary>github-actions</summary>\n<blockquote>\n\n<details><summary>.github/workflows/example-notify-to-slack.yaml</summary>\n\n\n</details>\n\n<details><summary>.github/workflows/example-renovate.yaml</summary>\n\n\n</details>\n\n<details><summary>.github/workflows/example-tagging.yaml</summary>\n\n\n</details>\n\n<details><summary>.github/workflows/notify-to-slack.yaml</summary>\n\n - `slackapi/slack-github-action v1`\n\n</details>\n\n<details><summary>.github/workflows/renovate-dry-run.yaml</summary>\n\n - `actions/checkout v3`\n - `cybozu/renovate-dry-run-action v1`\n\n</details>\n\n<details><summary>.github/workflows/renovate.yaml</summary>\n\n - `actions/checkout v3`\n - `actions/cache v3`\n - `korosuke613/compare-renovate-logs-workflow v1`\n\n</details>\n\n<details><summary>.github/workflows/tagging.yaml</summary>\n\n - `actions/checkout v3`\n - `actions/checkout v3`\n - `actions/checkout v3`\n\n</details>\n\n</blockquote>\n</details>\n\n",
        title: "Dependency Dashboard",
      });
    });
  });
});
