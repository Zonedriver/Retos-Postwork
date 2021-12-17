import { reto } from "../reto";

describe('reto function',()=>{
    test('Array Sum', ()=>{
        const input = [1,2,3,4,5]
        const output = 15

        expect(reto(input)).toEqual(output)
    })
}
)

import { compact } from "../compact";

describe('compact function',()=>{
    test('Remove falsy', ()=>{
        const input = [0,1,false,2,'',3]
        const output = [1,2,3]

        expect(compact(input)).toEqual(output)
    })
    test('Error', ()=>{
        expect(()=>{
            compact([])
        }).toThrow()
    })
}
)