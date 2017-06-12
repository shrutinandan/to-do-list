import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'search',
    pure: false
})
@Injectable()
export class SearchPipePipe implements PipeTransform {
    transform(data: any, searchText: any, prop: string): any {
        searchText = searchText.toLowerCase();
        if (searchText == null || searchText === '') {
            return data;
        }

        return data.filter(function (dataList) {
            return dataList[prop].toString().toLowerCase().indexOf(searchText) !== -1;
        });
    }
}


