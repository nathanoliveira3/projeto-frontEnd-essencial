const produto = document.querySelector('#produto');
const quantidade = document.querySelector('#quantidade');
const valor = document.querySelector('#valor');
const form = document.querySelector('form');
const tBody = document.querySelector('tbody');
const success = document.querySelector('#success');
const alert1 = document.querySelector('#alert1');
const alert2 = document.querySelector('#alert2');

const valorTotal = document.querySelector('#valor-total');

let soma = 0;

form.addEventListener('submit', e => {
    e.preventDefault();    

    const tipo = document.querySelector('option:checked');

    let escolha = tipo.text;

    let tr = document.createElement('tr');
    let tdProduto = document.createElement('td');
    let tdTipo = document.createElement('td');
    let tdQuantidade =  document.createElement('td');
    let tdValor = document.createElement('td');
    let tdTotal = document.createElement('td');
    let tdBotao = document.createElement('td');   
   
    tr.classList.add('text-center','align-middle');
    tdTotal.classList.add('valor-item');

    tdProduto.textContent = produto.value;
    tdQuantidade.textContent = quantidade.value;
    tdValor.textContent = valor.value;
    tdTipo.textContent = escolha.innerText;
    tdTotal.textContent = (valor.value) * (quantidade.value); 

    soma += parseFloat(valor.value * quantidade.value);

    const btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = '<i class="far fa-trash-alt"></i>';
    btnExcluir.style.color = 'red';
    btnExcluir.style.backgroundColor = 'white';
    btnExcluir.style.fontWeight = 'bold';
    btnExcluir.classList.add('btn');

    btnExcluir.addEventListener('click', () => {

        soma -= parseFloat(tdValor.innerText * tdQuantidade.innerText);

        tr.remove();
        valorTotal.textContent = `Valor Total: ${soma}.`;

        alert1.classList.remove('d-none');

        setTimeout( () => alert1.classList.add('d-none'), 2000);

        if(soma === 0){
            excluir.setAttribute('disabled', 'disabled');
            valorTotal.textContent = '';
        }else{
            excluir.removeAttribute('disabled','disabled');
        }

    })
    
    tdTipo.innerText = escolha;

    tr.append(tdProduto);
    tr.append(tdTipo);
    tr.append(tdQuantidade);
    tr.append(tdValor);
    tr.append(tdTotal);

    tr.append(tdBotao);
    tdBotao.append(btnExcluir);

    tBody.append(tr);

    success.classList.remove('d-none');

    setTimeout( () => success.classList.add('d-none'), 2000);

    valorTotal.textContent = `Valor Total: ${soma}.`;

    excluir.removeAttribute('disabled','disabled');

    produto.value = '';
    quantidade.value = '';
    valor.value = '';

})

const excluir = document.querySelector('#excluir')

excluir.addEventListener('click', () => {    
    const tr = document.querySelectorAll('tbody tr');   
    tr.forEach((e) => {
        e.remove(); 
        soma -= parseFloat(valor.value * quantidade.value);       
    });

    valorTotal.textContent = '';

    alert2.classList.remove('d-none');

    setTimeout( () => alert2.classList.add('d-none'), 2000);

    excluir.setAttribute('disabled', 'disabled');
})


