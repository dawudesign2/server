const express = require('express');
const session = require('express-session');
const app = express();
const port = 7700;


// chemin du dossier public
app.use(express.static('public'));
// recupere le fichier json et le transforme en objet
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// chemin du dossier views
app.get('/', (req, res) => res.sendFile('views/index.html', { root: __dirname }));

app.use((req, res) => {
    res.status(404).sendFile('views/404.html', { root: __dirname });
});

// ecoute le port et affiche le message
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
