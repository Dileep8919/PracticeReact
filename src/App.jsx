import { useEffect, useState, React } from "react";

function App() {
    let context = React.createContext();
    const [state, setState] = useState(null)
    return (
        <>
            <MyContext.Provider value={'Hello'}>
                <Contact/>
            </MyContext.Provider>
            {/* <button onClick={()=> {
                let msg = confirm("Are you sure want to change state");
                msg ? setState("Dileep"):""
                }}>
            setState
            </button>
            <button onClick={()=>setState("")}>clear</button>
            <p>State is: {state}</p> */}
        </>
    );
}
const Contact = ()=>{
    return(
        <div>
            This is Contact Component
        </div>
    )
}
export default App;