

describe('Számítás tesztelése', () => {
    it('Lap1: l: 2, i: 2.83', () => {
        let actual = calcDiagonal(2);
        let expected = 2.83;
        expect(actual).toBeCloseTo(expected, 0.09);
    });
    it('Lap2: l: 4, i: 5.66', () => {
        let actual = calcDiagonal(4);
        let expected = 5.66;
        expect(actual).toBeCloseTo(expected, 0.09);
    });
    it('Test: l: 02, i: 3.46', () => {
        let actual = calcBodyDiagonal();
        let expected = 3.46;
        expect(actual).toBeCloseTo(expected, 0.09);
    });
    it('Test2: l: 4, i: 6.93', () => {
        let actual = calcBodyDiagonal(0);
        let expected = 6.93;
        expect(actual).toBeCloseTo(expected, 0.09);
    });
});