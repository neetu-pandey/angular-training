import * as fromCounter\Counter from './counter\counter.actions';

describe('loadCounter\Counters', () => {
  it('should return an action', () => {
    expect(fromCounter\Counter.loadCounter\Counters().type).toBe('[Counter\Counter] Load Counter\Counters');
  });
});
