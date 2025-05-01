import Contact from "../Contact"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases",()=>{
    // afterAll(()=>{
    //     console.log("After All");
    // })
    // afterEach(()=>{
    //     console.log("After Each");
    // })
    // beforeAll(()=>{
    //     console.log("Before All");
    // })
    // beforeEach(()=>{
    //     console.log("BeforeEach");
    // })
    test("Should load contact us component",()=>{
        //render the component on JSDOM
        render(<Contact/>);
    
        const heading=screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
        
    })
})


it("Should load button inside Contact component",()=>{
    render(<Contact/>);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("Should load input name inside Contact component",()=>{
    render(<Contact/>);

    const inputName=screen.getByPlaceholderText("name");
    //Assertion
    expect(inputName).toBeInTheDocument();
})

test("Should load 2 input boxes on the contect component",()=>{
    render(<Contact/>);
    //Querying
    const inputboxes=screen.getAllByRole("textbox");
    console.log(inputboxes.length);
    //Assertion
    expect(inputboxes.length).toBe(2);
})