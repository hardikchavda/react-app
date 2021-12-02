import React from "react";

import "./index.css";
import Heading from "./Heading";
import * as data from "./ES6";
import Images from "./Images";
import Adata from "./Sdata"

const prgname = "Er. Hardik Chavda";

function App() {

    return (<>
        <Heading />
        <h1>Welcome to new Example. By {prgname}</h1>
        <div className="img">
            <Images
                imgData={Adata[0].imgData}
                altData={Adata[0].altData}
                linkData={Adata[0].linkData}
            />
            <Images
                imgData={Adata[1].imgData}
                altData={Adata[1].altData}
                linkData={Adata[1].linkData}
            />
            <Images
                imgData={Adata[2].imgData}
                altData={Adata[2].altData}
                linkData={Adata[2].linkData}
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