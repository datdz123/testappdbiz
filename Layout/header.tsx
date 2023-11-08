import React from 'react';
import {Box, Header, Page} from "zmp-ui";

export default function HomePage() {
    return (

          <Header
        statusBar="normal"
        actionBarHidden={false}
        hideAndroidBottomNavigationBar={false}
        hideIOSSafeAreaBottom={false}
        style={{ height: "60px" }}
        className="custom-rounded"
        title="Zalo Mini App"
    />


);
}