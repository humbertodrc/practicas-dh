export class SuperHero {
	constructor(
		public name: string = "",
		public power: string = "",
		public age: number = 0
	) {}

	printHeroInfo() {
		// No DRY
		// Validar que los campos este completos
		// if (this.name === "" || this.power === "" || this.age === 0) {
		// 	throw new Error("Los campos no pueden estar vacios");
		// }

		// if (this.name.length <= 0)
		// 	throw new Error("El nombre no puede estar vacio");
		// if (this.power.length <= 0)
		// 	throw new Error("El poder no puede estar vacio");
    // if (this.age <= 0)
    //   throw new Error("La edad debe ser mayor a 0");

		console.log(`Name: ${this.name}`);
		console.log(`Power: ${this.power}`);
		console.log(`Age: ${this.age}`);
	}
}

const myHero = new SuperHero("Batman", "Volar", 40);
myHero.printHeroInfo()
