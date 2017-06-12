import {Component, OnInit} from '@angular/core';
import {ListService} from './services/list-service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    toDoList: Array<any> = [];
    pendingTaskNumber: number = 0;

    constructor(private jsonDataService: ListService) {
        jsonDataService.getToDoList().subscribe((data) => {
            this.toDoList = data.list;
        });
    }

    ngOnInit() {
        this.jsonDataService.getToDoList().subscribe(value => {
            this.toDoList = value.list;
            console.log('On Init', value);
        });
    }

    selectedCountEvent(event) {
        console.log('Event trigger', event);
        this.pendingTaskNumber = event;
        console.log(event);
    }
}
