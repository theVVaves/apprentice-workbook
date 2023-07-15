// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {

    /*     const allowedChars = "-_. ";
      
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
          const char = str.charAt(i);
          if (allowedChars.indexOf(char) !== -1 || /^[a-zA-Z0-9]$/.test(char)) {
            newStr += char;
          }
        }
      
        return newStr;
     */
    return [...str]
        .filter(char =>
            /[a-zA-Z0-9-_\. ]/.test(char)
        )
        .join('');

    //    return str.replace(/[^\w\s.-]/g, '');
}