const core = require('@actions/core');
const github = require('@actions/github');
const simpleGit = require('simple-git');
const git = simpleGit();

try {
    const versionToFilter = core.getInput('version');
    console.log(`input version: ${versionToFilter}`);
    const number = findTag(versionToFilter)
    core.setOutput("next-rc-number",number);

} catch (error) {
  core.setFailed(error.message);
}

async function findTag(version){
    const tags = await git.tags();
    console.log(tags.all);

    const rcVersionTemplate=version+"-RC-";
    console.log(rcVersionTemplate);

    let re = new RegExp(rcVersionTemplate);

    const tagsMatching = tags.all.filter(element => re.test(element));
    console.log(tagsMatching.lenght+1)

    return tagsMatching.lenght+1
}