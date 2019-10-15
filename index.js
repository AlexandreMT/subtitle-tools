const readlineSync = require('readline-sync');
const createReleasesCopies = require('./src/createReleasesCopies');

async function start() {
	const tools = [
		'Criar copias de release'
	];

	const selectedTool = readlineSync.keyInSelect(tools, 'Qual ferramenta deseja utilizar?: ');

	initiateSelectedTool(selectedTool);
}

async function initiateSelectedTool(selectedTool) {
	switch (selectedTool) {
		case 0:
			return createReleasesCopies.readReleasesNames(selectedTool);
		default:
			return console.log('Nenhuma ferramenta selecionada');
	}
}

start();