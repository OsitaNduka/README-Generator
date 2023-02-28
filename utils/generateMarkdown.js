// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![GitHub license](https://img.shields.io/badge/license-APACHE2.0-blue.svg)

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
 ${data.license === 
    "Apache" ? "Apache" + "" + '<br>' + "" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.license === "MIT" ? "MIT" + "" + '<br>' + "" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license === "IBM" ? "IBM" + "" + '<br>' + "" + "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "Perl" + "" + '<br>' + "" + "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}

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
