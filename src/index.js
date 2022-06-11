const mongoose = require('mongoose');
const User = require('./models/user');

const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/project', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connected to MongoDB');
        /* 
        // Création d'un utilisateur
        const userOne = new User({ 
            name: 'Dawudesign',
            email: 'contact@dawudesign.fr',
            password: 'dawudesign'
         });
        // Sauvegarde de l'utilisateur
        await userOne.save(); 

        // Création d'un utilisateur
        const userTwo = User.create({
            name: 'Dawudesign',
            email: 'contact@dawudesign.fr',
            password: 'dawudesign'
        });
        */

        //mongoose.connection.close();
        //mongoose.disconnect();

    } catch (err) {
        console.error(err);
    }        

}

main();