// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//function with a broken template literal
//proper str

// function buildString(...template){
//   return `I like ${template.join(', ')}!`;
// }

const buildString = (...template) => `I like ${template.join(', ')}!`;