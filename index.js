const express = require('express');

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));

app.set('views','./views');

app.get('/',(req,res) => res.render('home'));

app.listen(process.env.PORT || 3000,() => console.log('Server started'));