class Contato { 
  constructor (nome, telefone) {
    this.id = uuidv4();
    this.nome = nome;
    this.telefone = telefone;
  }
}

class GerenciadorContatos {
  constructor() {
    this.contatos = [];
  }

  adicionarContato(nome, telefone) {
    const contato = new Contato(nome, telefone);
    this.contatos.push(contato);
    console.log('contato adicionado: ', contato);
    this.atualizarLista();
  }

  removerContato(id) {
    this.contatos = this.contatos.filter(contato => contato.id !== id);
    this.atualizarLista();
  }

  atualizarLista() {
    const lista = document.getElementById('contact-list');
    lista.innerHTML = '';

    this.contatos.forEach(contato => {
      const li = document.createElement('li');
      
      const phoneIcon = document.createElement('span');
      phoneIcon.innerHTML = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_67_124)">
                                <path d="M27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27C20.9558 27 27 20.9558 27 13.5Z" fill="#078A85"/>
                                <path d="M17.6337 14.3222L17.2204 14.733C17.2204 14.733 16.2382 15.7096 13.5573 13.0438C10.8763 10.3781 11.8585 9.40153 11.8585 9.40153L12.1187 9.14279C12.7598 8.50541 12.8202 7.48208 12.2609 6.73502L11.1169 5.20683C10.4247 4.28219 9.08707 4.16005 8.29366 4.94895L6.86963 6.36489C6.47622 6.75607 6.21259 7.26314 6.24456 7.82566C6.32635 9.26476 6.97746 12.3611 10.6107 15.9737C14.4636 19.8047 18.0788 19.957 19.5571 19.8191C20.0247 19.7756 20.4314 19.5374 20.7591 19.2116L22.0479 17.9301C22.9179 17.0651 22.6726 15.5821 21.5595 14.977L19.8261 14.0347C19.0952 13.6375 18.2049 13.7541 17.6337 14.3222Z" fill="#E81E4A" stroke="#FBDADA" stroke-width="0.00206452"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_67_124">
                                <rect width="27" height="27" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>`;
      phoneIcon.className = 'phone-icon';

      const contactInfo = document.createElement('div');
      contactInfo.style.display = 'flex';
      contactInfo.style.alignItems = 'center';
      contactInfo.style.flexGrow = '1';
      contactInfo.style.overflow = 'hidden';

      const contactText = document.createElement('span');
      contactText.textContent = `${contato.nome} ~ ${contato.telefone}`;
      contactText.style.marginLeft = '10px';

      const removeIcon = document.createElement('span');
      removeIcon.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2ZM9 16C9 16.3183 9.12643 16.6235 9.35147 16.8485C9.57652 17.0736 9.88174 17.2 10.2 17.2H21.8C22.1183 17.2 22.4235 17.0736 22.6485 16.8485C22.8736 16.6235 23 16.3183 23 16C23 15.6817 22.8736 15.3765 22.6485 15.1515C22.4235 14.9264 22.1183 14.8 21.8 14.8H10.2C10.0424 14.8 9.88637 14.831 9.74078 14.8913C9.59519 14.9517 9.4629 15.04 9.35147 15.1515C9.24004 15.2629 9.15165 15.3952 9.09134 15.5408C9.03104 15.6864 9 15.8424 9 16Z" fill="#E81E4A"/>
                                </svg>  `;
      removeIcon.className = 'remove-filled-icon';

      removeIcon.onclick = () => {
        this.removerContato(contato.id);
        alertaRemover();
      }

      contactInfo.appendChild(phoneIcon);
      contactInfo.appendChild(contactText);
      li.appendChild(contactInfo);
      li.appendChild(removeIcon);
      lista.appendChild(li)

    });

  }

}

//instancia
const gerenciador = new GerenciadorContatos();

function adicionar() {

  const nameInput = document.getElementById('name-item');
  const numberInput = document.getElementById('tel-item');

  const nameText = nameInput.value.trim();
  const numberText = numberInput.value.trim();

  if (nameText == '' || numberText == '') {
    alert("Para prosseguir deve informar os dados nos dois campos!");
  } else {
    
    gerenciador.adicionarContato(nameText, numberText);
    nameInput.value = "";
    numberInput.value = "";

  }
}

function alertaRemover() {
  let alert = document.querySelector(".alert-removed");

  alert.classList.remove('hide');
  alert.classList.add('show');

  setTimeout(() => {
    alert.classList.add("hide");
  }, 1500);
}

function exibirLista() {
  let exibir = document.querySelector(".display-list");

  if (exibir.classList.contains('hide')) {
    exibir.classList.remove('hide');
  } else {
    exibir.classList.add('hide');
  }
}

function formatarTelefone(input) {
  input.value = input.value.replace(/\D/g, ' ');
}