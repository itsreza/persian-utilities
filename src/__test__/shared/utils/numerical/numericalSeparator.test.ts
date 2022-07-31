import { numericalSeparator } from "../../../../../src/shared/utils/numerical/index"

describe('Numerical Separator Utilities', () => { 
    test("numerical separator should be separated per 3 character and separate with `,` by default without any options" , ()=>{
       const separatedNumber =  numericalSeparator("100000")
       expect(separatedNumber).toBe("100,000")
    })

    test("numerical separatedLength Option Test" , ()=>{
        const separatedNumber =  numericalSeparator("100000" , 2)
        expect(separatedNumber).toBe("10,00,00")
     })


     test("numerical separator Option Test" , ()=>{
        const separatedNumber =  numericalSeparator("100000" , 3 , "Hello")
        expect(separatedNumber).toBe("100Hello000")
     })

     test("numerical All Options Test" , ()=>{
        const separatedNumber =  numericalSeparator("100000" , 3 , "Hello")
        expect(separatedNumber).toBe("100Hello000")
     })

     test("numerical All Options with String" , ()=>{
        const separatedNumber =  numericalSeparator("Hiiiiii" , 3 , "Hello")
        expect(separatedNumber).toBe("HHelloiiiHelloiii")
     })

 })