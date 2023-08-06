interface GuessingField extends HTMLDivElement {
	letterPool:HTMLElement[];
	configure(pattern : string):void;
}

function create_guessing_field_element() : GuessingField {
	const guessingField = <GuessingField> document.createElement("div");
	guessingField.className = "guessing-field";
	guessingField.letterPool = [];
	for (let index = 0; index < 200; ++index) {
		const letter = document.createElement("div");
		letter.className = "guessing-letter";
		guessingField.letterPool.push(letter);
	}

	guessingField.configure = function (pattern: string):void {
		guessingField.replaceChildren();
		const length = pattern.length;
		if(length >= guessingField.letterPool.length)
		{
			console.log("pattern is too long");
			return;
		}

		for (let index = 0; index < length; ++index) {
			const char = pattern[index];
			let found = char.match(/[a-z]/gi);
			const letter = guessingField.letterPool[index];
			if (found) {
				letter.id = "letter";
			}
			else {
				letter.id = "filler";
			};
			
			letter.textContent = "_";

			guessingField.appendChild(letter);
		}
	};

	return guessingField;
}