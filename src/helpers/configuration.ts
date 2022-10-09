import { workspace } from "vscode";

const CONFIGURATIONS = workspace.getConfiguration("code-flow");

export function getConfigurationOrThrow(key: string) {
  let configuration = CONFIGURATIONS?.get(key);
  if (configuration) return configuration;
  throw new Error(`Could not find configuration for key ${key}`);
}