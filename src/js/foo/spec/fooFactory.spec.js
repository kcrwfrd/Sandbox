import fooFactory from '../fooFactory'

describe('fooFactory:', () => {
  it('Should return foo.', () => {
    expect(fooFactory.getFoo()).toBe('foo')
  })
})
