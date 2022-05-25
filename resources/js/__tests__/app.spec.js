import App from "~/layouts/App";

describe('App', () => {

    it('has sep', () => {
        expect(typeof App.setup()).toBe('object')
    })
});


