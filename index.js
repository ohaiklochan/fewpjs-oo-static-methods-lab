class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    string = string[0].toUpperCase()+string.slice(1);
    let sentence = string.split(" ");
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    for(let i = 0; i < sentence.length; i++) {
      if(!(exceptions.includes(sentence[i]))) {
        sentence[i] = sentence[i][0].toUpperCase()+sentence[i].slice(1);
      }
    }
    return sentence.join(" ")
  }
}

