const { remote } = require('webdriverio');

describe('Image Resizer App', () => {
    let app;

    before(async () => {
        app = await remote({
            capabilities: {
                browserName: '',
                'goog:chromeOptions': {
                    binary: '/Users/cgdhanush/image-resizer-electron/node_modules/electron/dist/Electron',
                    args: ['app=/Users/cgdhanush/image-resizer-electron']  // Path to your Electron app
                }
            }
        });
    });

    it('should open the app and verify the title', async () => {
        const title = await browser.getTitle();
        expect(title).toBe('Image Resizer');
    });

    it('should navigate between windows', async () => {
        // Add navigation tests
    });

    it('should perform UI interactions', async () => {
        // Add UI interaction tests
    });

    after(async () => {
        await app.deleteSession();
    });
});

