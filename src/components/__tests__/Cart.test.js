import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart";
global.fetch=jest.fn(()=>
     Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA_NAME),
    })
);
it("Should Load Restaurant Menu Component" ,async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
        </Provider>
        </BrowserRouter>);

    })
    const accordianHeader=screen.getByText("Box Biryanis - Big Flavor! (6)");
    fireEvent.click(accordianHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(6);
    expect(screen.getByText("Cart -(0 items)")).toBeInTheDocument();
    const addBtns=screen.getAllByRole("button",{name:"ADD +"});
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart -(1 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(7);
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
    expect(screen.getAllByTestId("foodItems").length).toBe(6);



})