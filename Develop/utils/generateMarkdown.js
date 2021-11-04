// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `Project Title: ${data.title}

Table of Contents:

Project Description:${data.description}
Project Installation ${data.description}
Project Usage ${data.usage}
Project Contribution ${data.contribution}
Project Test ${data.test}
Project Licenses: ${data.licenses}
Reach out to this email with any questions: ${data.email}
Main GitHub account: ${data.username}
Questions: ${data.questions}`
}

module.exports = generateMarkdown;
