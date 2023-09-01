import { ExtractResult } from "renovate/dist/workers/repository/process/extract-update";
import { PackageFile } from "renovate/dist/modules/manager/types";

export const transformUpdatePackages = (extractResult: ExtractResult) => {
  const updatePackages: typeof extractResult.packageFiles = {};
  Object.entries(extractResult.packageFiles).forEach(([key, value]) => {
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

  return updatePackages;
};
