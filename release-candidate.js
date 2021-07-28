
async function getReleaseCandidateNumber(version, git){
    
    const tags = await git.tags();
    console.log(tags.all);

    const rcVersionTemplate=version+"-RC-";
    console.log(rcVersionTemplate);

    let re = new RegExp(rcVersionTemplate);

    const tagsMatching = tags.all.filter(element => re.test(element));
    console.log(tagsMatching.lenght+1);

    return tagsMatching.lenght+1;
}

module.exports = getReleaseCandidateNumber