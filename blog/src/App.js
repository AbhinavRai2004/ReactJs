// import logo from './logo.svg';
// import './App.css';


// event-function.

// function App() {
//     let data = "anil sidhu";

//     function apple() {
//         data = "peter";
//         alert(data);
//     }
//     return ( <
//         div className = "App" >
//         <
//         h1 > { data } < /h1> <
//         button onClick = { apple } > Click Me < /button> < /
//         div >
//     );
// }
// export default App;



// State in functional component in reactjs.


// import { useState } from 'react'
// import logo from './logo.svg';
// import './App.css';

// function App() {
//     const [data, setData] = useState(0)

//     function updateData() {
//         setData(data + 1)

//     }
//     console.warn("______");
//     return ( <
//         div className = "App" >
//         <
//         h1 > { data } < /h1> <
//         button onClick = { updateData } > Update Data < /button> < /
//         div >
//     );
// }

// export default App;


// props in functional component in react.

import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Student from './Student'

function App() {
    const [name, setName] = useState("Abhinav")

    function apple() {
        alert("hello")
    }
    return ( <
            div className = "App" >
            <
            h1 > Props in React: ) < /h1>  <
        Student name = { name }
    /> <
    button onClick = {
            () => { setName("Rai") } } > Update Name < /button> <
        /div >
);
}

export default App;