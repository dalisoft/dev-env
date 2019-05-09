import Controller from './Default';

// HTTP Controller
export default class Controller1 extends Controller {
  get name() {
    return 'Model1'; // This should refer to src/helpers/models/{MODEL_NAME}
  }
  async Hello() {
    const { db /* res, body */ } = this;

    if (await db.getValue({ txt: 'hello' })) {
      return {
        hello: 'world'
      };
    }
    return {
      hello: 'world',
      exists: false
    };
  }
}
