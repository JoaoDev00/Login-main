// const cep = document.querySelector('#cep');
// const endereco = document.querySelector('#endereco');
// const bairro = document.querySelector('#bairro');
// const cidade = document.querySelector('#cidade');
// const mensagem = document.querySelector('#mensagem');

// cep.addEventListener('focusout', async () => {
//     try {
//         const onlyNumbers = /^[0-9]+$/;
//         const cepValid = /^[0-9]{8}$/;

//         if (!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)) {
//             throw { cep_error: 'CEP inválido' };
//         }

//         const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

//         if (!response.ok) {
//             throw await response.json();
//         }

//         const responseCep = await response.json(); 

//         endereco.value = responseCep.logradouro;
//         bairro.value = responseCep.bairro;
//         cidade.value = responseCep.localidade;

//     } catch (error) {
//         if (error?.cep_error) {
//             mensagem.textContent = error.cep_error; 
//             setTimeout(() => {
//                 mensagem.textContent = '';
//             }, 5000);
//         }
//     }
// })

// document.addEventListener('DOMContentLoaded', () => {
//     const cepInput = document.querySelector('#cep');
//     const enderecoInput = document.querySelector('#endereco');
//     const bairroInput = document.querySelector('#bairro');
//     const cidadeInput = document.querySelector('#cidade');
//     const mensagem = document.querySelector('#mensagem');

//     cepInput.addEventListener('focusout', async () => {
//         try {
//             const onlyNumbers = /^[0-9]+$/;
//             const cepValid = /^[0-9]{8}$/;

//             if (!onlyNumbers.test(cepInput.value) || !cepValid.test(cepInput.value)) {
//                 throw { cep_error: 'CEP inválido' };
//             }

//             const response = await fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`);

//             if (!response.ok) {
//                 throw new Error('Erro ao buscar o CEP');
//             }

//             const responseCep = await response.json();

//             if (responseCep.erro) {
//                 throw { cep_error: 'CEP não encontrado' };
//             }

//             enderecoInput.value = responseCep.logradouro;
//             bairroInput.value = responseCep.bairro;
//             cidadeInput.value = responseCep.localidade;
//             mensagem.textContent = '';

//         } catch (error) {
//             if (error?.cep_error) {
//                 mensagem.textContent = error.cep_error;
//             } else {
//                 mensagem.textContent = 'Erro ao buscar CEP. Tente novamente.';
//             }
//             setTimeout(() => {
//                 mensagem.textContent = '';
//             }, 5000);
//         }
//     });
// });