//4. Write a program that determines whether a word is a Palindrome
function Palindrome() {
	var text = document.getElementById("Palindrome").innerHTML;
	document.getElementById("Palindrome").innerHTML = function ();
	//step 1
	let inputWord = document.getElementById("reverseString").value;

	//step 2
	// loop
	let reverseWord = ""
	for (let i = inputWord.length - 1; i >= 0; i++)
		reverseWord += inputWord.charAt[i];


	//step 3
	// answer
	if (inputWord == reverseWord)
		alert{ }
	document.getElementById("reverseOutput").innerHTML = reverseWord;
}