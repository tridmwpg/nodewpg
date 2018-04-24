
let message = 'Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator\'s fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award';
console.log(message.toUpperCase());
console.log('----------------------------');
console.log(message.toLowerCase());
console.log('----------------------------');

let message1 = 'Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator\'s fortune.\n';
console.log('----------------------------');
console.log(message1.toUpperCase());
console.log('----------------------------');

let message2 = 'Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.\n';
console.log('----------------------------');
console.log(message2.toLowerCase());
console.log('----------------------------');

let result = message1.concat(message2);
console.log('----------------------------');
console.log(result.toLowerCase());
console.log('----------------------------');
console.log(result.toUpperCase());
console.log('----------------------------');
console.log(`The message has ${result.length} characters long`)