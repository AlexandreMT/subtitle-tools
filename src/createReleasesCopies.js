const readlineSync = require('readline-sync');
const fs = require('fs');

async function readReleasesNames() {
	const originalSub = readlineSync.questionPath('Qual a legenda original?: ');
	const originalSubPath = originalSub.substring(0, originalSub.lastIndexOf('\\'));

	let releasesNames = [];

	let release = readlineSync.question('Digite o nome de um release para criar copia: ');
	while (release !== '') {
		releasesNames.push(release);
		release = readlineSync.question('Digite o nome de um release para criar copia: ');
	}

	createReleasesCopies(originalSub, originalSubPath, releasesNames);
}

async function createReleasesCopies(originalSub, originalSubPath, releasesNames) {
	releasesNames.forEach((release) => {
		const destinationFile = `${originalSubPath}\\${release}.srt`;
		fs.copyFile(originalSub, destinationFile, (error) => {
			if (error) {
				throw error;
			}
		});
	});
}

module.exports = {
	readReleasesNames,
	createReleasesCopies
};
