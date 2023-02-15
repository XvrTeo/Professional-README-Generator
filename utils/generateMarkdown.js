// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const licenseText = license.toLowerCase();
    const badge = `![License](https://img.shields.io/badge/license-${licenseText}-brightgreen.svg)`;
    return badge;
  } else {
    return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    const licenseText = license.toLowerCase();
    const link = `https://opensource.org/licenses/${licenseText}`;
    return link;
  } else {
    return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseText = license.toUpperCase();
    const licenseLink = renderLicenseLink(license);
    return `## License

    This project is licensed under the [${licenseText}](${licenseLink}) license.

${renderLicenseBadge(license)}

`;
  } else {
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${renderLicenseLink(data.license) ? '- [License](#license)' : ''}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
