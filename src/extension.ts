import { commands, window } from 'vscode';

function isFridayNight(): boolean {
	const now = new Date();
	return now.getDay() === 5 && now.getHours() >= 18;
}

export function activate() {
	commands.registerCommand('type', async (args) => {
		if (isFridayNight()) {
			window.showWarningMessage("Writing code is disabled until Polyana time!");
			return;
		}
		await commands.executeCommand('default:type', args);
	});
}

export function deactivate() { }