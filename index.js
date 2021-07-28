const core = require('@actions/core');
const getReleaseCandidateNumber = require("./release-candidate.js");

const git = simpleGit();

async function run() {

    const versionToFilter = core.getInput('version');
    
    try {

        console.log(`input version: ${versionToFilter}`);
        
        const number = await getReleaseCandidateNumber(versionToFilter,git);
        
        console.log(number);

        core.setOutput("next-rc-number",number);
    
    } catch (error) {
      core.setFailed(error.message);
    }
}

run();