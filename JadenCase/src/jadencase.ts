function toJadenCase() {
  // Your code here
  let tweet: string = "How can mirrors be real if our eyes aren't real";

  let splitTweets: string[] = tweet.split(" ");

  for (let i = 0; i < splitTweets.length; i++) {
    splitTweets[i] = splitTweets[i][0].toUpperCase() + splitTweets[i].slice(1);
  }
  
  return splitTweets.join(" ");
}


interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}