import { commands, window } from 'vscode';

export function activate() {
	const date = new Date();

	if (date.getDate() != 5)
		return;

	commands.registerCommand('type', async (args) => {
		if (date.getHours() >= 18) {
			window.showWarningMessage("Writing code is disabled until Polyana time!");
			return;
		}
		await commands.executeCommand('default:type', args);
	});
}

export function deactivate() { }