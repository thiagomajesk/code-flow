// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

import { smartTravelUp, smartTravelDown } from './smart-travel'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  const commands = [
    // Smart Travel Commands
    vscode.commands.registerTextEditorCommand('code-flow.smartTravelUp', (textEditor: vscode.TextEditor) => smartTravelUp(textEditor, false)),
    vscode.commands.registerTextEditorCommand('code-flow.smartTravelDown', (textEditor: vscode.TextEditor) => smartTravelDown(textEditor, false)),
    vscode.commands.registerTextEditorCommand('code-flow.smartSelectUp', (textEditor: vscode.TextEditor) => smartTravelUp(textEditor, true)),
    vscode.commands.registerTextEditorCommand('code-flow.smartSelectDown', (textEditor: vscode.TextEditor) => smartTravelDown(textEditor, true))
  ]

  context.subscriptions.push(...commands)
}

// this method is called when your extension is deactivated
export function deactivate() { }
