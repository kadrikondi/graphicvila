import express from 'express'
const app = express()

const port = 7000 || process.env.PORT

app.listen(port, () => {
    console.log(`Server spinned up on port ${port}`)
})

export default app;
