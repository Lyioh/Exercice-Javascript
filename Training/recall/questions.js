var selectElementsStartingWithA = function (array) {
    for (i = 0; i < array.length; i++) {
        if (array[i].charCodeAt(0) != "a".charCodeAt(0))
            array.splice(i, 1);
    }
    return array;
}

var selectElementsStartingWithVowel = function (array) {
    let vowelArray = ["a", "e", "i", "o", "u", "y"];

    function triageVowel(monArray) {
        for (y = 0; y < vowelArray.length; y++) {
            if (monArray.charAt(0) === vowelArray[y].charAt(0))
                return monArray;
        }
    }

    return array.filter(triageVowel);
}

var removeNullElements = function (array) {

    function nullIsOut(monArray) {
        if (monArray != null) {
            return monArray.toString();
        }
    }
    return array.filter(nullIsOut)
}

var removeNullAndFalseElements = function (array) {

    function nullIsOut(monArray) {
        if ((monArray != null) && (monArray !== false)) {
            return monArray.toString();
        }
    }

    return array.filter(nullIsOut)
}

var reverseWordsInArray = function (array) {

    function reverseMe(myArray) {
        return myArray.split("").reverse().join("");
    }

    return array.map(reverseMe)
}

var everyPossiblePair = function (array) {
    // C'est pas optimal. 
    // La double boucle n'est pas treès bien faite
    let monArray = [];
    for (i = 0; i < array.length; i++) {
        for (y = i + 1; y < array.length; y++) {
            //Regarde les consoles log pour te rappeler pourquoi les deux boucles ne sont pas optimals
            console.log("i " + i)
            console.log("y " + y)
            monArray.push([array[i], array[y]])
        }
    }
    //ENcore une fois si ma boucle au dessu est optimal alors je n'est pas besoin de c'est boucle
    for (u = 0; u < monArray.length; u++) {
        monArray[u].sort();
    }
    monArray.sort();
    return monArray;
}

var allElementsExceptFirstThree = function (array) {
    return array.splice(3, array.length);
}

var addElementToBeginning = function (array, element) {
    array.unshift(element);
    return array
}

var sortByLastLetter = function (array) {
    let newArray
    //Je reverse tout les mot du tableau
    function reverseMe(myArray) {
        return myArray.split("").reverse().join("");
    }

    newArray = array.map(reverseMe);
    console.log(newArray)
    //
    //Maintenant je les tri par ordre alphabetique
    newArray.sort();
    console.log(array)
    return newArray.map(reverseMe);
}

var getFirstHalf = function (string) {
    let myString;
    myString = string.length;

    return string.substring(0, Math.ceil(myString / 2));
}

var makeNegative = function (number) {

    return -Math.abs(number);
}

var numberOfPalindromes = function (array) {
    let monArray = [];
    let compare;

    function isPalindrome(word) {
        compare = word.split("").reverse().join("");
        if (compare === word) {
            compare.split("").reverse().join("");
            return compare
        }
    }

    monArray = array.filter(isPalindrome);
    return monArray.length;
}

var shortestWord = function (array) {

    function worde(mot1, motEtudier) {
        if (mot1.length < motEtudier.length) {
            return mot1
        } else
            return motEtudier
    }

    return array.reduce(worde);
}

var longestWord = function (array) {

    function worde(mot1, motEtudier) {
        if (mot1.length > motEtudier.length) {
            return mot1
        } else
            return motEtudier
    }

    return array.reduce(worde);
}

var sumNumbers = function (array) {

    function worde(total, chiffre) {
        return total + chiffre
    }
    return array.reduce(worde);
}

var repeatElements = function (array) {
    return array.concat(array)
}

var stringToNumber = function (string) {
    return Number(string)
}

var calculateAverage = function (array) {

    function worde(total, chiffre) {
        return total + chiffre
    }
    return (array.reduce(worde) / 3);
}

var getElementsUntilGreaterThanFive = function (array) {
    let newArray = [];

    for (i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            i = array.length;
        }
        else {
            newArray.push(array[i])
        }
    }
    return newArray;
}

var convertArrayToObject = function (array) {
    let myObject = {};
    for (i = 0; i < array.length; i++) {
        let iPlusUn = i + 1;
        myObject[array[i]] = array[iPlusUn];
        i++
    }
    return myObject;
}

var getAllLetters = function (array) {
    array = array.join("").split("").sort();
    let mySet = new Set(array);
    array = Array.from(mySet)
    return array;

}

var swapKeysAndValues = function (object) {
    let myObject = {}

    for (let i in object) {
        myObject[object[i]] = i;
    }

    return myObject;
}

var sumKeysAndValues = function (object) {
    let number = 0;

    for (let i in object) {
        number = number + Number(object[i]) + Number(i);
    }
    return number;
}

var removeCapitals = function (string) {
    let myArray = string.split("");

    function isItCapital(letter) {
        console.log(letter.charCodeAt(0))
        if (letter.charCodeAt(0) > 96 || letter == " ")

            return letter

    }
    return myArray.filter(isItCapital).join("")
}

var roundUp = function (number) {
    return Math.ceil(number);
}

var formatDateNicely = function (date) {
    return ("0" + date.getUTCDate() + "/0" + (date.getUTCMonth() + 1) + "/" + date.getUTCFullYear());
}

var getDomainName = function (string) {
    return string.substring((string.search("@") + 1), string.lastIndexOf("."))
}

var titleize = function (string) {

    var stopwords = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];
    let myStringArray = string.split(" ");
    let myArray = new Array;
    function capitelizeOtNot(word, indice) {
        if (indice == 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        else if (myStringArray[(indice - 1)].includes(".") == false) {
            for (i = 0; i < stopwords.length; i++) {
                if (word == stopwords[i])
                    return word
            }
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    myArray = myStringArray.map(capitelizeOtNot);
    return myArray.join(" ");
}

var checkForSpecialCharacters = function (string) {
    let regEx = /\D\W/i;
    let result = string.match(regEx)
    if (result == null)
        return false
    else
        return true
}

var squareRoot = function (number) {
    return Math.sqrt(number);
}

var factorial = function (number) {
    let myNumb = number;
    let finalNumb = 1;
    for (i = number; i > 1; i--) {
        finalNumb *= myNumb;
        myNumb--;
    }
    return finalNumb;
}

var findAnagrams = function (string) {

    if (string.length === 1){
        return string;
    }
    let permut = new Array;
    for (let i=0; i<string.length; i++){
        let s = string[0];
        let _new =  findAnagrams(string.slice(1, string.length));
        for(let j = 0; j <_new.length; j++){
            permut.push(s + _new[j]);
        }
        string = string.substr(1, string.length -1) + s;
    }
    return permut; }


var convertToCelsius = function (number) {

    let result = (number - 32) * 5 / 9;

    return Math.ceil(result);
}

var letterPosition = function (array) {
    let lettre;
    function alphabet(letter) {
        lettre = letter.toUpperCase();
        return (lettre.charCodeAt(0)-64);
    }

    array = array.map(alphabet)
    console.log(array)
    return array
}
