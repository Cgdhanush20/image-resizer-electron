const { remote } = require('webdriverio');

describe('Image Resizer App', () => {
    let app;

    before(async () => {
        app = await remote({
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    binary: '/Users/cgdhanush/image-resizer-electron/node_modules/electron/dist/Electron', // Path to Electron binary
                    args: ['app=/Users/cgdhanush/image-resizer-electron/Electron.app/Contents/MacOS/Electron']  // Path to Electron app
                }
            }
        });
    });

    it('should open the app', async () => {
        const title = await browser.getTitle();
        expect(title).toBe('Image Resizer');
    });

    it('should navigate between windows', async () => {
        // Example navigation test: click a button to open a new window
        const openButton = await $('#open-new-window');
        await openButton.click();

        const windows = await browser.getWindowHandles();
        expect(windows.length).toBeGreaterThan(1);

        // Switch to the new window
        await browser.switchToWindow(windows[1]);
        const newWindowTitle = await browser.getTitle();
        expect(newWindowTitle).toBe('New Window');
    });

    it('should perform UI interactions', async () => {
        // Example UI interaction test: fill out a form and submit it
        const inputField = await $('#input-field');
        await inputField.setValue('Test input');

        const submitButton = await $('#submit-button');
        await submitButton.click();

        // Verify the form submission result
        const result = await $('#result');
        const resultText = await result.getText();
        expect(resultText).toBe('Submission successful');
    });

    after(async () => {
        await app.deleteSession();
    });
});

