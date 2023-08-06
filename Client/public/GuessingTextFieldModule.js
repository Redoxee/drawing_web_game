function create_guessing_field_element() {
    var guessingField = document.createElement("div");
    guessingField.className = "guessing-field";
    guessingField.letterPool = [];
    for (var index = 0; index < 200; ++index) {
        var letter = document.createElement("div");
        letter.className = "guessing-letter";
        guessingField.letterPool.push(letter);
    }
    guessingField.configure = function (pattern) {
        guessingField.replaceChildren();
        var length = pattern.length;
        if (length >= guessingField.letterPool.length) {
            console.log("pattern is too long");
            return;
        }
        for (var index = 0; index < length; ++index) {
            var char = pattern[index];
            var found = char.match(/[a-z]/gi);
            var letter = guessingField.letterPool[index];
            if (found) {
                letter.id = "letter";
            }
            else {
                letter.id = "filler";
            }
            ;
            letter.textContent = "_";
            guessingField.appendChild(letter);
        }
    };
    return guessingField;
}
