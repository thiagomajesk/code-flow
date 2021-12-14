// import * as vscode from 'vscode'
// import { nextMarkPositionUp, nextMarkPositionDown } from './line-mark'

// /**
//  * Travels to the next relevant line above the cursor.
//  * @param textEditor A VS Code TextEditor
//  * @param select If text should be selected when moving or not
//  */
// export function smartTravelUp(textEditor: vscode.TextEditor, select: boolean): void {
//   const anchor = textEditor.selection.anchor

//   let newPosition = nextMarkPositionUp(textEditor)
//   let newSelection = new vscode.Selection(select ? anchor : newPosition, newPosition)

//   textEditor.selection = newSelection

//   textEditor.revealRange(new vscode.Range(newPosition, newPosition))
// }

// /**
//  * Travels to the next relevant line bellow the cursor.
//  * @param textEditor A VS Code TextEditor
//  * @param select If text should be selected when moving or not
//  */
// export function smartTravelDown(textEditor: vscode.TextEditor, select: boolean): void {
//   const anchor = textEditor.selection.anchor

//   let newPosition = nextMarkPositionDown(textEditor)
//   let newSelection = new vscode.Selection(select ? anchor : newPosition, newPosition)

//   textEditor.selection = newSelection

//   textEditor.revealRange(new vscode.Range(newPosition, newPosition))
// }