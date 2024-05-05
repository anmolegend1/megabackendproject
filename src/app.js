import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app =express()



//app.use() is used for mounting middlewares on express
app.use(cors())
app.use(express.json({limit:"16KB"}))
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())

export {app}
