import React from "react";

import "./index.css";
import Heading from "./Heading";
import * as data from "./ES6";
const prgname = "Er. Hardik Chavda";
const link = "http://hardikchavda.in/";

function Images(props) {
    return (
        <a href={link}>
            <img src={props.imgData} alt={props.altData} />
        </a>
    );
}

function App() {

    return (<>
        <Heading />
        <h1>Welcome to new Example. By {prgname}</h1>
        <div className="img">
            <Images imgData="https://picsum.photos/200"
                altData="random"
            />
            <Images imgData="https://picsum.photos/id/300/200"
                altData="Fixed Id:300"
            />
            <Images imgData="https://picsum.photos/id/1026/200"
                altData="Fixed Id:1026"
            />
        </div>
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