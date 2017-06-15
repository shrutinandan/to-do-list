import {TestBed, async, inject} from '@angular/core/testing';
import {ListService} from 'app/services/list-service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchPipePipe} from 'app/pipes/search-pipe';
import {OrderbyIDPipe} from 'app/pipes/orderby-id.pipe';
import {Observable} from 'rxjs/observable';


import {AppComponent} from './app.component';
import {ListComponent} from './component/list/task.component';

/*class ListServiceMock {
 public getUsers(): Observable<todolist[]> {
 const list: todolist[] = new Array<todolist>(
 new todolist({
 'taskId': 1,
 'title': 'Get milk',
 'priority': 'High',
 'status': 0,
 'completed': false
 }),
 );

 return Observable.if(todolist);
 }*/
// }
describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [ListService],
            declarations: [
                AppComponent,
                ListComponent,
                SearchPipePipe,
                OrderbyIDPipe
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should have service as List service', inject([ListService], (service: ListService) => {
        expect(service).toBeTruthy();
    }));
    it('should contain total number of pending task', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        const number = app.pendingTaskNumber;
        expect(number).toBeGreaterThanOrEqual(0);
    }));
    // it(`should have as title 'app works!'`, async(() => {

    //   const fixture = TestBed.createComponent(AppComponent);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app.title).toEqual('app works!');
    // }));
    //
    // it('should render title in a h1 tag', async(() => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   fixture.detectChanges();
    //   const compiled = fixture.debugElement.nativeElement;
    //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
    // }));
});
