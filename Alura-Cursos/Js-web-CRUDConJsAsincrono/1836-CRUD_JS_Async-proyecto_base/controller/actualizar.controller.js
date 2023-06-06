import { clientServices } from '../service/client-service.js';

const formulario = document.querySelector('[data-form]');

const obtenerInformacion = async () => {
	const Url = new URL(window.location);
	const id = Url.searchParams.get('id');

	if (id === null) {
		window.location.href = '/screens/error.html';
	}

	const nombre = document.querySelector('[data-nombre]');
	const email = document.querySelector('[data-email]');

	try {
		const perfil = await clientServices.detalleCliente(id);
		if (perfil.nombre && perfil.email) {
			nombre.value = perfil.nombre;
			email.value = perfil.email;
		} else {
			throw new Error();
		}
	} catch (error) {
		window.location.href = '../screens/error.html';
		alert('Lo sentimos hubo un error');
	}
};

obtenerInformacion();

formulario.addEventListener('submit', async (evento) => {
	evento.preventDefault();
	const Url = new URL(window.location);
	const id = Url.searchParams.get('id');

	const nombre = document.querySelector('[data-nombre]').value;
	const email = document.querySelector('[data-email]').value;

	try {
		const actualizar = await clientServices.actualizarCliente(
			nombre,
			email,
			id
		);
		window.location.href = '../screens/edicion_concluida.html';
	} catch (error) {}
});
