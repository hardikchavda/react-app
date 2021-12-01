import React from "react";

import "./index.css";
import Heading from "./Heading";
import * as data from "./ES6";
const prgname = "Hardik Chavda";
const img1 = "https://picsum.photos/200";
const img2 = "https://picsum.photos/id/300/200";
const img3 = "https://picsum.photos/id/1026/200";
const link = "http://hardikchavda.in/";

function App() {

    return (<>
        <Heading />
        <h1>Welcome to new Example. By {prgname}</h1>
        <a href={link}>
            <div className="img">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
            </div>
        </a>
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <td>
                        {data.name}
                    </td>
                    <td>
                        {data.address}
                    </td>
                    <td>
                        {data.information()}
                    </td>
                    <td>
                        {data.marks()}
                    </td>
                </tr>
            </tbody>
        </table>
    </>
    );
}

export default App;