// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

import { paragraphMoveUp, paragraphMoveDown, paragraphExpandSelection } from './commands/paragraph'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  const commands = [
    // Paragraph Scope Commands
    vscode.commands.registerTextEditorCommand('code-flow.paragraphMoveUp', (textEditor: vscode.TextEditor) => paragraphMoveUp(textEditor, false)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphMoveDown', (textEditor: vscode.TextEditor) => paragraphMoveDown(textEditor, false)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphSelectUp', (textEditor: vscode.TextEditor) => paragraphMoveUp(textEditor, true)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphSelectDown', (textEditor: vscode.TextEditor) => paragraphMoveDown(textEditor, true)),
    vscode.commands.registerTextEditorCommand('code-flow.paragraphExpandSelection', (textEditor: vscode.TextEditor) => paragraphExpandSelection(textEditor))
  ]

  context.subscriptions.push(...commands)
}

// this method is called when your extension is deactivated
export function deactivate() { }
