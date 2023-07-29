const name_data = [
	[
		"best",
		"worst",
		"simplest",
		"least",
		"most",
		"youngest",
		"tallest",
		"smallest",
		"strongest",
		"weakest",
		"fastest",
		"super",
		"slowest",
		"smartest",
		"slightest",
		"roundest"
	],
	[
		"beautiful",
		"witty",
		"wicked",
		"confusing",
		"rich",
		"strange",
		"rocky",
		"circular",
		"helpful",
		"competent" ,
		"smelly",
		"grumpy",
		"devoted",
		"smart",
		"muscular",
		"graceful"
	],
	[
		"kangaroo",
		"baboon",
		"ant",
		"eel",
		"cockatoo",
		"thar",
		"spider",
		"frog",
		"toad",
		"fox",
		"pigeon",
		"chicken",
		"koala",
		"starfish",
		"octopus",
		"deer"
	]
]

function GetNameFromSeed(seed) {
	seed = seed % 4096;
	let numberResult = [];
	let result = [];
	for(let index = 0; index < name_data.length; ++index) {
		const idx = (seed >> index * 4) & 15;
		numberResult.push(idx);
		result.push(name_data[index][idx]);
	}

	console.log(seed.toString(16) , "->", numberResult.map((value,_)=>value.toString(16)).join(' '));

	return result.join(' ');
}

for (let i = 0; i < 4096; ++i){
	console.log(GetNameFromSeed(i));
} 