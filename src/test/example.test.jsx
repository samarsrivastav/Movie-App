import { describe,expect,it } from "vitest";

describe("Example Suite",()=>{
    it("Should Pass",()=>{
        const sum=2+2;
        expect(sum).toEqual(4);
    })
})