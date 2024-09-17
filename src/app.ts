  import express from 'express'

  const app = express()

 // http:localhost:3333/
  app.get('/', (request, response ) => {
    return response.send("hello word")
  })

  app.get('/techs', (request, response ) => {
    return response.send(['HTML', 'CSS', 'Javascript', 'Node', 'React', 'SQL'])
  })

  app.get('/teste', (request, response ) => {
    return response.send("Esse curso esta cada vez mais dificil por outro lado esta cada vez mais top")
  })

  app.listen(3333)