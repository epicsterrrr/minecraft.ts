import fetch from "node-fetch";

export class Hypixel {
    private key: string
    private url = "https://api.hypixel.net"
    
    constructor(apikey: string) {
        this.key = apikey;

        this.checkApiKey();
    }

    private async checkApiKey() {
        const apikeyRes = await fetch(`${this.url}/key?key=${this.key}`)
        const apikeyData = await apikeyRes.json()
        if (apikeyData.success != true) throw new Error("You have provided an invalid Hypixel API key!")
    }

    async playerRank(uuid: string) {
        const res = await fetch(`${this.url}/player?key=${this.key}&uuid=${uuid}`)
        const data = await res.json()
        const rank = data.player.rank

        return rank;
    }
}