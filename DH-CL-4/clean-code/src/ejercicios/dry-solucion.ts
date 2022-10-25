export class SuperHero {
	constructor(
		public name: string = "",
		public power: string = "",
		public age: number = 0
	) {}

	isReadytoPrint() {
		for (const key in this) {
			switch (typeof this[key]) {
				case "string": {
					if ((<string>this[key]).length <= 0)
						throw new Error("El nombre no puede estar vacio");
					break;
				}
				case "number": {
					if (<number>this[key] <= 0)
						throw new Error("La edad debe ser mayor a 0");
					break;
				}

				default:
					throw new Error("Tipo de dato no soportado");
			}
    }
    
    return true;
	}

	printHeroInfo() {
		console.log(`Name: ${this.name}`);
		console.log(`Power: ${this.power}`);
		console.log(`Age: ${this.age}`);
	}
}

const myHero = new SuperHero("Batman", "Volar", 40);
myHero.printHeroInfo();
