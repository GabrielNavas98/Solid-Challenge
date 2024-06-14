(() => {
    // Ejemplo
    // Alumnos en clases segun su id, 
    // para saber si estuvieron presente o no
    const studentAttendance = [
        { id: 1, isPresent: false },
        { id: 2, isPResent: false },
        { id: 3, isPResent: true },
        { id: 4, isPResent: false },
        { id: 5, isPResent: false },
        { id: 7, isPResent: true },
    ];

    // devolver un array con los ausentes
    const absentStudents = studentAttendance.map((student) => !student.isPresent);

    class AbstractStudent { }
    class StudentMixin { }
    class StudentImplementation { }


    // Todo: Tarea

    // hoy
    const today = new Date();

    // días transcurridos de la ultima modificación
    const daysOfLastUpdate = 5;

    // número de archivos en un directorio 
    const filesInDirectory = 50;

    // nombre
    const developerName = "ariel";

    // apellido
    const developerLastName = "bernardo";

    // minimo de estudiantes para dar clases
    const minimumStudentsPerClass = 6;
    //   maximo de estudiantes para dar clases
    const maximumStudentsPerClass = 50;
})();


//-----------------------------2---------------------------------

const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) {
        return 1500;
    }
    if (isSeparated) {
        return 2500;
    }
    if (isRetired) {
        return 3000;
    }
    return 4000
}

//-----------------------------3---------------------------------

(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit(fruit: string): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela']
        return redFruits.includes(fruit)
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor(color: string): string[] | string {
        const fruitsByColor: { [key: string]: string[] } = {
            red: ['manzana', 'cereza', 'ciruela'],
            yellow: ['piña', 'pera', 'banana'],
            purple: ['uva', 'moras']
        };
        return fruitsByColor[color] || 'Error: the color must be: red, yellow, purple';
    }

    // Simplificar esta función
    const isFirstStepWorking = true;
    const isSecondStepWorking = true;
    const isThirdStepWorking = true;
    const isFourthStepWorking = true;

    function workingSteps() {
        if (!isFirstStepWorking) return 'First step broken.';
        if (!isSecondStepWorking) return 'Second step broken.';
        if (!isThirdStepWorking) return 'Third step broken.';
        if (!isFourthStepWorking) return 'Fourth step broken.';
        return 'Working properly!';
    }
    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // [ 'manzana', 'cereza', 'ciruela' ]
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // [ 'piña', 'pera', 'banana' ]
    console.log({ purpleFruits: getFruitsByColor('purple') }); // [ 'uva', 'moras' ]
    console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();