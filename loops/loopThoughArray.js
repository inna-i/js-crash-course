const words = ['you', 'with', 'be', 'Force', 'the', 'May'];


function buildSentence(wordsArray, isReversed = true) {
    let sentence = '';

    if (isReversed) {
        // in the loop we will find a sum of nums array items
        for (let i = wordsArray.length - 1; i >= 0; i--) {
            console.log('itteration ', i, ' and word is ', wordsArray[i]);
    
            sentence += wordsArray[i] + ' ';
        }
    } else {
        for (let i = 0; i < wordsArray.length; i++) {
            console.log('itteration ', i, ' and word is ', wordsArray[i]);
    
            sentence += wordsArray[i] + ' ';
        }
    }

    console.log(sentence);

    return sentence;
}


buildSentence(words);
buildSentence(['!', 'world', 'Hello']);
buildSentence(['Hello', 'world', '!'], false);