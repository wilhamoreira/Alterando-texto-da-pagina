function atualizar(){

    const texto = document.querySelector('h1')
    const input = document.querySelector('input')

    if (input.value == ''){        
        texto.textContent = 'Escreva algo'    
    }else{
        texto.textContent = input.value
        input.textContent = input.value = ''
    }
    
    
}

