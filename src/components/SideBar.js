import React from 'react'
import Accordian from "./Accordian";
import Filters from "./Filters";

class SideBar extends React.Component {
    render() {
        return (
          <div>
            <Accordian />
            <Filters/>
          </div>
        );
      }
}

export default SideBar;