import React from 'react'
import SideBar from "./SideBar";
import PersonalCare from "./PersonalCare";

import "./Common.css"

class Content extends React.Component {
    render() {
        return (
          <div className="row" >
              <div className="my-content-left">
                <SideBar />
              </div>
              <div className="my-content-right">
                <PersonalCare/>
              </div>
          </div>
        );
      }
}

export default Content;