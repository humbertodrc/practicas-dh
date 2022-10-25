export const sh = [
	{nombre: "Batman", edad: 30},
	{nombre: "Robin", edad: 27},
	{nombre: "Daredevil", edad: 40},
	{nombre: "Wolverine", edad: 60},
];

export const mayorCuarenta = sh.filter((h) => h.edad > 40);

export interface SuperHeroeInterface {
  nombre: string;
  edad: number;
}

// dia de hoy
export const ddmmyyyy = new Date()

// dias transcurridos desde un fecha
export const d: number = 33

// primer nombre first name
export const nombre = "Humberto"

// primer apellido - last name
export const apellido = 'Rivero';

// días desde la última modificación - days since modification
export const dsm = 12;
  
// cantidad máxima de clases por estudiante - max classes per student
export const max = 6;

