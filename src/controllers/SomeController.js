import Controller from './Default';

// HTTP Controller
export default class SomeController extends Controller {
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
}
