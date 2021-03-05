import React, { useEffect, useState } from "react";
import { fromFetch } from "rxjs/fetch";


export default function App() {
    const [displayMessage, setDisplayMessage] = useState("Loading...");

    useEffect(() => {
      }, []);

    return (
        <div>
          <h1>{displayMessage}</h1>
        </div>
      );
    }