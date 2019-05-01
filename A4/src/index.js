const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor no ar na porta ${port}`)
})

const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'minha_super_senha'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('minha_super_senha', hashedPassword)
    console.log(isMatch)
}

// myFunction()

const jwt = require('jsonwebtoken')

const myFunction2 = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'esse_eh_um_token', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'esse_eh_um_token')
    console.log(data)
}

myFunction2()