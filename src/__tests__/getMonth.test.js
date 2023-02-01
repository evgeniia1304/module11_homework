import { getMonth } from "../getMonth";

describe("Test for getMonth function", ()=>{
    it("Checking the correctness of the entered number", () => {
        expect(getMonth(4)).toBe('апрель');
        expect(getMonth('Не число')).toBe('Ошибка. Должно быть число');
        expect(getMonth(45)).toBe('Число не попадает в диапазон');
    })
})