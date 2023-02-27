// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  # ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
     * Contributing
     * Test
     * Questions



  ## Installation

  To install necessary dependencies, run this command:

  # ${data.installation}


  ## Usage

  # ${data.usage}

  ## License

  # ${data.license}

  ## Contributing

  # ${data.contributing}

  ## Tests

  # ${data.test}

  ## Questions

  # ${data.questions}


  


`;
}

module.exports = generateMarkdown;
