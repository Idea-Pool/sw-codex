exports.People = class People {
    get $title() {
        return $('h1');
    }

    get $$rows() {
        return $$('tbody tr');
    }

    get $alert() {
        return $('div[role="alert"]');
    }

    hasAlert() {
        return this.$alert.isExisting() && this.$alert.isDisplayed();
    }

    closeAlert() {
        if (this.hasAlert()) {
            this.$alert.$('button.close').click();
            browser.waitUntil(() => !this.hasAlert(), { timeout: 10e3 });
        }
    }

    waitForAlert() {
        browser.waitUntil(() => this.hasAlert(), { timeout: 10e3 });
    }

    getAlertType() {
        if (!this.hasAlert()) {
            return null;
        }
        const classes = this.$alert.getAttribute('class');
        const m = classes.match(/alert-(danger|success)/);
        return m ? m[1] : null;
    }

    getAlertText() {
        if (!this.hasAlert()) {
            return null;
        }
        return this.$alert.getText();
    }

    getPersonRow(name) {
        return $(`tbody tr[data-test-name="${name}"]`);
    }

    isPersonListed(name) {
        const row = this.getPersonRow(name);
        return row && row.isExisting();
    }

    isFavorited(name) {
        const row = this.getPersonRow(name);
        if (!row || !row.isExisting()) {
            throw new Error(`There is no person like ${name}!`);
        }
        return row.getAttribute('data-test-favorited') === 'true';
    }

    toggleFavorite(name) {
        const star = this.getPersonRow(name).$('svg');
        star.click();
    }

    get $activePage() {
        return $('.page-item.active');
    }

    getCurrentPage() {
        return parseInt(this.$activePage.getText(), 10);
    }

    getPageLink(n) {
        return $(`.page-link=${n}`);
    }

    hasPage(n) {
        const page = this.getPageLink(n);
        return page && page.isExisting();
    }

    getFirstName() {
        return this.$$rows[0].$$('td')[1].getText();
    }

    gotoPage(n) {
        if (this.getCurrentPage() !== n) {
            if (!this.hasPage(n)) {
                throw new Error(`There is no page like ${n}!`);
            }
            const firstName = this.getFirstName();
            this.getPageLink(n).click();
            browser.waitUntil(() => this.getCurrentPage() === n);
            browser.waitUntil(() => this.getFirstName() !== firstName);
        }
    }

    isLoaded() {
        return this.$title.isDisplayed() && this.$$rows.length > 0;
    }

    wait() {
        browser.waitUntil(() => this.isLoaded(), { timeout: 20e3 });
    }

    open() {
        browser.url('/people');
        this.wait();
    }
}