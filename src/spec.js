import { expect } from 'chai';
import  arrayChunk  from './index.js';
describe('arrayChunk Function', () => {
  it('Groups arrays elements when the remainder of the calculated chunk size is one', () => {
    expect(arrayChunk([1, 2, 3, 4, 5], 3)).to.eql([ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]);
  });
  it('Groups arrays elements when the remainder of the calculated chunk size is n', () => {
    expect(arrayChunk([1, 2, 3, 4, 5], 2)).to.eql([ [ 1, 2, 3 ], [ 4, 5 ] ]);
  });
  it('Groups arrays elements when the remainder of the calculated chunk size is 0', () => {
    expect(arrayChunk([1, 2, 3, 4], 2)).to.eql([ [ 1, 2 ], [ 3, 4 ] ]);
  });
});