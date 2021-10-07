import { ArithmeticCalculator } from "./arithmeticCalculator";

describe('testing arithmetic calculator' , () => {

    it('should be able to add two numbers ', () => {
        var arithmeticCalculator = new ArithmeticCalculator();
        expect(arithmeticCalculator.sum(66,4)).toEqual(70);
    });
});