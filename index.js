const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Mango khabai')
});
const users = [
    { id: 1, name: 'malim', phone: '017888888' },
    { id: 2, name: 'gamis', phone: '017888888' },
    { id: 3, name: 'samish', phone: '017888888' },
    { id: 4, name: 'khamis', phone: '017888888' },
    { id: 5, name: 'famihs', phone: '017888888' },
    { id: 6, name: 'nodirish', phone: '017888888' },
    { id: 7, name: 'pangasmash', phone: '017888888' },
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const mathced = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(mathced);
    }
    else {

        res.send(users);
    }
    console.log('query', req.query)
});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    // const user = users[id];
    res.send(user)
});
app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
});
app.get('/fruits/mango/sweet', (req, res) => {
    res.send('sweet mango is sweet');
});
app.post('/user', (req, res) => {
    console.log('request:', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push();
    res.send(user);
    // res.send('Post method success')
})
app.listen(port, () => {
    console.log('Listening to port', port);
})