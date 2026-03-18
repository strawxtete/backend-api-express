//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import publiRouter from './routers/publiRouter.js'

const app = express()
const port = 3000

app.use(express.json()) // Middleware para parsear JSON no corpo das requisições

app.get('/', (req, res) => {
  res.send('Olá Mundo Express API!')
})

app.use('/user', userRouter)
app.use('/publi', publiRouter)
 
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})