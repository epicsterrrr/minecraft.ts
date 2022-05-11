import fetch from 'node-fetch'

export class Minecraft {
    private url = "https://api.mojang.com"

    async getUUID(username: string) {
        const res = await fetch(`${this.url}/users/profiles/minecraft/${username}`)
        const data = await res.json()

        return data.username
    }

    async getUsername(uuid: string) {
        const res = await fetch(` https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`)
        const data = await res.json()

        return data.name
    }
}