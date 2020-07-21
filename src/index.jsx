import React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-dom';

import { history } from './_helpers';
import { accountService } from './_services';
import { App } from './app';

import './styles.less';

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

// setup real backend
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://danteharasz@gmail.com:KHsykCcW8VRrnRg@emailsignup.xvh2f.mongodb.net/EmailSignUp?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// attempt silent token refresh before startup
accountService.refreshToken().finally(startApp);

function startApp() { 
    render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('app')
    );
}