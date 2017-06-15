import {TestBed, inject} from '@angular/core/testing';

import {ListService} from './list-service';
import {HttpModule} from '@angular/http';

describe('ListService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [ListService]
        });
    });

    it('should be created', inject([ListService], (service: ListService) => {
        expect(service).toBeTruthy();
    }));
});
