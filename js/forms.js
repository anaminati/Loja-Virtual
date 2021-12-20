let varvalidador = {
	handleSubmit: (event) => {
		event.preventDefault();
		let send = true;
		let inputs = form.querySelectorAll('input');
		varvalidador.clearErrors();
		for (let i=0; i<inputs.length; i++) {
			let input = inputs[i];
			let check = varvalidador.checkInput(input);
			if (check !== true) {
				send = false;
				varvalidador.showError (input, check);
			}
		}
		if (send) {
			form.submit();
		}
	},

	checkInput: (input) => {
		let rules = input.getAttribute ('data-regras');
		if (rules !== null){
			rules = rules.split('|');
			for (let k in rules) {
				let rdetalhes = rules[k].split('=');
				switch (rdetalhes[0]){
					case 'requerido':
						if (input.value == '') {
		                    return 'Esse campo é obrigatório!';
		                }
		            break;

		            case 'min':
						if(input.value.length < rdetalhes[1]) {
							return `Campo deve ter pelo menos ${rdetalhes[1]} caracteres.`;
		            }
		            break;

		            case 'email':
		                if (input.value != '')  {
		                    let regraespe = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
		                if (!regraespe.test(input.value.toLowerCase())){
		                    return 'Informe um e-mail válido.';
		                }
		            	}
		            break;

		            case 'igualdade':
						if (input.value != '') {
							let senha = document.getElementById('senha');
						}
						if (input.value != senha.value) {
							return 'Informe a mesma senha.';
						}
					break;
		        }
		    }
		}
		return true;
	},

	showError: (input, error) => {
		input.style.borderColor = '#FF0000';
		let erroelemento = document.createElement ('div');
		erroelemento.classList.add ('error');
		erroelemento.innerHTML = error;
		input.parentElement.insertBefore (erroelemento, input.ElementSibling);
	},

	clearErrors: () =>{
		let inputs = form.querySelectorAll ('input');
		for(let i = 0; i < inputs.length; i++) {
		    inputs[i].style = '';
		}

		let erroelemento = document.querySelectorAll ('.error');
		for(let i = 0; i < erroelemento.length; i++) {
		    erroelemento [i].remove();
		}
	}
};
let form = document.querySelector ('.validador');
form.addEventListener ('submit', varvalidador.handleSubmit);