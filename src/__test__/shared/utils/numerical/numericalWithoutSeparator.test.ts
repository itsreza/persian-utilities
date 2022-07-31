import { numericalWithoutSeparator } from "../../../../../src/shared/utils/numerical/index"

describe('numerical without separator tests', () => { 
    test('should be remove separator from String or Number default argument should be remove `,` separator ', () => { 
        expect(numericalWithoutSeparator("100,000,000")).toBe(100000000)
     })

    test('should be remove separator from String or Number', () => { 
        const entryString = "Hello. i'm Separator Function";
        const correctResult = "Hello i'm Separator Function";
        expect(numericalWithoutSeparator(entryString , ".")).toBe(correctResult)
     })

 })