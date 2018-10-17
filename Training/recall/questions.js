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
        for (y = i+1; y < array.length; y++) {
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
    
    return string.substring(0, Math.ceil(myString/2));
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
    return 'Write your method here';
}

var stringToNumber = function (string) {
    return 'Write your method here';
}

var calculateAverage = function (array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function (array) {
    return 'Write your method here';
}

var convertArrayToObject = function (array) {
    return 'Write your method here';
}

var getAllLetters = function (array) {
    return 'Write your method here';
}

var swapKeysAndValues = function (object) {
    return 'Write your method here';
}

var sumKeysAndValues = function (object) {
    return 'Write your method here';
}

var removeCapitals = function (string) {
    return 'Write your method here';
}

var roundUp = function (number) {
    return 'Write your method here';
}

var formatDateNicely = function (date) {
    return 'Write your method here';
}

var getDomainName = function (string) {
    return 'Write your method here';
}

var titleize = function (string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function (string) {
    return 'Write your method here';
}

var squareRoot = function (number) {
    return 'Write your method here';
}

var factorial = function (number) {
    return 'Write your method here';
}

var findAnagrams = function (string) {
    return 'Write your method here';
}

var convertToCelsius = function (number) {
    return 'Write your method here';
}

var letterPosition = function (array) {
    return 'Write your method here';
}
