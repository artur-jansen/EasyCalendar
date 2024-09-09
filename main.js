const itensPorDia = JSON.parse(localStorage.getItem('itensPorDia')) || {
    segunda: [],
    terca: [],
    quarta: [],
    quinta: [],
    sexta: [],
    sabado: [],
    domingo: []
};

function salvarNoLocalStorage() {
    localStorage.setItem('itensPorDia', JSON.stringify(itensPorDia));
}

function renderList(dia) {
    const listaItens = document.querySelector(`#lista-${dia}`);
    listaItens.innerHTML = '';

    itensPorDia[dia].forEach(item => {
        const listaItem = document.createElement('li');
        listaItem.classList.add('lista-item');
        listaItem.style.listStyle = 'none';

        const itemText = document.createElement('span');
        itemText.textContent = item.text;

        const divBotoes = document.createElement('div');
        divBotoes.classList.add('container-botoes');

        const botaoDeletar = document.createElement('button');
        botaoDeletar.textContent = '🗑️';
        botaoDeletar.style.backgroundColor = 'transparent';
        botaoDeletar.style.border = 'none';
        botaoDeletar.style.cursor = 'pointer';
        botaoDeletar.onclick = () => {
            const index = itensPorDia[dia].findIndex(i => i.text === item.text);
            if (index !== -1) {
                itensPorDia[dia].splice(index, 1);
                salvarNoLocalStorage();
                renderList(dia);
            }
        };

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = '📝';
        botaoEditar.style.backgroundColor = 'transparent';
        botaoEditar.style.border = 'none';
        botaoEditar.style.cursor = 'pointer';
        botaoEditar.onclick = () => {
            const itemAtualizado = prompt('Edite o item: ', item.text);
            if (itemAtualizado !== null && itemAtualizado.trim() !== '') {
                const itemAtualizadoMaiusculo = itemAtualizado.trim().toUpperCase();
                const index = itensPorDia[dia].findIndex(i => i.text === item.text);
                if (index !== -1 && !itensPorDia[dia].some(i => i.text === itemAtualizadoMaiusculo)) {
                    itensPorDia[dia][index].text = itemAtualizadoMaiusculo;
                    salvarNoLocalStorage();
                    renderList(dia);
                } else if (itensPorDia[dia].some(i => i.text === itemAtualizadoMaiusculo)) {
                    alert('Esse item já está na lista!');
                }
            }
        };

        const botaoChecked = document.createElement('button');
        botaoChecked.textContent = '✅';
        botaoChecked.style.backgroundColor = 'transparent';
        botaoChecked.style.border = 'none';
        botaoChecked.style.cursor = 'pointer';

        const botaoNotChecked = document.createElement('button');
        botaoNotChecked.textContent = '❌';
        botaoNotChecked.style.backgroundColor = 'transparent';
        botaoNotChecked.style.border = 'none';
        botaoNotChecked.style.cursor = 'pointer';

        if (item.checked) {
            listaItem.style.backgroundColor = 'green';
            listaItem.style.color = 'white';
        } else {
            listaItem.style.backgroundColor = 'lightgray';
        }

        botaoChecked.onclick = () => {
            const index = itensPorDia[dia].findIndex(i => i.text === item.text);
            if (index !== -1) {
                itensPorDia[dia][index].checked = true;
                salvarNoLocalStorage();
                renderList(dia);
            }
        };

        botaoNotChecked.onclick = () => {
            const index = itensPorDia[dia].findIndex(i => i.text === item.text);
            if (index !== -1) {
                itensPorDia[dia][index].checked = false;
                salvarNoLocalStorage();
                renderList(dia);
            }
        };

        listaItens.appendChild(listaItem);
        listaItem.appendChild(itemText);
        
        listaItem.appendChild(divBotoes);
        divBotoes.appendChild(botaoDeletar);
        divBotoes.appendChild(botaoEditar);
        divBotoes.appendChild(botaoChecked);
        divBotoes.appendChild(botaoNotChecked);
    });
}

function adicionarTarefa(dia) {
    const itemInput = document.querySelector(`#input-${dia}`);
    const novoItem = itemInput.value.trim().toUpperCase();

    if (novoItem !== '') {
        if (!itensPorDia[dia].some(item => item.text === novoItem)) {
            itensPorDia[dia].push({ text: novoItem, checked: false });
            salvarNoLocalStorage();
            renderList(dia);
            itemInput.value = '';
        } else {
            alert('Esse item já está na lista.');
        }
    } else {
        alert('Por favor, insira um valor no input.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    renderList('segunda');
    renderList('terca');
    renderList('quarta');
    renderList('quinta');
    renderList('sexta');
    renderList('sabado');
    renderList('domingo');
});
