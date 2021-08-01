import {fireEvent, render} from '@testing-library/react';
import CollectionItem from '../CollectionItem';
import mockCollection from '../../mocks/collection.json';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom';

describe("<CollectionItem />", () => {
    const collection:ICollection = mockCollection;
    const history = createMemoryHistory();
    const getRenderResult = () => (
        render(
            <Router history={history}>
                <CollectionItem item={collection} index={1} />
            </Router>
        )
    );

    it("should be render component correctly", () => {
        expect(getRenderResult()).toBeTruthy();
        expect(getRenderResult()).toMatchSnapshot();
    });
    it("should be render collection's name correctly", () => {
        const {getByText} = getRenderResult();
        expect(getByText(collection.title)).toBeTruthy();
    });
    it("should be update path when a collection clicked", () => {
        const {getByText} = getRenderResult();
        fireEvent.click(getByText(collection.title));
        expect(history.location.pathname).toBe("//collection/1");
    });
});