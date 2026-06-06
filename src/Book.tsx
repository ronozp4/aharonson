import HTMLFlipBook from "react-pageflip";
import "./Book.css";

function Page({ number, title, children }) {
  return (
    <div className="page">
      <div className="page-content">
        <h2>{title}</h2>
        <div className="page-number">{number}</div>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function Book() {
  return (
    <HTMLFlipBook
        width={500}
        height={700}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        startPage={7}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        className=""
        style={{}}
        >
      <Page number="Cover" title="The Lorem Ipsum Book">
        A beautiful page-flipping React demo.
      </Page>

      <Page number="1" title="Chapter One">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </Page>

      <Page number="2" title="The Journey">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Page>

      <Page number="3" title="Ancient Tales">
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
        varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
        magna felis sollicitudin mauris.
      </Page>

      <Page number="4" title="The Forest">
        Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus
        vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.
      </Page>

      <Page number="5" title="Final Thoughts">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante.
      </Page>

      <Page number="Back" title="The End">
        Thank you for reading.
      </Page>
    </HTMLFlipBook>
  );
}