# design50
design50 is a VS Code Extension that utilizes OpenAI's GPT model (gpt-4o) to provide code design feedback for learners.

## Usage
To use design50, click the `design50` button on the top-right corner of the current VS Code text editor. design50 will then generate natural language feedback on the design of the code and provide relevant contextual information.

## Package and Install Extension

```
# If vsce is not installed
npm install -g @vscode/vsce

# Install dependencies and package
npm install
vsce package
code --install-extension design50-x.x.x
```
