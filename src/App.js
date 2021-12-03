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
            {Adata.map((val, index) => {
                return (
                    <Images
                        imgData={val.imgData}
                        altData={val.altData}
                        linkData={val.linkData}
                    />
                );
            })}
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