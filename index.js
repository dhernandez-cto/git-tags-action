const core = require('@actions/core');
const github = require('@actions/github');

try {
  const versionToFilter = core.getInput('version');
  console.log(`input version: ${version}`);

    /*
        put the logic here
    */

  var lastReleaseCandidateNumber = 101;
  core.setOutput("next-rc-number",lastReleaseCandidateNumber);

} catch (error) {
  core.setFailed(error.message);
}