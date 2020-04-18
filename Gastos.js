 const Gastos = [
     { Id: 1, Ingreso: 1000, Categoria: 'Sueldo', Descripcion: 'Sueldo Empresa' },
     { Id: 2, Ingreso: 200, Categoria: 'Varios', Descripcion: 'Proyectos' }
 ]

 const recuperarGastos = () => Gastos;

 const agregarIngreso = (ingreso) => {
     ingreso.Id = (isNaN(ingreso.Id) ? Gastos.length + 1 : ingreso.Id);
     let indice = buscarIngreso(ingreso);
     if (indice == -1)
         Gastos.push(ingreso);
     else {
         Gastos[indice].Ingreso = ingreso.Ingreso;
         Gastos[indice].Categoria = ingreso.Categoria;
         Gastos[indice].Descripcion = ingreso.Descripcion;
     }



 }

 const buscarIngreso = (ingreso) => {
     for (var i = 0; i < Gastos.length; i++) {
         if (Gastos[i].Id == ingreso.Id)
             return i;
     }
     return -1;
 };

 //  const actualizarIngreso = (ingreso) => {
 //      let indice = buscarIngreso(ingreso);
 //      if (indice != -1) {
 //          Gastos[indice].Ingreso = ingreso.Ingreso;
 //          Gastos[indice].Categoria = ingreso.Categoria;
 //          Gastos[indice].Descripcion = ingreso.Descripcion;
 //      }
 //  }


 export { recuperarGastos, agregarIngreso };