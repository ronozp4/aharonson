import HTMLFlipBook from "react-pageflip";
import React, { forwardRef } from "react";
import "./App.css";
import {Images} from "./assets/Images";

const Page = forwardRef(({ children }, ref) => {
  return (
    <div className="page" ref={ref}>
        <p>{children}</p>
    </div>
  );
});

function App() {
  return (
    <div className="app">
      <HTMLFlipBook
        width={300}
        height={500}
        showCover={true}
        startPage={37}

      >
        <Page>
          <img src={Images[37]} alt="Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[36]} alt="Page 2" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[35]} alt="Page 3" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[34]} alt="Page 4" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[33]} alt="Page 5" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[32]} alt="Back Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[31]} alt="Page 7" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[30]} alt="Page 8" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[29]} alt="Page 9" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[28]} alt="Page 10" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[27]} alt="Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[26]} alt="Page 2" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[25]} alt="Page 3" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[24]} alt="Page 4" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[23]} alt="Page 5" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[22]} alt="Back Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[21]} alt="Page 7" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[20]} alt="Page 8" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[19]} alt="Page 9" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[18]} alt="Page 10" width="300" height="500" />
        </Page>
                <Page>
          <img src={Images[17]} alt="Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[16]} alt="Page 2" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[15]} alt="Page 3" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[14]} alt="Page 4" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[13]} alt="Page 5" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[12]} alt="Back Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[11]} alt="Page 7" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[10]} alt="Page 8" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[9]} alt="Page 9" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[8]} alt="Page 10" width="300" height="500" />
        </Page>
                <Page>
          <img src={Images[7]} alt="Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[6]} alt="Page 2" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[5]} alt="Page 3" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[4]} alt="Page 4" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[3]} alt="Page 5" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[2]} alt="Back Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[1]} alt="Page 7" width="300" height="500" />
        </Page>
        <Page>
          <img src={Images[0]} alt="Page 8" width="300" height="500" />
        </Page>
      </HTMLFlipBook>
    </div>
  );
}
      
    
 
export default App;
