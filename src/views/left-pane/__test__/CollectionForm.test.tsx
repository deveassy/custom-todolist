import React from 'react';
import {fireEvent, getByText, render} from '@testing-library/react';
import CollectionForm from '../CollectionForm';

// 1. 1개의 input이 있는가
// 2. input의 change를 감지하는가
// 3. onsubmit 함수가 제대로 실행되며 submit이후에 Input이 비워지는가
// 4. visible값이 true일 때 form이 보여지는가
// 5. visible값이 false가 되면 숨겨지는가

describe("<CollectionForm />", () => {
    const onSubmit:(newCollection:ICollection) => void = jest.fn();
    const getRenderResult = () => (
        render(<CollectionForm onSubmit={onSubmit} visible />)
    );
    // const ref = React.createRef();
    it("should has a input", () => {
         const {getByPlaceholderText} = getRenderResult();
         expect(getByPlaceholderText("")).toBeTruthy();
    });
    it("should be change input value", () => {
        const { getByPlaceholderText} = getRenderResult();
        const input = getByPlaceholderText("");

        fireEvent.change(input, ({
            target: {
                value: "여행 짐 목록",
            }
        }));
        expect(input).toHaveAttribute("value", "여행 짐 목록");
    });
    it("should be calls onSubmit function and clear input after submit", () => {
        const { getByPlaceholderText} = getRenderResult();
        const input = getByPlaceholderText("")
        fireEvent.blur(input)
    })
})