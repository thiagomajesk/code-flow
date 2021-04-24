import * as vscode from 'vscode'
import { nextMarkPositionUp, nextMarkPositionDown } from './line-mark'

export function smartTravelUp(textEditor: vscode.TextEditor, select : boolean): void {
  const anchor = textEditor.selection.anchor

  let newPosition = nextMarkPositionUp(textEditor)
  let newSelection = new vscode.Selection(select ? anchor : newPosition, newPosition)

  textEditor.selection = newSelection

  textEditor.revealRange(new vscode.Range(newPosition, newPosition))
}

export function smartTravelDown(textEditor: vscode.TextEditor, select : boolean): void {
  const anchor = textEditor.selection.anchor

  let newPosition = nextMarkPositionDown(textEditor)
  let newSelection = new vscode.Selection(select ? anchor : newPosition, newPosition)

  textEditor.selection = newSelection

  textEditor.revealRange(new vscode.Range(newPosition, newPosition))
}