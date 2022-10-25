
export function isDCSuperHero(superHero: string): boolean {
	if (superHero === "batman" || superHero === "superman" || superHero === "wonderWoman") {
		return true;
	} else {
		return false;
	}
}


export function getSuperHeroByColor(color: string): string[] {
	if (color === "red") {
		return ["ironMan", "flash", "spiderMan"];
	} else if (color === "yellow") {
		return ["acuaman", "wolverine", "firestorm"];
	} else if (color === "black") {
		return ["batman", "blackWidow", "blackPanther"];
	} else {
		throw Error("the color must be: red, yellow, black");
	}
}


let isFirstStepWorking = true;
let isSecondStepWorking = true;
let isThirdStepWorking = true;
let isFourthStepWorking = true;

export function workingSteps() {
	if (isFirstStepWorking === true) {
		if (isSecondStepWorking === true) {
			if (isThirdStepWorking === true) {
				if (isFourthStepWorking === true) {
					return "Working properly!";
				} else {
					return "Fourth step broken.";
				}
			} else {
				return "Third step broken.";
			}
		} else {
			return "Second step broken.";
		}
	} else {
		return "First step broken.";
	}
}


console.log({ isDCSuperHero: isDCSuperHero("batman"), superHero: "batman" });
console.log({ isDCSuperHero: isDCSuperHero("superman"), superHero: "superman" });
console.log({ getSuperHeroByColor: getSuperHeroByColor("red"), color: "red" });
console.log({ getSuperHeroByColor: getSuperHeroByColor("yellow"), color: "yellow" });


console.log({workingSteps: workingSteps()}); 
