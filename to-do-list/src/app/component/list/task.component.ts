import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ListService} from 'app/services/list-service';


@Component({
    selector: 'app-list',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class ListComponent implements OnInit {
    @Input() displayList: any;
    @Output() public onSelectCheckbox: EventEmitter<any> = new EventEmitter();
    searchText: String = '';
    searchProp: any = 'title';
    searchStatus: any = 0;
    lang: any = 'en';
    hideDropdown = true;
    hideInputElement = false;
    hideDisplayList = false;
    hideArchivedArray = false;
    var: any;
    count = 0;
    i = 0;
    removedArchivedRow = {};
    archivedArray: any[];
    records: Array<any>;
    isDesc: boolean = false;
    column: string = 'TaskId';
    direction: number;
    statuses = [
        {
            en: 'pending',
            es: 'pendiente'
        },
        {
            en: 'completed',
            es: 'terminado'
        },
        {
            en: 'archived',
            es: 'archivado'
        }

    ];

    constructor(private toDoListService: ListService) {
        this.displayList = [];
        this.archivedArray = [];
        toDoListService.getToDoList().subscribe((data) => {
            console.log('Data', data);
        });
    }

    ngOnInit() {
        const self = this;
        this.toDoListService.getToDoList().subscribe(value => {
            console.log('On Init Value List', value.list);

            self.displayList = value.list;
            console.log('On Init Value List length ', self.displayList.length);
            for (let i = self.displayList.length - 1; i >= 0; i--) {
                if (self.displayList[i].status === 2) {
                    self.removedArchivedRow = self.displayList.splice(i, 1);
                    console.log('Removed item', self.removedArchivedRow);
                    self.archivedArray.push(self.removedArchivedRow[0]);
                    self.archivedArray = this.archivedArray.slice();
                    console.log('Pushed item', self.archivedArray);
                }
            }
            console.log('Length', this.displayList.length);
            for (let i = 0; i < this.displayList.length; i++) {
                if (this.displayList[i].status === 0) {
                    this.count = this.count + 1;
                }
            }
            this.onSelectCheckbox.emit(this.count);
            console.log('Status', this.statuses[this.displayList[0].status][this.lang]);
        });
        console.log('lang', this.lang);
        // this.displayList = this.displayList.slice();

    }

    update(evt, list, index) {
        console.log(evt, index, list);
        if (evt) {
            list.status = 1;
            --this.count;
            console.log('update count', this.count);
            this.onSelectCheckbox.emit(this.count);
        } else {
            list.status = 0;
            ++this.count;
            console.log('update count i', this.count);
            this.onSelectCheckbox.emit(this.count);
        }
    }

    onSelectProperty(evt) {
        console.log(evt);
        this.searchProp = evt;
        console.log('Search Value', this.searchProp);
        this.hideDropdown = this.searchProp !== 'status';
        this.hideInputElement = this.searchProp == 'status';

    }

    onSelectStatus(evt) {
        console.log(evt);
        this.searchText = evt;
        console.log('Search Value', this.searchText);
        // console.log('Status Value', this.statuses[this.searchStatus][this.lang]);
        this.hideArchivedArray = (this.searchText === '0') || (this.searchText === '1');
        console.log('To hide', this.hideArchivedArray);
        this.hideDisplayList = this.searchText === '2';
    }

    removedToArchived(i) {
        let addToArchivedArray;
        addToArchivedArray = this.displayList.splice(i, 1);
        addToArchivedArray[0].status = 2;
        this.archivedArray.push(addToArchivedArray[0]);
        this.archivedArray = this.archivedArray.slice();
        --this.count;
    }

    removedToDisplayList(i) {
        let addToDisplayList;
        addToDisplayList = this.archivedArray.splice(i, 1);
        addToDisplayList[0].status = 0;
        this.displayList.push(addToDisplayList[0]);
        this.displayList = this.displayList.slice();
        ++this.count;
    }

    sort(property) {
        this.isDesc = !this.isDesc; //change the direction
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
}
