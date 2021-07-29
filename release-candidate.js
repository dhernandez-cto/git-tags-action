const simpleGit = require('simple-git');

const tagRefPrefix = "refs/tags/";
/*
    TODOS:
        - ( ) implementar el testing de este método
        - ( ) calcular en lugar de por número de elementos por el sufijo
        - ( ) retornar además del número de tag, el tag completo
        - ( ) verificar antes de retornar que no existe el tag
        - (X) recuperar los tags del remoto en lugar del local
*/

async function getReleaseCandidateNumber(version){
    const git = simpleGit.default();

    const remoteTagsArr = (await git.listRemote(['--tags','--quiet', '--refs'])).split(/\r?\n/).map(item => item.replace(/.*tags\//,""));

    console.log(remoteTagsArr);

    const versionTemplate=version;
    console.log('Filtering by ' + versionTemplate);

    let re = new RegExp(versionTemplate);

    const tagsMatching = remoteTagsArr.filter(element => re.test(element));
    
    console.log("Filtered tags: ("+ tagsMatching.length +"): " + tagsMatching);
    console.log("New tag number is: %d", tagsMatching.length+1);

    return tagsMatching.length+1;
}

module.exports = getReleaseCandidateNumber