import {OrderbyIDPipe} from './orderby-id.pipe';
import {SearchPipePipe} from 'app/pipes/search-pipe';


describe('OrderbyIDPipe', () => {
    it('create an instance', () => {
        const pipe = new OrderbyIDPipe();
        expect(pipe).toBeTruthy();
    });
});
