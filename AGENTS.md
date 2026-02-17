# Project Litecode

## Project Overview
This project is an agentic coding and planning application to build anything the heart desires (akin to the codex desktop app by openAI)

## Tech stack
- This project is using the tauri framework, where rust is used to interface with system level API's
- Typescript, react and vite ecosystem for building the UI of the app

## Important Commands

Install deps
```shell
npm install
```

Run dev client
```shell
npm run dev
```

Build and run tauri app
```shell
npm run tauri dev
```

## What you should do
- Whenever you find any quirks you think are helpful to remember for future sessions append them to the "Good to knows" section of this document
- Write type safe typescript ALWAYS, no Anys thrown around
- Write secure by design architectures ALWAYS

## What you should not do
- You cannot source control ANYTHING, however you can use git log to view previous commits and interface with the git history, read only no write

## Good to knows
- 
- registry.npmjs.org may return 403 in this environment, so prefer existing dependencies when possible.
