/*Encontrar un numero con productos de 2 3 5 y aumentado el numero base multiplicandolo
por otro que aumenta progresivamente
*/
const checar =(resto,i)=>{
	console.log(`Valor de resto en checar = ${resto}`)
	console.log(`Valor de i =${i}`)

	secuencia.push(i)
	let total=1;
	//Comprobar si el resultado es correcto si el resto es igual a 1
	if(resto==1){
		console.log(`valor de resto  en if ${resto}`)
		console.log("todo es correcto")
	}
	//Obtener resultado de multiplicacion
	for(let suma of secuencia){
		total=total*suma;
	}
	//ENVIAR DATOS EN CASO DE QUE TOTAL SEA IGUAL A EL NUMERO BUSCADO
	if(total==candidato){
		console.log(`1 aceptado, total = ${total} y secuencia = ${secuencia}`)
		
	}else{
		console.log("todo NO es correcto")
		console.log(`numero producto total ${total} y numeros de secuencia ${secuencia} `)
		comprobar(resto)
	}
}

const comprobar =(e)=>{
	let divicion = e;
	let borrar = 0;
	vueltas=vueltas+1;
	console.log(`valor de dado resto ${divicion}`)
	
	if(divicion%2==0){
		console.log(`valor de vueltas ${vueltas}`)
		borrar=borrar+1;
		console.log(`valor de borrar = ${borrar}`)
		let resto = divicion/2;
		console.log(`valor de divicion en dos con ${divicion}= ${resto}`)
		divicion=resto;
		checar(resto,2)
	}

	if(divicion%3==0){
		console.log(`valor de vueltas ${vueltas}`)
		borrar=borrar+1;
		console.log(`valor de borrar = ${borrar}`)
		let resto =divicion/3
		console.log(`valor de divicion en tres con ${divicion}= ${resto}`)
		divicion=resto;
		checar(resto,3)	
	}

	if(divicion%5==0){
		console.log(`valor de vueltas ${vueltas}`)
		borrar=borrar+1;
		console.log(`valor de borrar = ${borrar}`)
		let resto = divicion/5
		console.log(`valor de divicion en cinco con ${divicion}= ${resto}`)
		divicion=resto;
		checar(resto,5)
	}

	console.log(`valor de vueltas ${vueltas}`)
	console.log(`valor de borrar = ${borrar}`)
	for(let i=0;i<borrar;i++){
	secuencia.pop();
	}
	console.log(`-${borrar} valor de secuencia ${secuencia}`)
	vueltas=vueltas-1;

}


let numerito, vueltas=0;
let candidato
let secuencia =[];

const numero = prompt("Escribe cualquier numero") 
numerito=numero.trim()

numerito = parseInt(numero)
//numerito es un numero
// console.log(`Comprobacion ${numerito+3}`)


for(let i=1;i<2;i++){
	candidato =i*numerito;
	console.log(`candidato ${i} = ${candidato}`)
	
	comprobar(candidato)

	//VER SI QUEDARON NUMEROS EN LA COLA
	let total=0;
	for(let suma of secuencia){
		total = total + suma;
	}
	console.log(`Total de suma ${total}`)
	console.log("que paso")

}



