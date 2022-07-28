import React from "react";
import Tooltip from ".";

const Preview = () => {
  return (
    <>
      <div className="container py-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
          <Tooltip position="bottom" primary tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip position="top" dark tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip position="right" warning tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip position="left" secondary tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip gray tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>

          <Tooltip warning tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip danger tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip dark tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip dark tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip success tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip info tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip dark tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip warning tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip warning tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
          <Tooltip warning tooltipsText="ToolTip Text">
            ToolTip On Top
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Preview;
