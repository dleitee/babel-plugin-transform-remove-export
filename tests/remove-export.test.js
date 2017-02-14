import { transform } from 'babel-core'
import plugin from '../src/'


const compile = (code) =>  transform(code,  {
  plugins: [plugin],
}).code

const parse = (value) => value.replace(/\t|\n|\r| /g, '')

const expected = parse(`
  function foo() {
    blah();
  }
`)


describe('remove-export-plugin', () => {
  it('export default foo', () => {
    const source = `
      function foo() {
        blah();
      }
      export default foo;
    `
    expect(parse(compile(source))).toBe(expected);
  })

  it('export {foo}', () => {
    const source = `
      function foo() {
        blah();
      }
      export {foo};
    `
    expect(parse(compile(source))).toBe(expected);
  })
})
