import appStore from "../../utils/appStore";
import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import  {BrowserRouter}  from "react-router-dom";
test("Should render Header Component with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}> 
            <Header/>
        </Provider>
        </BrowserRouter>
);
const loginButton=screen.getByRole("button",{name:"Login"});//specific button
//const loginButton=screen.getByText("Login");

expect(loginButton).toBeInTheDocument();
})

test("Should render Header Componnet with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
        
    );
    const cartItems=screen.getByText("Cart -(0 items)");
})
//just want to check that cart items is there or not make generalize using regex
test("Should render Header Componnet with a Cart item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
        
    );
    const cartItems=screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})

test("Should change Login Button to Logout on click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
        
    );
    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})

