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
  
     > Contributing



  ## Installation

  # ${data.installation}
  


`;
}

module.exports = generateMarkdown;
