# xery-blog-mern.vercel.app automation test for REM WASTE 

## Description
This repository was created to fulfill one of the hiring processes at REM WASTE.
This reposiroty was build under mac environment.
The website demo is https://xery-blog-mern.vercel.app/ that using React in frontend and NodeJS in backend.
### Please note that due to the free website demo, there would be some unstable when the automation is running.

## Prerequisite
- NodeJs
- Playwright

## Installation
- NodeJs installation https://nodejs.org/en/download
- Playwright installation https://playwright.dev/docs/intro

## How to run the project
- Clone project with command
```sh
git clone git@github.com:logosz/remwasteTechnicalTest.git
```
- Install all dependencies
```sh
npm install
```
- Run the automation
```sh
npx playwright test --project webkit
```
- Run specific test file
```sh
npx playwright test path/to/file_name.js
```
- Open last HTML report
```sh
npx playwright show-report
```

Contact author for more details
akbarrosyidhana@gmail.com
