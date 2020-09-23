const express = require("express")
const path = require('path');//require morgan|volleyball, path packages
const volleyball = require('volleyball') // require morgan or volleyball
const app = express();//initialize app
app.use(express.json()); //use express.json()
app.use(volleyball) // use morgan or volleyball
const { syncAndSeed, Guest, Table, Group } = require('./db/index');//require db from /db
//const { Guest, Table, Group } = require('./db');


//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/server/public', express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, '..', 'public')))

//require in your routes and use them on your api path
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'public','index.html')));
//404 handler


app.get('/api/groups', async(req, res, next)=> {
  try {
    res.send(await Group.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/tables', async(req, res, next)=> {
  try {
    res.send(await Table.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/tables/:group', async(req, res, next)=> {
  try {
    res.send(await Table.findAll({
      where: {
        group: req.params.group
      }
    }))
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/guests', async(req, res, next)=> {
  try {
    res.send(await Guest.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/guests/:group', async(req, res, next)=> {
  try {
    res.send(await Guest.findAll({
      where: {
        group: req.params.group
      }
    }));
  }
  catch(ex){
    next(ex);
  }
});


//500 handler
app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

//set PORT
const port = process.env.PORT || 3000;

//listen
const init = async()=> {
  await syncAndSeed();
  app.listen(port, ()=> console.log(`listening on port ${port}`));
}

init();
