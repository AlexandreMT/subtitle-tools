const readlineSync = require('readline-sync');
const clipboardy = require('clipboardy');
const fs = require('fs');

async function copyReleasesListName() {
	const path = readlineSync.questionPath('Arraste aqui a pasta que deseja copiar os nomes dos releases: ');

	let releasesArray = [];
	fs.readdirSync(path).forEach((file) => {
			const fileExt = file.substring(file.lastIndexOf('.'));
			if (fileExt === '.srt') {
				releasesArray.push(file.substring(0, file.lastIndexOf('.srt')));
			}
		});

	let releasesListText = '';
	releasesArray.forEach((release, index) => {
		if ((index + 1) === releasesArray.length) {
			return releasesListText += `${release}`;
		}
		return releasesListText += `${release}\n`;
	});

	clipboardy.writeSync(releasesListText);
}

module.exports = {
	copyReleasesListName
}
