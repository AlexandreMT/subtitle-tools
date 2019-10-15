const readlineSync = require('readline-sync');
const createReleasesCopies = require('./src/createReleasesCopies');
const copyReleasesListName = require('./src/copyReleasesListName');

async function start() {
	const tools = [
		'Criar copias de release',
		'Copiar nomes dos releases de uma pasta'
	];

	const selectedTool = readlineSync.keyInSelect(tools, 'Qual ferramenta deseja utilizar?: ');

	initiateSelectedTool(selectedTool);
}

async function initiateSelectedTool(selectedTool) {
	switch (selectedTool) {
		case 0:
			return createReleasesCopies.readReleasesNames();
		case 1:
			return copyReleasesListName.copyReleasesListName();
		default:
			return console.log('Nenhuma ferramenta selecionada');
	}
}

start();