const simpleGit = require('simple-git');


async function getReleaseCandidateNumber(version){
    const git = simpleGit.default();
    
    const status = await git.status();
    const branch = await git.branch();
    
    console.log(branch);
    console.log(status);

    const tags = await git.tags();
    console.log(tags.all);

    const rcVersionTemplate=version+"-RC-";
    console.log(rcVersionTemplate);

    let re = new RegExp(rcVersionTemplate);

    const tagsMatching = tags.all.filter(element => re.test(element));
    
    console.log(tagsMatching.length+1);

    return tagsMatching.length+1;
}

module.exports = getReleaseCandidateNumber