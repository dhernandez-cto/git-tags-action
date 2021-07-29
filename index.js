const core = require('@actions/core');
const getReleaseCandidateNumber = require("./release-candidate.js");

async function run() {

    const versionToFilter = core.getInput('version');
    
    try {

        console.log(`input version: ${versionToFilter}`);
        const data = await getReleaseCandidateNumber(versionToFilter);
        core.setOutput("next-tag-number",data.tagNumber);
        core.setOutput("new-tag",data.tag)
    
    } catch (error) {
      core.setFailed(error.message);
    }
}

run();