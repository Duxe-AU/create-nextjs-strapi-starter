#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
    return true;
  } catch (error) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Duxe-AU/create-nextjs-strapi-starter.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm run setup`;

// process logs
console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log("Instlaling dependencies");
const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) process.exit(-1);

console.log("Project is now ready. You may run `npm run dev` in the terminal to start the development server");
console.log("Please consult to the readme file for more instructions.");