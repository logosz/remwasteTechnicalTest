# xery-blog-mern.vercel.app automation test for REM WASTE 

## Description
This repository was created to fulfill one of the hiring processes at REM WASTE.
This reposiroty was build under mac environment.
The website demo is https://xery-blog-mern.vercel.app/ that using React in frontend and NodeJS in backend.
### Please note that due to the free website demo, there would be some unstable when the automation is running.

# This repository has 2 project
- Playwright UI Automation
- Postman API Automation

### Please follow below steps

## Prerequisite for Playwright Automation
- NodeJs
- Playwright

## Installation for Playwright Automation
- NodeJs installation https://nodejs.org/en/download
- Playwright installation https://playwright.dev/docs/intro

## How to run the project for Playwright Automation
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

## Prerequisite for Postman Automation
- Newman
- Postman

## Installation for Playwright Automation
- Newman installation https://support.postman.com/hc/en-us/articles/115003703325-How-to-install-Newman
- Postman installation https://learning.postman.com/docs/getting-started/installation/installation-and-updates/

## How to run the project for Postman Automation
- Go to postman folder
- Install Newman report
```
npm install newman-reporter-html
```
- Run the Newman
```
newman run blogApp.postman_collection.json -e blogApp.postman_environment.json --reporters cli,html --reporter-html-export newman-report.html
```

Contact author for more details
akbarrosyidhana@gmail.com
