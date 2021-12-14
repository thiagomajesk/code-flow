<p align="center"> 
  <img src="https://raw.githubusercontent.com/thiagomajesk/code-flow/master/static/code-flow-logo.png" />
</p>

# Code Flow

**A VS Code Extension for Productivity Junkies**

Code Flow is an extension that aims to improve a default set of keybindings with a keyboard-centric workflow. The shortcuts here were elaborated to provide a better editing experience with mnemonics and consistent conventions.   

# Shortcuts

The shortcuts here presented use some kind a mnemonic device to improve command usage and discovery.
Although the main goal is to provide a more productive shortcut scheme, the extension tries to stay as close as possible to the overall editing experience in VS Code, trying to not drastically change important editing commands... For instance, we avoid poluting commands in the global scope (<kbd>Ctrl</kbd>, <kbd>Alt</kbd> & <kbd>Shift</kbd>) and the rebinds that are done are thought out to improve on the standard shortcuts. For the most part we try to stay consistant with the current editing experience but expanding a little bit more on top of it.

Most of the new commands/ chords will be located in a specific scope like:

- <kbd>K</kbd> as in - Wor**k**bench navigation
- <kbd>B</kbd> as in - **B**uffer (text editor) and panels
- <kbd>T</kbd> as in - **T**ext **T**ransformations
- <kbd>L</kbd> as in - **L**ine movement and editing
- <kbd>G</kbd> as in - **G**o somewhere in the file

## Workbench Navigation

| Shortcut                                 | Command                          |
|------------------------------------------|----------------------------------|
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + E</kbd>  | Toggle **E**xplorer              |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + F</kbd>  | Toggle **F**ind (Search)         |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + D</kbd>  | Toggle **D**ebugger              |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + G</kbd>  | Toggle **G**it                   |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + S</kbd>  | Toggle **S**idebar               |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + R</kbd>  | Toggle **R**emote Explorer       |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + B</kbd>  | Toggle **B**uffer (Text Editor)  |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + T</kbd>  | Toggle **T**erminal              |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + M</kbd>  | Toggle **M**inimap               |

## File Explorer Commands

| Shortcut                        | Command                                 |
|---------------------------------|-----------------------------------------|
| <kbd>Ctrl + N</kbd>             | **N**ew File                            |
| <kbd>Ctrl + Shift + N</kbd>     | **N**ew Folder                          |

## Buffer Commands

| Shortcut                                     | Command                             |
|----------------------------------------------|-------------------------------------|
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + W</kbd>      | Close Buffer                        |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + N</kbd>      | Split (**N**ew) Buffer              |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + P</kbd>      | Open **P**review Buffer             |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + -</kbd>      | Split Buffer Horizontaly            |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + =</kbd>      | Split Buffer Orthogonaly            |
| <kbd>Ctrl + B</kbd> <kbd>Right</kbd>         | Move To Right Buffer                |
| <kbd>Ctrl + B</kbd> <kbd>Left</kbd>          | Move To Left Buffer                 |
| <kbd>Ctrl + B</kbd> <kbd>Up</kbd>            | Move To Top Buffer                  |
| <kbd>Ctrl + B</kbd> <kbd>Down</kbd>          | Move To Bottom Buffer               |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + Right</kbd>  | Move Buffer Right                   |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + Left</kbd>   | Move Buffer Left                    |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + Up</kbd>     | Move Buffer Top                     |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + Down</kbd>   | Move Buffer Bottom                  |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + A</kbd>      | Show **A**ll Editors                |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + G</kbd>      | Show Editors In Active **G**roup    |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + R</kbd>      | **R**eopen Last Closed              |

## Content Manipulation

| Shortcut                         | Command                             |
|----------------------------------|-------------------------------------|
| <kbd>Ctrl + [</kbd>              | Indent                              |
| <kbd>Ctrl + ]</kbd>              | Deindent                            |
| <kbd>Ctrl + Shift + [</kbd>      | Fold                                |
| <kbd>Ctrl + Shift + ]</kbd>      | Unfold                              |
| <kbd>Alt + T</kbd> <kbd>U</kbd>  | Transform To **U**ppercase          |
| <kbd>Alt + T</kbd> <kbd>L</kbd>  | Transform To **L**owercase          |
| <kbd>Alt + T</kbd> <kbd>T</kbd>  | Transform To **T**itlecase          |
| <kbd>Alt + T</kbd> <kbd>S</kbd>  | Transform To **S**nakeCase          |
| <kbd>Alt + Shift + D</kbd>       | **D**elete Word                     |

## Line Editing

| Shortcut                                 | Command                                   |
|------------------------------------------|-------------------------------------------|
| <kbd>Ctrl + L</kbd> <kbd>E</kbd>         | Move To **E**nd Of Line                   |
| <kbd>Ctrl + L</kbd> <kbd>Shift + E</kbd> | Select To **E**nd Of Line                 |
| <kbd>Ctrl + L</kbd> <kbd>S</kbd>         | Move To **S**tart Of Line                 |
| <kbd>Ctrl + L</kbd> <kbd>Shift + S</kbd> | Select To **S**tart Of Line               |
| <kbd>Ctrl + L</kbd> <kbd>L</kbd>         | Select The Whole Line                     |
| <kbd>Ctrl + L</kbd> <kbd>D</kbd>         | **D**elete The Line                       |
| <kbd>Ctrl + L</kbd> <kbd>Delete</kbd>    | Delete everything To The Right            |
| <kbd>Ctrl + L</kbd> <kbd>Backspace</kbd> | Delete everything To The Left             |

## Paragraph

| Shortcut                                 | Command                                   |
|------------------------------------------|-------------------------------------------|
| <kbd>Ctrl + H</kbd> <kbd>H</kbd>         | Expand Selection To Paragraph             |
| <kbd>Ctrl + H</kbd> <kbd>S</kbd>         | Expand Selection To Paragraph             |
| <kbd>Ctrl + H</kbd> <kbd>Shift + S</kbd> | Expand Selection To Paragraph             |
| <kbd>Ctrl + H</kbd> <kbd>E</kbd>         | Expand Selection To Paragraph             |
| <kbd>Ctrl + H</kbd> <kbd>Shift + E</kbd> | Expand Selection To Paragraph             |

## Movement

| Shortcut                                    | Command                                |
|-------------------------------------------- |--------------------------------------- |
| <kbd>Ctrl + Up</kbd>                        | Smart Travel Up                        |
| <kbd>Ctrl + Down</kbd>                      | Smart Travel Down                      |
| <kbd>Alt + Right</kbd>                      | Deslocate Word Right                   |
| <kbd>Alt + Left</kbd>                       | Deslocate Word Left                    |
| <kbd>Alt + Left</kbd>                       | Deslocate Word Left                    |
| <kbd>Ctrl + G</kbd> <kbd>G</kbd>            | Go To Line Number                      |
| <kbd>Ctrl + G</kbd> <kbd>L</kbd>            | Go To **L**ast Editing Location        |
| <kbd>Ctrl + G</kbd> <kbd>B</kbd>            | Go To **B**racket                      |
| <kbd>Ctrl + G</kbd> <kbd>Shift + B</kbd>    | Select To **B**racket                  |
| <kbd>Ctrl + G</kbd> <kbd>S</kbd>            | Go **S**tart Of File                   |
| <kbd>Ctrl + G</kbd> <kbd>E</kbd>            | Go To **E**nd Of File                  |
| <kbd>Ctrl + G</kbd> <kbd>Up</kbd>           | Go Up To The Visible Screen Area       |
| <kbd>Ctrl + G</kbd> <kbd>Shift + Up</kbd>   | Select Up To The Visible Screen Area   |
| <kbd>Ctrl + G</kbd> <kbd>Down</kbd>         | Go Down To The Visible Screen Area     |
| <kbd>Ctrl + G</kbd> <kbd>Shift + Down</kbd> | Select Down To The Visible Screen Area |

# Custom Features

## Smart Travel

Navigate vertically in your code using <kbd>Ctrl + Up</kbd> and <kbd>Ctrl + Down</kbd> by skipping non-relevant lines (like punctuation or whitespace only). The criteria to decide if a line is considered relevant or not can be configured per language using the `code-flow.languageMarks` setting. If the extension does not found a compatible language configured, the default behaviour is to jump to lines where there are word characters: `/^\w+/`.

> PS.: This is generally more flexible than using VS Code symbols because you don't need an external provider and you can configure your own rules.

# Keyboard Layout

This extensions uses [layout independent bingings](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-layoutindependent-bindings).
If by any means you have problems with your keyboard layout, you can customize the shortucts in your user profile. 

**An example of OEM bingings for a ABNT2 keyboard**

> Only remap if the shortcuts are not properly recognized by your system

```json
{
  "key": "ctrl+shift+oem_6",
  "command": "editor.fold"
},
{
  "key": "ctrl+shift+oem_5",
  "command": "editor.unfold"
},
{
  "key": "ctrl+oem_6",
  "command": "editor.action.indentLines"
},
{
  "key": "ctrl+oem_5",
  "command": "editor.action.outdentLines"
},
{
  "key": "ctrl+b ctrl+oem_plus",
  "command": "workbench.action.splitEditorOrthogonal"
},
{
  "key": "ctrl+b ctrl+oem_minus",
  "command": "workbench.action.splitEditorDown"
}
```

# Extensions pairings

- [Code Flea](https://marketplace.visualstudio.com/items?itemName=Richibansoft.codeflea): To speed up even more your code navigation

# Future Ideas

- <kbd>Ctrl + T</kbd> = Select Until Character (VIM-Like)
- <kbd>Ctrl + G</kbd> <kbd>R</kbd> = Go To Relative Line Number (VIM-Like)
- <kbd>Ctrl + G</kbd> <kbd>F</kbd> = Go To Line Fuzzy
- <kbd>Alt + L</kbd> = Delete Line
