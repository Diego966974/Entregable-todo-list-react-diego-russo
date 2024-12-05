import React from 'react';
import { useForm } from '../hooks/useForm'; //hook que maneja el estado del fromulario del componente TodoAdd


//componente para agregar nuevas tareas a lista
export const TodoAdd = ({ handleNewTodo }) => { //declara componente TodoAdd con la prop handleNewTodo(funcion que agrega la nueva tarea)
	
	const { description, onInputChange, onResetForm } = useForm({ // usamos hook useform que devuelve objeto con:
		description: '',                                         //description: valor del campo de texto donde usuario escribe
	}); // onInputChange: funcion que se invoca cada vez que el usuario cambia el valor del campo de entrada.

	
	const onFormSubmit = e => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			alert("La descripción debe tener al menos 2 caracteres1	.");
			return;}

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='¿Qué hay que hacer?'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};

