import { formatJobList, formatQueryParams } from ".";

describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
      expect(formatJobList('item2', 3, 1)).toEqual('item2,')
  })

  it('should not add a comma to the last element of the list', () => {
      expect(formatJobList('item3', 3, 2)).toEqual('item3')
  })
})

describe('The formatQueryParams function', () => {
  it('should use the right format for param', () => {
    expect(formatQueryParams({ 1: 'answer1' })).toEqual('a1=answer1')
  })
  it('should concatenate params with an &', () => {
    expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual('a1=answer1&a2=answer2')
  })
})