import * as vscode from 'vscode';

export enum Mode {
  NORMAL = 'normal',
  COMMAND = 'command'
}

/**
 * StatusBar used to display the current active mode.
 */
class CodeFlowStatusBar implements vscode.Disposable {
  private mode: Mode;
  private readonly statusBarItem: vscode.StatusBarItem;

  constructor() {
    this.mode = Mode.COMMAND;
    this.statusBarItem = vscode.window.createStatusBarItem('mode', vscode.StatusBarAlignment.Right, Number.MAX_SAFE_INTEGER);
    this.statusBarItem.name = 'Code Flow Current Mode';
    this.statusBarItem.command = 'code-flow.toggleMode';
    this.setMode(Mode.COMMAND);
    this.statusBarItem.show();
  }

  dispose() {
    this.statusBarItem.dispose();
  }

  setMode(mode: Mode) {
    switch (mode) {
      case Mode.NORMAL:
        this.mode = Mode.NORMAL;
        this.statusBarItem.text = '$(pencil) NORMAL';
        this.statusBarItem.color = "#38bdf8";
        this.statusBarItem.tooltip = 'Switch to "normal" mode';
        break;
      case Mode.COMMAND:
        this.mode = Mode.COMMAND;
        this.statusBarItem.text = '$(rocket) COMMAND';
        this.statusBarItem.color = "#4ade80";
        this.statusBarItem.tooltip = 'Switch to "command" mode';
        break;
    }

    vscode.commands.executeCommand('setContext', 'code-flow.mode', this.mode);
  }

  toggleMode() {
    switch (this.mode) {
      case Mode.NORMAL:
        this.setMode(Mode.COMMAND);
        break;
      case Mode.COMMAND:
        this.setMode(Mode.NORMAL);
        break;
    }
  }
}

export const StatusBar = new CodeFlowStatusBar();