import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("design50.run", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("No active text editor found!");
      return;
    }
    const languageId = editor.document.languageId;
    const code = editor.document.getText();

    try {
      const ddb50 = vscode.extensions.getExtension("cs50.ddb50");
      const api = ddb50!.exports;
      const displayMessage = "Provide design feedback";
      const payload = {
        api: "/api/v1/design",
        config: "chat_cs50",
        code: code,
        language_id: languageId,
        stream: true,
      };

      const contextMessage = `${displayMessage}:\n\`\`\`${languageId}\n${code}`;
      api.requestGptResponse(displayMessage, contextMessage, payload);
    } catch (error) {
      console.error(error);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
