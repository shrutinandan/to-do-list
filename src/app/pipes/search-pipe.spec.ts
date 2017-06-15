import {SearchPipePipe} from './search-pipe';
import {OrderbyIDPipe} from 'app/pipes/orderby-id.pipe';

describe('SearchPipePipe', () => {
    it('create an instance', () => {
        const pipe = new SearchPipePipe();
        expect(pipe).toBeTruthy();
    });
});
