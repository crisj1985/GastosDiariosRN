 const Gastos = [
     { Id: "1", Ingreso: 1000, Categoria: 'Sueldo', Descripcion: 'Sueldo Empresa' },
     { Id: "2", Ingreso: 200, Categoria: 'Varios', Descripcion: 'Proyectos' }
 ]

 const recuperarGastos = () => Gastos;

 const agregarIngreso = (ingreso) => {
     let indice = buscarIngreso(ingreso);
     if (indice == -1)
         Gastos.push(ingreso);
 }

 const buscarIngreso = (ingreso) => {
     for (var i = 0; i, itemsGastos().length; i++) {
         if (itemsGastos()[i].Id == ingreso.Id)
             return i;
     }
     return -1;


 };


 export { recuperarGastos, agregarIngreso };