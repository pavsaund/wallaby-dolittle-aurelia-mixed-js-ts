import { a_context } from "./given/a_context";

describe('when doing something', () => {
    let context = new a_context();
    it('should do that', () => true.should.be.true)
    it('should have something', () => context.setup_some_stuff.thing.should.equal('string1'))
});