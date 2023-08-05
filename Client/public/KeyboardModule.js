const layouts = {
	azerty : [
		["a","z","e","r","t","y","u","i","o","p","⌫"],
		["q","s","d","f","g","h","j","k","l","m","⏎"],
		["w","x","c","v","b","n"]
	],

	qwerty : [
		["q","w","e","r","t","y","u","i","o","p","⌫"],
		["a","s","d","f","g","h","j","k","l","⏎"],
		["z","x","c","v","b","n","m"]
	]
}

function get_keyboard(layout_name) {
	const layout = layouts[layout_name] || layouts.qwerty;

	const input_event_name = "OnCustomKeyBoardInput";
	const kb = document.createElement("div");
	kb.className = "keyboard";
	layout.forEach(row => {
		const rowElement = document.createElement("div");
		rowElement.className="keyboard-row";
		kb.appendChild(rowElement);
		row.forEach(key => {
			const btn = document.createElement("button");
			btn.textContent = key;
			btn.className = "keyboard-key";
			rowElement.appendChild(btn);

			btn.onclick=_=>{
				const value = key;
				if (key === "⌫") {
					value = "Backspace";
				} else if (key === "⏎") {
					value = "Enter";
				}

				kb.dispatchEvent(new CustomEvent(input_event_name,{detail:value}));
			};
			
		});
	});

	document.addEventListener("keyup", (e) => {
		if(e.isComposing) {
			return;
		}

		let pressedKey = String(e.key).toLowerCase()
		if (pressedKey === "backspace") {
			kb.dispatchEvent(new CustomEvent(input_event_name,{detail:pressedKey}));
			return;
		}
	
		if (pressedKey === "enter") {
			kb.dispatchEvent(new CustomEvent(input_event_name,{detail:pressedKey}));
			return;
		}
	
		let found = pressedKey.match(/[a-z]/gi)
		if (found && found.length === 1) {
			kb.dispatchEvent(new CustomEvent(input_event_name,{detail:pressedKey}));
			return;
		}
	});
	
	return kb;
}