// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

import { paragraphMoveUp, paragraphMoveDown, paragraphExpandSelection, paragraphMoveStart, paragraphMoveEnd } from './commands/paragraph'

import { StatusBar } from './extension/status-bar';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(StatusBar);


  const commands = [
    vscode.commands.registerCommand('code-flow.toggleMode', () => StatusBar.toggleMode()),
    // Paragraph Scope Commands
    vscode.commands.registerTextEditorCommand('code-flow.paragraphMoveUp', (textEditor: vscode.TextEditor) => paragraphMoveUp(textEditor, false)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphMoveDown', (textEditor: vscode.TextEditor) => paragraphMoveDown(textEditor, false)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphSelectUp', (textEditor: vscode.TextEditor) => paragraphMoveUp(textEditor, true)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphSelectDown', (textEditor: vscode.TextEditor) => paragraphMoveDown(textEditor, true)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphExpandSelection', (textEditor: vscode.TextEditor) => paragraphExpandSelection(textEditor)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphMoveStart', (textEditor: vscode.TextEditor) => paragraphMoveStart(textEditor, false)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphSelectStart', (textEditor: vscode.TextEditor) => paragraphMoveStart(textEditor, true)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphMoveEnd', (textEditor: vscode.TextEditor) => paragraphMoveEnd(textEditor, false)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphSelectEnd', (textEditor: vscode.TextEditor) => paragraphMoveEnd(textEditor, true))
  ]

  context.subscriptions.push(...commands);
}

// this method is called when your extension is deactivated
export function deactivate() { }
