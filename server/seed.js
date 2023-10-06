const db = require('./models');

const users =[
    {username: 'username',password: 'password'},
    {username: 'username',password: 'password'}
]

const polls = [
    {
        question:'Which is the best Javascript framework',
        options : ['Angular','React','VueJS']
    },

    {question:'Who is the best mutant', options:['wolverine','Deadpool']},
    {question:'Truth or Dare', options:['Truth','Dare']},
    {question:'Boolean?', options:['True','False']}
];