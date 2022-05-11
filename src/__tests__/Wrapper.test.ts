import { Minecraft, Hypixel } from '../index'

test('minecraft', async () => {
    expect(await new Minecraft().getUUID("unhealthiness"));
    expect(await new Minecraft().getUsername("35482c7adf59435eb079d2a955ebaa28"))
});

test('hypixel', async () => {
    expect(await new Hypixel("").playerRank("35482c7adf59435eb079d2a955ebaa28"))
})