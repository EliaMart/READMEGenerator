// function that returns the license section of README
function renderLicenseSection(license) {

  return `![Badge](https://img.shields.io/badge/license-${license}-blue)`
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, license, usage, contributing, tests, github,email} = data 

  return `# ${title}

  ## License 
  ${renderLicenseSection(license)}

  ## Description 
  ${description}

  ## Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [Contributions](#Contributions)
  [License](#License)
  [Tests](#Tests)
  [Questions](#Questions)

  ## Installation
  ${installation}

  ## Usage 
  ${usage}

  ## Contributions 
  ${contributing}

  ## Licesne 
  ${license}

  ## Tests
  ${tests}

  ## Questions 
  ${github}
  ${email}

`;
}

module.exports = generateMarkdown;


