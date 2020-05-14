import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const env:{PORT: number, HOST: string} = Deno.env.toObject()
const HOST:string = env.HOST || '127.0.0.1'
const PORT:number = env.PORT || 7700

const router = new Router()

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())
console.log(`Listening on port ${PORT}...`)
await app.listen(`${HOST}:${PORT}`)
