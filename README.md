# Wealth Wizards UI Tests

This repository contains some Cypress smoke tests for the Wealth Wizards homepage. 

[You can find the API tests here](https://github.com/jackt24/wealth-wizards-api-test)


## What Happens When Code is Pushed?

When code is pushed to this repository, the following workflow will occur:

1. **GitHub Actions Workflow:** Upon receiving a push event, GitHub Actions will trigger a workflow defined in the `.github/workflows` directory.

2. **BrowserStack Tests:** The workflow will run the tests on BrowserStack using the BrowserStack Cypress CLI. This ensures that the tests are executed on multiple browser and device configurations.

3. **Test Results:** After the tests are executed, the workflow will provide feedback on whether the tests passed or failed. Any failures will be reported in the GitHub Actions logs.

4. **Pull Requests:** If the push event is associated with a pull request, the test results will be displayed in the pull request interface on GitHub. This allows reviewers to see the status of the tests and determine if the changes introduced any regressions.
