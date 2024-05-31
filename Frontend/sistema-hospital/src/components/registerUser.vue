<template>
    <section class="py-4 md:py-40 dark:bg-gray-800 p-8 space-y-10 md:space-y-30 sm:p-8 my-10">

<div class="flex flex-col items-center justify-center px-30 py-30 mx-auto md:h-screen lg:py-0 p-6 space-y-4 md:space-y-6 sm:p-8 my-4">
  <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
    <img class="w-20 h-20 mr-8" src="https://img.freepik.com/vector-premium/icono-atencion-medica-medica-clinica-edificio-hospital-diseno-colorido_619989-984.jpg?w=826" alt="osher.ai logo">
    Hospital Privilage Care
  </a>
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Registar Usuario
      </h1>





      

      <form class="space-y-4 md:space-y-6" method="POST" action="/auth/login/">

        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Completo</label>
          <input type="text" name="register" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
        </div>
        <div>
          <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer Apellido</label>
          <input type="text" name="lastname" id="lastname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
        </div>
        <div>
          <label for="lastname2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo Apellido</label>
          <input type="text" name="lastname2" id="lastname2" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
        </div>
        <div>
          <label for="curp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Curp</label>
          <input type="text" name="curp" id="curp" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
        </div>
        <div>
    <label for="genero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Género</label>
    <select name="generos" id="genero" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">--Selecciona tu genero--</option>
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
        <option value="Otro">Otro</option>
    </select>
</div>


<div>
    <label for="sangre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sangre</label>
    <select name="sangre" id="sangre" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">--Selecciona tu tipo de sangre--</option>
        <option value="tipo1">O+</option>
        <option value="tipo2">O-</option>
        <option value="tipo3">A+</option>
        <option value="tipo4">A-</option>
    </select>
</div>

        <div>
          <label for="fechaNac" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento</label>
          <input type="date" name="fechaNac" id="fechaNac" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
        </div>
        <div>
          <label for="telefono" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono </label>
          <input type="tel" name="telefono" id="telefono" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  >
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Correo Electronico</label>
          <input type="email" name="login" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" >
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800">
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="text-gray-500 dark:text-gray-300">Recordar Sesión</label>
            </div>
          </div>
          
        </div>

        <button type="submit" class="text-white bg-teal-600 py-1.5 px-4 rounded font-bold w-full">
  <a href="/inicio">Registrar</a>
</button>




        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Ya tienes cuenta? <a href="/"
            class="font-medium text-teal-600 hover:underline dark:text-teal-500">Iniciar Sesión</a>
        </p>
      </form>


    </div>
  </div>
</div>

</section>
</template>