import Controller from './Default';

// HTTP Controller
module.exports = class SomeController extends Controller {
  get name() {
    return 'SomeController';
  }
  async Hello() {
    const { db /* res, body */ } = this;

    if (await db.getOne({ txt: 'hello' })) {
      return {
        hello: 'world'
      };
    }
  }
};
