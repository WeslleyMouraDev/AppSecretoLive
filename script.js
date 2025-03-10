document.getElementById('copy-button').addEventListener('click', function () {
    const pixKey = document.getElementById('pix-key').textContent;
    navigator.clipboard.writeText(pixKey).then(() => {
        document.getElementById('copy-message').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('copy-message').classList.add('hidden');
        }, 3000);
    });
});

document.getElementById('whatsapp-button').addEventListener('click', function () {
    const whatsappNumber = '5581988771976';
    const message = encodeURIComponent('Olá! Estou enviando o comprovante de pagamento.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
});
