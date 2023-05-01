Replace John
A string is stored in the variable fakeName.

Take this fake name and use it to replace every occurrence of "John" in the message.

Do not change the message in other way.

 If your message does not match the expected message, the test cases will log both for you. You can see this by expanding the "Log" in the test results.
 
 
 
 
 
 const fakeName = require('./fakeName');

const message = `
    Hello, John! You left a package at the office today.
    You can pick up tomorrow at 10am, John. 
    If not I will drop it off this weekend.
    Goodbye John!
`;

module.exports = message;

-----
  
  
  const fakeName = require('./fakeName');

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

module.exports = message;
