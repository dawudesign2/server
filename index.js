const express = require('express');
const session = require('express-session');
const route = require('./src/routes/index');
const path = require('path');
const app = express();
const port = 7700;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
// chemin du dossier public
app.use(express.static('public'));
// recupere le fichier json et le transforme en objet
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route );
app.use((req, res) => res.status(404).render('404'));

// ecoute le port et affiche le message
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
