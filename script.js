//Desafio Arrays - Ejemplo de Gestión de Personas en una empresa

class Personal {
    constructor(nombre, apellido, edad, posicion, vacaciones, sueldo, equipo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.posicion = posicion
        this.vacaciones = vacaciones
        this.sueldo = sueldo
        this.equipo = equipo
    }
    aumentarSalario(porcentajeAumento) {
        this.salario = this.salario *=porcentajeAumento
    }
    tomarVacaciones(diasVacaciones) {
        this.vacaciones = this.vacaciones -= diasVacaciones
    }
}
trabajador7 = new Personal ("Carlos", "Godoy", 32, "Project Manager", 19, 38000, [])
trabajador6 = new Personal ("Reka", "Barath", 35, "Operations Manager", 36, 40000, [])
trabajador5 = new Personal ("Sofia", "Yonico", 31, "Marketing Sales", 14, 38000, [])
trabajador4 = new Personal ("Fiorella", "Adamo", 28, "Marketing Manager", 22, 35000, [])
trabajador3 = new Personal ("Pablo", "Fiestas", 40, "VP Operaciones", 15, 50000, [trabajador6, trabajador7])
trabajador2 = new Personal ("Carlos", "Molina", 45, "VP Sales", 18, 50000, [trabajador4, trabajador5])
trabajador1 = new Personal ("Raúl", "De Pablos", 48, "CEO", "22", "70000", [trabajador2, trabajador3])

const directores = [trabajador1, trabajador2, trabajador3]
const marketingyventas = [trabajador4, trabajador5]
const operaciones = [trabajador6, trabajador7]

const totalEmpleados = (directores.concat(marketingyventas.concat(operaciones)))

//Calculamos cuántos empleados en total tiene la empresa actualmente (ejemplo de uso de Length)
console.log(`La empresa tiene actualmente" ${totalEmpleados.length} "empleados`)

//Contratamos a un nuevo empleado y se incluye en la plantilla

trabajador8 = new Personal (("Diana", "Mottura", 25, "IT Manager", 40000, []))

//Se actualiza el objetivo trabajador3 con la incorporación al equipo
trabajador3 = new Personal ("Pablo", "Fiestas", 40, "VP Operaciones", 15, 50000, [trabajador6, trabajador7, trabajador8])

//Se agrega el nuevo trabajador al Array de Operaciones y se concatena de nuevo el total de empleados en una nueva constante
operaciones.push (trabajador8) 
const totalEmpleados2 = (directores.concat(marketingyventas.concat(operaciones)))
console.log(`La empresa tiene actualmente" ${totalEmpleados2.length} "empleados`)

console.log(totalEmpleados2)


//El trabajador Carlos Godoy deja la compañía

console.log(operaciones.indexOf(trabajador7))

const bajaTrabajador = operaciones.splice(1,1)
console.log(`El trabajador ${trabajador7.nombre} ${trabajador7.apellido} se ha dado de baja de la compañía`)
console.log(bajaTrabajador)
trabajador3 = new Personal ("Pablo", "Fiestas", 40, "VP Operaciones", 15, 50000, [trabajador6, trabajador8])


const totalEmpleados3 = (directores.concat(marketingyventas.concat(operaciones)))
console.log(`La empresa tiene actualmente" ${totalEmpleados3.length} "empleados`)
console.log(totalEmpleados3)

//Todos los empleados se toman 5 días de vacaciones

let diasVacaciones = 5

trabajador1.tomarVacaciones(diasVacaciones)
trabajador4.tomarVacaciones(diasVacaciones)
trabajador5.tomarVacaciones(diasVacaciones)

console.log(`Se han actualizado las vacaciones de ${trabajador4.nombre}, ${trabajador1.nombre} y  ${trabajador5.nombre} que se han tomado ${diasVacaciones} días de vacaciones`)
console.log(operaciones, marketingyventas, directores)


