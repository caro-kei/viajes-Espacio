$(document).ready(function () {
  // Manejar el envío del formulario
  $('#pokemonSearchForm').submit(function (event) {
    // Evitar el comportamiento predeterminado del formulario
    event.preventDefault()

    // Obtener el valor del campo de búsqueda
    var searchTerm = $('#pokemonSearchForm input[type=search]').val()

    // Llamada a la API de Pokémon para buscar por nombre
    $.get(
      'https://pokeapi.co/api/v2/pokemon/' + searchTerm.toLowerCase(),
      function (data) {
        // Manejar los datos recibidos
        $('#pokemonInfo').html(
          '<p>Nombre del Pokémon: ' +
            data.name +
            '</p>' +
            '<p>ID del Pokémon: ' +
            data.id +
            '</p>' +
            '<p>Tipos: ' +
            data.types.map((type) => type.type.name).join(', ') +
            '</p>',
        )
      },
    ).fail(function () {
      // Manejar el caso en que no se encuentre el Pokémon
      $('#pokemonInfo').html('<p>No se encontró el Pokémon.</p>')
    })
  })
})
