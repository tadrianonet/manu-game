export const patients:{id:string;name:string;need:string;steps:string[];tip:string;color:number}[];
export function advance(progress:Record<string,number>,id:string):Record<string,number>;
export function finished(progress:Record<string,number>):boolean;
