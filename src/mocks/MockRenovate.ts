import { spyOn } from "jest-mock";
import * as processHelper from "renovate/dist/workers/repository/process";
import * as dependencyDashboardHelper from "renovate/dist/workers/repository/dependency-dashboard";
import * as platformHelper from "renovate/dist/modules/platform/github";
import { GlobalConfig } from "renovate/dist/config/global";
import { EnsureIssueConfig } from "renovate/dist/modules/platform";
import * as gitHelper from "renovate/dist/util/git";

export class MockRenovate {
  get resultDashboard(): { title: string; body: string } {
    return this._resultDashboard;
  }
  private _resultDashboard = {
    title: "",
    body: "",
  };

  get results() {
    return this._results;
  }
  private _results: Awaited<
    ReturnType<typeof processHelper.extractDependencies>
  > = {
    branches: [],
    branchList: [],
    packageFiles: {},
  };

  private original = {
    extractDependencies: processHelper.extractDependencies,
    ensureDependencyDashboard:
      dependencyDashboardHelper.ensureDependencyDashboard,
  };

  private spy = {
    extractDependencies: spyOn(processHelper, "extractDependencies"),
    ensureDependencyDashboard: spyOn(
      dependencyDashboardHelper,
      "ensureDependencyDashboard",
    ),
    isBranchModified: spyOn(gitHelper, "isBranchModified"),
  };

  public enableExtractDependencies() {
    this.spy.extractDependencies.mockImplementationOnce(async (config) => {
      console.log("Happy Mocking!");
      const res = await this.original.extractDependencies(config);
      this._results = res;
      return res;
    });
  }

  public disableExtractDependencies() {
    this.spy.extractDependencies.mockRestore();
  }

  public enableEnsureDependencyDashboard() {
    this.spy.ensureDependencyDashboard.mockImplementationOnce(
      async (config, allBranches, packageFiles) => {
        console.log("Happy Mocking! 2");
        const originalGlobalConfig = GlobalConfig.get();
        GlobalConfig.set({ ...originalGlobalConfig, dryRun: undefined });

        const spyEnsureIssue = spyOn(platformHelper, "ensureIssue");
        spyEnsureIssue.mockImplementationOnce(
          async ({ title, body: rawBody }: EnsureIssueConfig) => {
            console.log("Happy Mocking! 3");
            this._resultDashboard.title = title;
            this._resultDashboard.body = rawBody;
            return null;
          },
        );

        await this.original.ensureDependencyDashboard(
          config,
          allBranches,
          packageFiles,
        );

        spyEnsureIssue.mockRestore();

        GlobalConfig.set(originalGlobalConfig);
      },
    );
  }
  public disableEnsureDependencyDashboard() {
    this.spy.ensureDependencyDashboard.mockRestore();
  }

  public enableIsBranchModified() {
    this.spy.isBranchModified.mockImplementationOnce(async () => {
      return false;
    });
  }
  public disableIsBranchModified() {
    this.spy.isBranchModified.mockRestore();
  }
}
