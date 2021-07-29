const core = require('@actions/core');
const getReleaseCandidateNumber = require("./release-candidate.js");

async function run() {

    const versionToFilter = core.getInput('version');
    
    try {

        console.log(`input version: ${versionToFilter}`);
        const tagNumber = await getReleaseCandidateNumber(versionToFilter);
        core.setOutput("next-tag-number",tagNumber);
    
    } catch (error) {
      core.setFailed(error.message);
    }
}

run();