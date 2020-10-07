'use strict'

const express = require('express');

const app = express();

app.listen(300, () => {
    console.log('API REST coerriendo en http://localhost:3000')
})