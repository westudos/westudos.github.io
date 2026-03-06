// ===== FORMULÁRIO DIRETO PARA WHATSAPP =====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orcamentoForm');
  const mensagem = document.getElementById('mensagem');
  const botao = form.querySelector('button');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const detalhes = form.mensagem.value.trim();

    if (!nome || !telefone || !detalhes) {
      mensagem.textContent = "Por favor, preencha todos os campos!";
      mensagem.style.color = "red";
      return;
    }

    botao.disabled = true;
    botao.textContent = "Redirecionando...";
    mensagem.style.color = "#333";
    mensagem.textContent = "Abrindo WhatsApp...";

    const whatsappUrl = `https://wa.me/5561991839451?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento+com+Gesso+DF.%0A%0ANome%3A+${encodeURIComponent(nome)}%0ATelefone%3A+${encodeURIComponent(telefone)}%0ADetalhes%3A+${encodeURIComponent(detalhes)}%0A%0A*Obs:+Por+favor,+me+informe+sobre+valores,+prazo+e+garantia.*`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      form.reset();
      mensagem.textContent = "";
      botao.disabled = false;
      botao.textContent = "Enviar Orçamento";
    }, 500);
  });
});

// ===== GALERIA INTERATIVA =====
const fotosServicos = { 
  forro: [
    'images/forro1.jpg','images/forro2.jpg','images/forro3.jpg','images/forro4.jpg',
    'images/forro5.jpg','images/forro6.jpg','images/forro7.jpg','images/forro8.jpg',
    'images/forro9.jpg','images/forro10.jpg'
  ],
  sanca: [
    'images/sanca1.jpg','images/sanca2.jpg','images/sanca3.jpg','images/sanca4.jpg',
    'images/sanca5.jpg','images/sanca6.jpg','images/sanca7.jpg','images/sanca8.jpg',
    'images/sanca9.jpg','images/sanca10.jpg'
  ],
  drywall: [
    'images/drywall1.jpg','images/drywall2.jpg','images/drywall3.jpg','images/drywall4.jpg',
    'images/drywall5.jpg','images/drywall6.jpg','images/drywall7.jpg','images/drywall8.jpg',
    'images/drywall9.jpg','images/drywall10.jpg'
  ]
};

const modal = document.getElementById('modalGaleria');
const imagensGaleria = document.getElementById('imagensGaleria');
const btnFechar = document.querySelector('.fechar');

document.querySelectorAll('.servico-card').forEach(card => {
  card.addEventListener('click', () => {
    const tipo = card.dataset.servico;
    imagensGaleria.innerHTML = '';
    fotosServicos[tipo].forEach(url => {
      const div = document.createElement('div');
      div.classList.add('imagem-item');
      div.innerHTML = `
        <img src="${url}" alt="${tipo}">
        <a href="https://wa.me/5561991839451?text=Ol%C3%A1%2C+gostaria+de+mais+informações+sobre+${tipo}" target="_blank" class="whatsapp-btn">WhatsApp</a>
      `;
      imagensGaleria.appendChild(div);
    });
    modal.style.display = 'block';
  });
});

btnFechar.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if(e.target == modal) modal.style.display = 'none'; });