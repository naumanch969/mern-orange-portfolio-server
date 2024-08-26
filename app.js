import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send('App is working...')
})

app.listen(4000, ()=>{
    console.log('Listening at port 4000')
})