const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const PORT = 3000;
const HOST = 'localhost';
const app = express();

app.use(express.static('static'));
app.use(urlencoded({extended:true}));

app.get('/', (request, response) => {
    const pathToFile = path.join(__dirname, 'static', 'html', 'index.html');
    response.sendFile(pathToFile);
});

app.post('/process-form', (request, response) => {
    const user = request.body;
    console.log(`First name: ${user.firstName}`);
    console.log(`Last name: ${user.lastName}`);
    console.log(`Birth date: ${user.birthday}`);
    console.log(`Email: ${user.email}`);

    response.status(200).send('Form data successfully submitted');
});

const server = app.listen(PORT, () => {
    console.log(`Servidor web rodando em http://${HOST}:${PORT}`);
});