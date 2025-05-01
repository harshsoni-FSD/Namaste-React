import RestaurantCard from "../RestaurantCard"
import { fireEvent, render,screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
it("Should render RestaurantCard component with props Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name=screen.getByText("KOMBOZZ by Thalappakatti");
    expect(name).toBeInTheDocument();
});
it("Should render RestaurantCard component with promoted label",()=>{
    
})