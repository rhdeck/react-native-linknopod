const registerDependencyIOS = require("../registerNativeModule");
const registerDependencyPods = require("../../pods/registerNativeModule");

module.exports = function registerNativeModule(
  name,
  dependencyConfig,
  params,
  projectConfig
) {
  if (false && projectConfig.podfile && dependencyConfig.podspec) {
    console.log("Regisering me some pods!");
    registerDependencyPods(name, dependencyConfig, projectConfig);
  } else {
    console.log("Registering not the pods");
    registerDependencyIOS(dependencyConfig, projectConfig);
  }
};
