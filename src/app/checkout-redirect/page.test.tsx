import {render} from "@testing-library/react";
import Page from "./page";
import {screen} from "@testing-library/react";

jest.mock('../../hooks/useUser', () => ({
    useUser: jest.fn(() => ({
        foo: 'bar2'
    }))
}))

describe('page', () => {



    it('renders', () => {

        // jest.mock('../../hooks/useUser', () => {
        //     return {
        //         // ...jest.requireActual('../../hooks/useUser'),
        //         // useUser: jest.fn().mockReturnValue({
        //         //     foo: 'test'
        //         // })
        //         foo: 'bar2'
        //     }
        // })

        // jest.mock('../../hooks/useUser', () => ({
        //     __esModule: true,
        //     foo: 'bar2'
        // }))

        // jest.spyOn(hooks, 'useUser').mockReturnValue({foo: 'test'})

        render(<Page/>)
        expect(screen.getByText('bar2')).toBeVisible()


    })

})