// Asegúrate de colocar este código en el archivo script.js

const neonText = document.getElementById('neonText')

neonText.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e
  const { offsetWidth, offsetHeight } = neonText

  const x = (offsetX / offsetWidth) * 100
  const y = (offsetY / offsetHeight) * 100

  neonText.style.background = `radial-gradient(circle at ${x}% ${y}%, #ff00ff, transparent 50%, #00ff00)`
})

neonText.addEventListener('mouseleave', () => {
  neonText.style.background = '' // Restablecer el fondo al salir del área del texto
})
