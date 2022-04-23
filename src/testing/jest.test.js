import { pertambahan, perkalian } from "./penjumlahan"
import { taxDeducation, call } from "./text";

describe("Basic Testing", () => {
    it("Testing konyol true adalah true", () => {
        expect(true).toBe(true);
    })
    
    it("pertambahan", () => {
        expect(1+1).toBe(2);
    })
    
    it("pengurangan", () => {
        expect(3-2).toBe(1);
    })
    
    it("Penjumlahan", () => {
        expect(2 + 1).toBe(3)
        expect(2 * 1).toBe(2)
    })
})

describe("Group Testing Penjumlahan", () => {
    test("Function Pertambahan", () => {
        expect(pertambahan(3, 2)).toBe(5);
        expect(pertambahan(4, 8)).toBe(12);
    })
    
    test("Function Perkalian", () => {
        expect(perkalian(3, 2)).toBe(6);
        expect(perkalian(4, 8)).toBe(32);
    })
})

describe("Group Testing String", () => {
    test.only("Mengetahui gaji bersih dikurangi pajak", () => {
        expect(taxDeducation(10000000)).toBe(`Gaji bersih anda Rp${9000000}`);
    })
    
    test("Menyapa nama", () => {
        expect(call("Vlakas")).toBe("Hello Vlakas");
    })
})


