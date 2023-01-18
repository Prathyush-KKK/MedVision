import "./BodyFrame.css";
import React, { useState } from 'react';




function BodyFrame() {
    const [isButtonActive, setIsButtonActive] = useState(false);
  return (
    <>
    <div className="toggle-switch">
                <input type="checkbox" className="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" />
                <label className="toggle-switch-label" for="toggleSwitch">
                    <span className="toggle-switch-inner" onClick={() => setIsButtonActive(!isButtonActive)}/>
                    <span className="toggle-switch-switch" />
                </label>
            </div>

            <style jsx>{`
                .toggle-switch {
                    position: relative;
                    display: inline-block;
                    width: 100px;
                    height: 34px;
                    margin: 2%;
                }

                .toggle-switch-checkbox {
                    display: none;
                }

                .toggle-switch-label {
                    display: block;
                    overflow: hidden;
                    cursor: pointer;
                    border: 2px solid #999999;
                    border-radius: 20px;
                }

                .toggle-switch-inner {
                    display: block;
                    width: 200%;
                    margin-left: -100%;
                    transition: margin 0.3s ease-in 0s;
                }

                .toggle-switch-inner:before, .toggle-switch-inner:after {
                    display: block;
                    float: left;
                    width: 50%;
                    height: 30px;
                    padding: 0;
                    line-height: 30px;
                    font-size: 14px;
                    color: white;
                    font-family: Trebuchet, Arial, sans-serif;
                    font-weight: bold;
                    box-sizing: border-box;
                }

                .toggle-switch-inner:before {
                    content: "Male";
                    padding-left: 10px;
                    background-color: #B2F7EF;
                    color: #52566B;
                }

                .toggle-switch-inner:after {
                    content: "Female";
                    padding-right: 10px;
                    background-color: #F2B5D4;
                    color: #52566B;
                    text-align: right;
                }

                .toggle-switch-switch {
                    display: block;
                    width: 18px;
                    margin: 8px;
                    background: #FFFFFF;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 66px;
                    border: 2px solid #999999;
                    border-radius: 20px;
                    transition: all 0.3s ease-in 0s;
                }

                .toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-inner {
                    margin-left: 0;
                }

                .toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-switch {
                    right: 0px;
                }
            `}</style>
      <div className="bodyFrame">
        <iframe
          title="Human Anatomy"
          id="embedded-man"
          className={`element1 ${isButtonActive ? 'hide' : 'active'}`}
          style={{ aspectRatio: "16 / 9", width: "100%" }}
          allowFullScreen="true"
          loading="lazy"
          src="https://human.biodigital.com/viewer/?id=50yA&ui-anatomy-descriptions=false&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=true&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&dk=45ad5202e0a870e6492a3f19df98336b5c484a58&paid=o_11e5a5db"
        ></iframe>
       </div>

       <div className="bodyFrame">
       <iframe
          title="Human Anatomy"
          id="embedded-woman"
          className={`element1 ${isButtonActive ? 'active' : 'hide'}`}

          style={{ aspectRatio: "16 / 9", width: "100%" }}
          allowFullScreen="true"
          loading="lazy"
          src="https://human.biodigital.com/viewer/?id=50z7&ui-anatomy-descriptions=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=false&ui-info=true&ui-label-list=true&ui-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=true&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&dk=45ad5202e0a870e6492a3f19df98336b5c484a58&paid=o_11e5a5db
          "
        ></iframe>
      </div>

      
    </>

    
  );
}


export default BodyFrame;
