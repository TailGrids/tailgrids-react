import React from "react";
import Button from "../Buttons";

const Preview = () => {
  return (
    <>
      <div className="container">
        <div className="space-x-4 space-y-6">
          <Button label="Get Started" />
          <Button color="secondary" label="Get Started" />
          <Button color="dark" label="Get Started" />
          {/*  */}
          <Button roundedLg label="Get Started" />
          <Button roundedLg color="secondary" label="Get Started" />
          <Button roundedLg color="dark" label="Get Started" />
          {/*  */}
          <Button roundedFull label="Get Started" />
          <Button roundedFull color="secondary" label="Get Started" />
          <Button roundedFull color="dark" label="Get Started" />
          {/*  */}
          <Button outline danger roundedLg label="Get Started" />
          <Button
            outline
            info
            roundedLg
            color="secondary"
            label="Get Started"
          />
          <Button outline warning roundedLg color="dark" label="Get Started" />
          {/*  */}
          <Button outline danger roundedFull label="Get Started" />
          <Button
            outline
            info
            roundedFull
            color="secondary"
            label="Get Started"
          />
          <Button
            outline
            warning
            roundedFull
            color="dark"
            label="Get Started"
          />
        </div>
      </div>
    </>
  );
};

export default Preview;
