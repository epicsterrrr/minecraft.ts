import { Minecraft } from '../index'

test('minecraft', async () => {
    expect(await new Minecraft().getUUID("unhealthiness"));
});