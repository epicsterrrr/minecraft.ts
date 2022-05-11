import fetch from 'node-fetch'

export class Minecraft {
    private url = "https://api.mojang.com"

    constructor() {}

    async getUUID(username: string) {
        let res = await fetch(`${this.url}/users/profiles/minecraft/${username}`)
        let data = await res.json()

        return data
    }
}