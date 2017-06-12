import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'orderbyID'
})
export class OrderbyIDPipe implements PipeTransform {

    transform(records: Array<any>, args?: any): any {
console.log('args', args, records);
        return records.sort(function(a, b){
            console.log('inside sort', a, b, a[args.property]);
            if (a[args.property] < b[args.property]){
                return -1 ;
            }
            else if( a[args.property] > b[args.property]) {
                return 1 ;
            }
            else{
                return 0;
            }
        });
    };
}

