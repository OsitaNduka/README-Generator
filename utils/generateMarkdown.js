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
  
    * [Contributing](#contributing)
     * [Tests](#tests)
     * [Questions](#questions)



  ## Installation

  To install necessary dependencies, run this command:

  # ${data.installation}


  ## Usage

  # ${data.usage}

  ## License

  This project is licensed under the

  # ${data.license}

  ## Contributing

  # ${data.contributing}

  ## Tests

  # ${data.test}

  ## Questions

  If you have any questions about the repo. please contact me

  # ${data.github}


  


`;
}

module.exports = generateMarkdown;
