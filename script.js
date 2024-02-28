function changeSection(sectionId) {
    // Esconde todas as seções
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => secao.classList.remove('secao-visivel'));
    
    // Mostra a seção desejada
    const secaoVisivel = document.getElementById(sectionId);
    secaoVisivel.classList.add('secao-visivel');
  }
  
  function adicionarAoCarrinho(nomeProduto, precoProduto) {
    // Lógica para adicionar o produto ao carrinho
    console.log(`Produto adicionado ao carrinho: ${nomeProduto} - R$ ${precoProduto}`);
  }
  
  function enviarMensagem() {
    // Lógica para enviar a mensagem do formulário
    alert('Mensagem enviada com sucesso!');
  }
  