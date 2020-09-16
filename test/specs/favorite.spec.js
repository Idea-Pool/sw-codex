const { People } = require('../pages/People.page');
const { start, stop } = require('../mock');

const testData = [
    { pageN: 1, name: 'R2-D2' },
    { pageN: 2, name: 'Palpatine' },
    { pageN: 4, name: 'Jar Jar Binks' }
]

const MOCK_ENABLED = process.env.MOCK_ENABLED === '1';

describe("Favoriting", () => {
    const page = new People();

    beforeAll(async () => {
        if (MOCK_ENABLED) {
            await start();
        }
    });

    afterAll(async () => {
        if (MOCK_ENABLED) {
            await stop();
        }
    });
    
    beforeAll(() => {
        page.open();
    });

    for (const { pageN, name } of testData) {
        describe(name, () => {

            beforeAll(() => {
                page.gotoPage(pageN);
                page.closeAlert();
            });

            it('should exist', () => {
                expect(page.isPersonListed(name)).toBeTrue();
            });

            it('can be favorited', () => {
                const favorited = page.isFavorited(name);
                expect(favorited).withContext('Initially favorited').toBeFalse();

                if (!favorited) {
                    page.toggleFavorite(name);
                    page.waitForAlert();

                    expect(page.getAlertType()).withContext('Alert type is not correct').toBe('success');
                    expect(page.getAlertText()).withContext('Alert text is not correct').toContain(`Favorited ${name}`);
                }
            });
        });
    }
});