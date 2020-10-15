//basic natural language processing in js
//loading 'natural' package
var natural = require('natural');

//use WordTokenizer method as object 'tokenizer' 
var tokenizer = new natural.WordTokenizer();

//tokenizing some simple text
console.log(tokenizer.tokenize('My cats are still afraid of the new puppy!'));

//reducing words to roots with stemming
natural.PorterStemmer.attach();
console.log('I can see a good outcome for everyone'.tokenizeAndStem());

//measuring string distances with HammingDistance algorithm
console.log(natural.LevenshteinDistance('christian', 'chris', false));
console.log(natural.LevenshteinDistance('johnson', 'john', false));

//now some Nlp classification with BayesClassifier
var classifier = new natural.BayesClassifier();
classifier.addDocument('i realize it is bad', 'move');
classifier.addDocument('it is probably safer here', 'stay');
classifier.addDocument('just wait until weather passes', 'stay');
classifier.addDocument('well we have time to leave', 'move');
classifier.train();

//now seeing the results on some dummy data
console.log(classifier.classify('the weather is not good'));
console.log(classifier.classify('we have enough supplies'));

//sentiment analysis example
var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer('English', stemmer, 'afinn');

//get sentiment of dummy text
console.log(analyzer.getSentiment(['i', 'do', 'not', 'want', 'to', 'talk', 'to', 'you']));

//phonetic matching example
var metaphone = natural.Metaphone;
var soundEx = natural.SoundEx;

//different spelling but same pronunciation
var wordA = 'phonetics';
var wordB = 'fonetix';

if (metaphone.compare(wordA, wordB)) {
    console.log('they sound alike!');
}

console.log(metaphone.process('phonetics'));

//spell check example
var corpus = ['something', 'soothing'];
var spellcheck = new natural.Spellcheck(corpus);

//prints spell check correction recommendations
console.log(spellcheck.getCorrections('soemthing', 1));
console.log(spellcheck.getCorrections('soemthing', 2));

