# Wealth Wizards UI Tests

This repository contains some Cypress/CucumberJS smoke tests for the Wealth Wizards homepage. 

[You can find the API tests here](https://github.com/jackt24/wealth-wizards-api-test)

[You can view the latest BrowserStack results here](https://automate.browserstack.com/dashboard/v2/public-build/Z0pXMEZYSHd5MUFOZFdCcHFNQXZ1dnF2SEdmVjJ4Mi9vbjhLZjJXandEaTJsOGdGOVZEQllyaU53L3IyR3ZLSmIyMktyNVd3ZnFmbHcydmNuSlhKa0E9PS0tbzViUU91aXNjc1VPYVp6VFJveWJ0QT09--1f13d740bc8dc14f1a64655ae5d6744102030daf)

Please note the latest actions builds will fail as I have run out of time on my free Browserstack account (you can see this in the logs). Its all running fine locally, I promise! 

Next steps: Add Percy tests


## What Happens When Code is Pushed?

When code is pushed to this repository, the following workflow will occur:

1. **GitHub Actions Workflow:** Upon receiving a push event, GitHub Actions will trigger a workflow defined in the `.github/workflows` directory.

2. **BrowserStack Tests:** The workflow will run the tests on BrowserStack using the BrowserStack Cypress CLI. This ensures that the tests are executed on multiple browser and device configurations.

3. **Test Results:** After the tests are executed, the workflow will provide feedback on whether the tests passed or failed. Any failures will be reported in the GitHub Actions logs.

4. **Pull Requests:** If the push event is associated with a pull request, the test results will be displayed in the pull request interface on GitHub. This allows reviewers to see the status of the tests and determine if the changes introduced any regressions.
