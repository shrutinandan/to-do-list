import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListComponent} from './task.component';
import {ListService} from '../../services/list-service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {OrderbyIDPipe} from '../../pipes/orderby-id.pipe';
import {SearchPipePipe} from '../../pipes/search-pipe';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListComponent,
                SearchPipePipe,
                OrderbyIDPipe],
            providers: [ListService],
            imports: [
                HttpModule,
                FormsModule,
                ReactiveFormsModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
