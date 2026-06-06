import HTMLFlipBook from "react-pageflip";
import React, { forwardRef } from "react";
import "./App.css";
import {images} from "./assets/images";

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
          <img src={images[37]} alt="Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[36]} alt="Page 2" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[35]} alt="Page 3" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[34]} alt="Page 4" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[33]} alt="Page 5" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[32]} alt="Back Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[31]} alt="Page 7" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[30]} alt="Page 8" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[29]} alt="Page 9" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[28]} alt="Page 10" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[27]} alt="Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[26]} alt="Page 2" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[25]} alt="Page 3" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[24]} alt="Page 4" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[23]} alt="Page 5" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[22]} alt="Back Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[21]} alt="Page 7" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[20]} alt="Page 8" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[19]} alt="Page 9" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[18]} alt="Page 10" width="300" height="500" />
        </Page>
                <Page>
          <img src={images[17]} alt="Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[16]} alt="Page 2" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[15]} alt="Page 3" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[14]} alt="Page 4" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[13]} alt="Page 5" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[12]} alt="Back Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[11]} alt="Page 7" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[10]} alt="Page 8" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[9]} alt="Page 9" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[8]} alt="Page 10" width="300" height="500" />
        </Page>
                <Page>
          <img src={images[7]} alt="Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[6]} alt="Page 2" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[5]} alt="Page 3" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[4]} alt="Page 4" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[3]} alt="Page 5" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[2]} alt="Back Cover" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[1]} alt="Page 7" width="300" height="500" />
        </Page>
        <Page>
          <img src={images[0]} alt="Page 8" width="300" height="500" />
        </Page>
      </HTMLFlipBook>
    </div>
  );
}
      
    
 
export default App;