import React from "react";

import "./index.css";
import Heading from "./Heading";
import * as data from "./ES6";
import Images from "./Images";
import sdata from "./Sdata"

const prgname = "Er. Hardik Chavda";

function App() {

    return (<>
        <Heading />
        <h1>Welcome to new Example. By {prgname}</h1>
        <div className="img">
            <Images
                imgData={sdata[0].imgData}
                altData={sdata[0].altData}
                linkData={sdata[0].linkData}
            />
            <Images
                imgData={sdata[1].imgData}
                altData={sdata[1].altData}
                linkData={sdata[1].linkData}
            />
            <Images
                imgData={sdata[2].imgData}
                altData={sdata[2].altData}
                linkData={sdata[2].linkData}
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