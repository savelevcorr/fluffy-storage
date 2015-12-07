import assert from 'assert';
import jsDom from 'mocha-jsdom';

import FS from '../src/js/app.js';

let fs = new FS();

before(() => {

});

describe('FLuffy Storage >', () => {
  it('it should be instance of FS class', () => {
    assert.equal(fs instanceof FS, true);
  });
});
