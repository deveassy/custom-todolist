import {render} from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import CollectionList from "../CollectionList";
import mockCollection from '../../../mocks/collection.json';

describe("<CollectionList />", () => {
    const history = createMemoryHistory();
    const getRenderResult = (items?:ICollection[]) => (
        render(
            <Router history={history}>
                <CollectionList items={items || [mockCollection]} />
            </Router>
        )
    );
    it("should be render component correctly", () => {
        expect(getRenderResult()).toBeTruthy();
        expect(getRenderResult()).toMatchSnapshot();
    });
    it("should be render with given items", () => {
        const {getByRole} = getRenderResult([
            mockCollection, 
            {...mockCollection, id: "different-collection-key"},
        ]);
        expect(getByRole('list').childElementCount).toEqual(2);
    });
})