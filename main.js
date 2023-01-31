function conversor() {
    var bitcoin = document.querySelector('#input').value;
      
    var bitcoinsEmReais = 116164.73;
      
    var real = bitcoinsEmReais * bitcoin;
       
    alert(" Olá, o resultado é  R$ "+ real);
    }  