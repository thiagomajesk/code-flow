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

## Shortcuts

The shortcuts here presented use some kind a mnemonic device to improve command usage and discovery.
Although the main goal is to provide a more productive shortcut scheme, the extension tries to stay as close as possible to the overall editing experience in VS Code, trying to not drastically change important editing commands...   
For instance, the extension avoids poluting the global scope (<kbd>Ctrl</kbd>, <kbd>Alt</kbd> & <kbd>Shift</kbd>) or rebind existant commands to something else. For the most part we try to stay consistant with the current editing experience but expanding a little bit more.

Most of the new commands/ chords will be located in a specific scope like:

- <kbd>K</kbd> for Wor**k**bench
- <kbd>B</kbd> for **B**uffer (Text Editor)

> For some of this shortcuts Code Flow will rely on thirdparty extension to be installed. They are not much, but they are awesome 😎.

### Workbench Navigation

|                                          |                                         |
|------------------------------------------|-----------------------------------------|
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + E</kbd>  | Open/ Toggle **E**xplorer               |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + F</kbd>  | Open/ Toggle **F**ind (Search)          |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + D</kbd>  | Open/ Toggle **D**ebugger               |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + G</kbd>  | Open/ Toggle **G**it                    |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + S</kbd>  | Open / Toggle **S**idebar               |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + R</kbd>  | Open / Toggle **R**emote Explorer       |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + B</kbd>  | Open / Toggle **B**uffer (Text Editor)  |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + T</kbd>  | Open / Toggle **T**erminal              |
| <kbd>Ctrl + K</kbd> <kbd>Ctrl + M</kbd>  | Open / Toggle **M**inimap               |

---

### File Explorer Commands

|                                    |                                     |
|------------------------------------|-------------------------------------|
| <kbd>Ctrl + D</kbd>                | **D**uplicate File                  |
| <kbd>Ctrl + N</kbd>                | **N**ew File                        |
| <kbd>Ctrl + Shift + N</kbd>        | **N**ew Folder                      |
| <kbd>Ctrl + Alt + N</kbd>          | **N**ew File from project root      |
| <kbd>Ctrl + Shift + Alt + N</kbd>  | **N**ew Folder from project root    |

---

### Buffer Commands

|                                              |                                     |
|----------------------------------------------|-------------------------------------|
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + W</kbd>      | Close Buffer                        |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + N</kbd>      | Split (**N**ew) Buffer              |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + P</kbd>      | Open **P**review Buffer             |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + -</kbd>      | Split Buffer Horizontaly            |
| <kbd>Ctrl + B</kbd> <kbd>Ctrl + +</kbd>      | Split Buffer Orthogonaly            |
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

---

### Content Manipulation

|                                  |                                     |
|----------------------------------|-------------------------------------|
| <kbd>Ctrl + [</kbd>              | Indent                              |
| <kbd>Ctrl + ]</kbd>              | Deindent                            |
| <kbd>Ctrl + Shift + [</kbd>      | Fold                                |
| <kbd>Ctrl + Shift + ]</kbd>      | Unfold                              |
| <kbd>Alt + T</kbd> <kbd>U</kbd>  | Transform To **U**ppercase          |
| <kbd>Alt + T</kbd> <kbd>L</kbd>  | Transform To **L**owercase          |
| <kbd>Alt + T</kbd> <kbd>T</kbd>  | Transform To **T**itlecase          |
| <kbd>Alt + T</kbd> <kbd>C</kbd>  | Transform To **C**amelCase          |
| <kbd>Alt + T</kbd> <kbd>P</kbd>  | Transform To **P**ascalCase         |
| <kbd>Alt + T</kbd> <kbd>S</kbd>  | Transform To **S**nakeCase          |
| <kbd>Alt + T</kbd> <kbd>D</kbd>  | Transform To **D**ashCase           |
| <kbd>Alt + Shift + D</kbd>       | **D**elete Word                     |

### Movement

|                              |                                     |
|------------------------------|-------------------------------------|
| <kbd>Ctrl + Up</kbd>         | Smart Travel Up                     |
| <kbd>Ctrl + Down</kbd>       | Smart Travel Down                   |
| <kbd>Alt + Right</kbd>       | Deslocate Word Right                |
| <kbd>Alt + Left</kbd>        | Deslocate Word Left                 |


### Future Ideas

- <kbd>Ctrl + T</kbd> = Select Until Character (VIM-Like)

- <kbd>Ctrl + G</kbd> <kbd>G</kbd> = Go To Line Number
- <kbd>Ctrl + G</kbd> <kbd>R</kbd> = Go To Relative Line Number (VIM-Like)
- <kbd>Ctrl + G</kbd> <kbd>F</kbd> = Go To Line Fuzzy
- <kbd>Alt + L</kbd> = Delete Line
