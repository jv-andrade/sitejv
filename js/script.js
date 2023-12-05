
//menu responsivo
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const menuResponsive = document.querySelector('.menu-responsive'); // Selecione a classe correta
    const navLinks = document.querySelectorAll('.headerButtonStyle');

    if (menuIcon && menuResponsive && navLinks.length > 0) {
        menuIcon.addEventListener('click', function () {
            menuResponsive.classList.toggle('show-menu');
        });

        // Adiciona um event listener para cada link do menu
        navLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                // Previne o comportamento padrão do link (não recarrega a página)
                event.preventDefault();

                // Fecha o menu ao clicar em um link
                menuResponsive.classList.remove('show-menu');

                // Obtém o href do link clicado
                const targetPage = link.getAttribute('href');

                // Redireciona para a página correspondente
                window.location.href = targetPage;
            });
        });
    } else {
        console.error('Elementos não encontrados. Verifique os IDs e classes no seu HTML.');
    }
});
//botão whatsapp
WhatsAppIcon.addEventListener('click', function () {
    alert("funciona");
    window.open('/img/socialIcon/whatsapp.png', '_blank');
});

// botoes da section

document.getElementById("buttonGit").addEventListener("click",function(){
    alert("deu certo")
})

document.getElementById("buttonUxui").addEventListener("click",function(){
    window.location.href = "uxui.html"
})

document.getElementById("buttonsobre").addEventListener("click",function(){
    window.location.href = "sobremim.html"
})

document.getElementById("buttonContato").addEventListener("click",function(){
    window.location.href = "entrecontato.html"
})

