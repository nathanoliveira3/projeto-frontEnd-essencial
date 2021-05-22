const produto = document.querySelector('#produto');
const quantidade = document.querySelector('#quantidade');
const valor = document.querySelector('#valor');
const tipo = document.querySelector('option:checked');
const form = document.querySelector('form');
const tBody = document.querySelector('tbody');

const valorTotal = document.querySelector('#valor-total');

let soma = 0;


form.addEventListener('submit', e => {
    e.preventDefault();

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
    tdTipo.textContent = tipo.innerText;
    tdTotal.textContent = (valor.value) * (quantidade.value); 

    soma += parseFloat(valor.value * quantidade.value);

    const btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = '<i class="far fa-trash-alt"></i>';
    btnExcluir.style.color = 'red';
    btnExcluir.style.backgroundColor = 'white';
    btnExcluir.style.fontWeight = 'bold';
    btnExcluir.classList.add('btn');

    btnExcluir.addEventListener('click', () => {
        console.log(soma -= parseFloat(valor.value * quantidade.value));
        tr.remove();
        valorTotal.textContent = `Valor Total: ${soma}.`;
        if(soma === 0){
            excluir.setAttribute('disabled', 'disabled');
            valorTotal.textContent = '';
        }else{
            excluir.removeAttribute('disabled','disabled');
        }

    })
    
    tr.append(tdProduto);
    tr.append(tdTipo);
    tr.append(tdQuantidade);
    tr.append(tdValor);
    tr.append(tdTotal);

    tr.append(tdBotao);
    tdBotao.append(btnExcluir);

    tBody.append(tr);

    valorTotal.textContent = `Valor Total: ${soma}.`;

    excluir.removeAttribute('disabled','disabled');
    


})

const excluir = document.querySelector('#excluir')

excluir.addEventListener('click', () => {    
    const tr = document.querySelectorAll('tbody tr');   
    tr.forEach((e) => {
        e.remove(); 
        soma -= parseFloat(valor.value * quantidade.value);       
    });
    valorTotal.textContent = '';
    excluir.setAttribute('disabled', 'disabled');
})

/*const somaTotal = () => {
    const valores = document.querySelectorAll('.valor-item');
    let soma = document.createElement('td');
    console.log(valores);
    let acc = 0;
    soma.textContent = valores.forEach(e => console.log(e.value))
    //console.log(acc);
    //tfoot.append(acc);    
}*/


