const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');



app.use((req,res,next)=>{
  var now=new Date().toString();
  console.log(`${now}:${req.method} ${req.url}`);
  next();
});

// app.use((req,res,next)=>{
//   res.render("home.hbs");
// });
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});

hbs.registerHelper('uppercase',(data)=>{
  return data.toLowerCase();
})
app.get('/',(req,res)=>{
  //res.send("<h1>Hello Express!</h1>")
    res.render('home.hbs',{
      msg : 'This is a Home Page'
    });
  });

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle : 'About Page'
  });
});
app.listen(port,()=>{console.log(`Server ready to go on port ${port}`);});
