const botToken = '6268753758:AAFV9rRiZsgNItf1Ydd09dst-bOabKytHlQ';
const chatId = '077802193';

function sendTelegram() {
    const form = document.getElementById('main-form');
    let message = '❗<b>Новые данные</b>\n\n';

    form.querySelectorAll('textarea').forEach((textarea, index) => {
        const answer = textarea.value.trim();
        const question = questions[index];
    
        message += `<b>${question}</b>\n<i>- ${answer}</i>\n\n`;
    });

    const encodedMessage = encodeURIComponent(message);

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodedMessage}`);
};