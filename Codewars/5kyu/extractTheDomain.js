// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  // find the offending prefixes and get rid of them
  url = url.replace('https://', "");
  url = url.replace('http://', '');
  url = url.replace('www.', '')
  
  // split the string into an array, making the first character the domain (everything before the ".")
  // and return the first value in that array, which should be the domain itself
  return url.split('.')[0]

