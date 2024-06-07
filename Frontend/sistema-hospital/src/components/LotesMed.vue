<template>
  <section class="py-4 md:py-1 dark:bg-gray-800 p-8  sm:p-8 ">

    <div
      class="flex flex-col items-center justify-center px-30 py-10 mx-auto  lg:py-0 p-6 space-y-4 md:space-y-6 sm:p-8 my-4">
      <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-20 h-20 mr-8"
          src="https://img.freepik.com/vector-premium/icono-atencion-medica-medica-clinica-edificio-hospital-diseno-colorido_619989-984.jpg?w=826"
          alt="osher.ai logo">
        Hospital Privilage Care
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Lotes Medicamento
          </h1>







          <form class="space-y-4 md:space-y-6" method="POST" action="/auth/login/">

            <div>
              <label for="genero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medicamento</label>
              <select name="generos" id="genero"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">--Selecciona el Medicamento--</option>
                <option value="Hombre">Medicamento 1</option>
                <option value="Mujer">Medicamento 2</option>
                <option value="Otro">Medicamento 3</option>
                <option value="Otro">-----</option>
              </select>
            </div>

            <div>
              <label for="genero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Personal Medico</label>
              <select name="generos" id="genero"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">--Selecciona el Personal Medico--</option>
                <option value="Hombre">Cedula 1</option>
                <option value="Mujer">Cedula 2</option>
                <option value="Otro">Cedula 3</option>
                <option value="Otro">-----</option>
              </select>
            </div>

            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clave</label>
              <input type="text" name="register" id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
              <label for="genero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estatus</label>
              <select name="generos" id="genero"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">--Selecciona el Estatus--</option>
                <option value="Hombre">Reservado</option>
                <option value="Mujer">En transito</option>
                <option value="Otro">Recibido</option>
                <option value="Otro">Rechazado</option>
              </select>
            </div>


            <div>
              <label for="costo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Costo Total</label>
              <input type="number" name="costo" id="costo"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
              <label for="cantidad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad </label>
              <input type="number" name="cantidad" id="cantidad"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>




            <button type="submit" class="text-white bg-teal-600 py-1.5 px-4 rounded font-bold w-full">
              <a href="/inicio">Crear</a>
            </button>






          </form>


        </div>
      </div>
  </div>

</section></template>
  