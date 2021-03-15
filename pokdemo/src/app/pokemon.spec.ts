import { Pokemon } from './pokemon';

describe('Pokemon', () => {
  it('should create an instance', () => {
    expect(new Pokemon('0', 'Bulbizarre','')).toBeTruthy();
  });
});
