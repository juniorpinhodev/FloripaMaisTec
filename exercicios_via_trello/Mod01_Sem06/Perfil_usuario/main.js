function mostrarMensagem() {
    alert('Bem-vindo(a) ao Perfil do Usuário!');
}
mostrarMensagem();

const tituloPerfil = document.querySelector('.perfil-usuario h2');
tituloPerfil.style.color = 'blue';

function handleButtonActions() {
    const editButton = document.querySelector('.botao.editar');
    const passwordButton = document.querySelector('.botao.senha');
  
    editButton.addEventListener('click', () => {
      // Ação para editar o perfil
      alert('Clicou em Editar Perfil!');
    });
  
    passwordButton.addEventListener('click', () => {
      // Ação para alterar a senha
      alert('Clicou em Alterar Senha!');
    });
  }
  
  handleButtonActions();
  

