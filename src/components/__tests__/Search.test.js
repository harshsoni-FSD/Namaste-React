import Body from "../Body";
import {fireEvent, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../components/mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
}) 
test("Should Search Res List for burger text input",async ()=>{
   await act(async()=> render(
   <BrowserRouter><Body/></BrowserRouter>));
   const cardsBeforeSearch=screen.getAllByTestId("resCard");
   expect(cardsBeforeSearch.length).toBe(7);
   const searchBtn=screen.getByRole("button",{name:"Search"});
   const searchInput=screen.getByTestId("searchInput");
   fireEvent.change(searchInput,{target:{value:"Thala"}});
   fireEvent.click(searchBtn);
   //screen should load 2 cards
   const cardsAfterSearch=screen.getAllByTestId("resCard");
   expect(cardsAfterSearch.length).toBe(2);
})
it("Should Filter TopRatedRestaurant",async ()=>{
    await act(async()=>
        render(
            <BrowserRouter>
             <Body/>
            </BrowserRouter>
           
        )
    );
        const cardsBeforeFilter=screen.getAllByTestId("resCard");
        expect(cardsBeforeFilter.length).toBe(7);

        const topRatedbtn=screen.getByRole("button",{name:"Top Rated Restaurants"});
        fireEvent.click(topRatedbtn);
        const cardsAfterFilter=screen.getAllByTestId("resCard");
        expect(cardsAfterFilter.length).toBe(1);


    })
  