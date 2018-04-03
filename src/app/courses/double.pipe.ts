import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    'name': 'DoubleNumber'
})
export class DoubleNumber implements PipeTransform {
    transform(value: any, args?: any) {
        let newValue = value;
        if (value > 0) {
            newValue = value * 2;
        }

        return newValue;
    }
}
