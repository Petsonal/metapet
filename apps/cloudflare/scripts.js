import { Client } from "@neondatabase/serverless"

export default {
  async fetch(request, env, ctx) {
    const client = new Client(env.DATABASE_URL)
    await client.connect()
    const { rows } = await client.query("SELECT * FROM elements")
    ctx.waitUntil(client.end()) // this doesn’t hold up the response

    return new Response(JSON.stringify(rows))
  },
}
