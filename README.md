<p align="center"> 
  <img src="https://raw.githubusercontent.com/thiagomajesk/code-flow/master/static/code-flow-logo.png" />
</p>

# Code Flow

**A VS Code Extension for Productivity Junkies**

This extension aims to improve the default keybindings of VS Code with a different, keyboard-centric workflow.

## Features

### Smart Travel

Navigate vertically in your code using <kbd>Ctrl + Up</kbd> and <kbd>Ctrl + Down</kbd> by skipping non-relevant lines (like punctuation or whitespace only). The criteria to decide if a line is considered relevant or not can be configured per language using the `code-flow.languageMarks` setting. If the extension does not found a compatible language configured, the default behaviour is to jump to lines where there are word characters: `/^\w+/`.

PS.: This is generally more flexible than using VS Code symbols because you don't need an external provider and you can configure your own rules.
