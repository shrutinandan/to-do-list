import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {
    getData: any;

    constructor(private http: Http) {
        const self = this;
        this.http.get('/assets/data/todolist.json').subscribe(function (data) {
            self.getData = data.json();
        });
    }

    getToDoList() {
        return this.http.get('/assets/data/todolist.json')
            .map((res: Response) => res.json());
    }
}


