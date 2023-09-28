// Array para almacenar los productos seleccionados en el carrito
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

// Función para actualizar el carrito en la página
function actualizarCarrito() {
    const carritoContainer = document.querySelector('.carrito ul');
    carritoContainer.innerHTML = '';

    let total = 0;

    carrito.forEach((producto) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoContainer.appendChild(listItem);
        total += producto.precio;
    });

    const totalElement = document.querySelector('.carrito p');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Evento para agregar productos al carrito al hacer clic en el botón
const botonesAgregar = document.querySelectorAll('.agregar-carrito');
botonesAgregar.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const producto = document.querySelectorAll('.producto h2')[index].textContent;
        const precio = parseFloat(document.querySelectorAll('.producto p')[index].textContent.match(/\d+\.\d+/)[0]);
        agregarAlCarrito(producto, precio);
    });
});

// Evento para comprar los productos en el carrito
const botonComprar = document.querySelector('.comprar');
botonComprar.addEventListener('click', () => {
    if (carrito.length > 0) {
        alert('Gracias por tu compra. Total: $' + carrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2));
        carrito.length = 0; // Vaciar el carrito después de la compra
        actualizarCarrito();
    } else {
        alert('El carrito está vacío. Agrega productos antes de comprar.');
    }
});

// Inicializar el carrito
actualizarCarrito();
