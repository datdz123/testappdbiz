import React, { useState } from "react";
import {BottomNavigation, Icon, Page, Text} from "zmp-ui";

const Footer = (props) => {
    const [activeTab, setActiveTab] = useState("chat");
    const { title } = props;
    return (

            <BottomNavigation
                fixed
                activeKey={activeTab}
                onChange={(key) => setActiveTab(key)}

            >
                <BottomNavigation.Item
                    key="chat"
                    label="Trang chủ"
                    icon={<img src="assets-src/image/house-heart-fill.svg" alt="Trang chủ " />}
                    activeIcon={<img src="assets-src/image/house-heart-fill.svg" alt="Trang chủ" />}
                />
                <BottomNavigation.Item
                    label="Khách hàng "
                    key="contact"icon={<img src="assets-src/image/person-lines-fill.svg" alt="T
                    ài khoản" />}
                    activeIcon={<img src="assets-src/image/person-lines-fill.svg" alt="Tài khoản" />}
                />
                <BottomNavigation.Item className={"customRounded"}
                    key="discovery"
                    icon={
                    <div className={"relative flex justify-center"}>

                            <img src="assets-src/image/Rectangle 66.svg" alt="Kích hoạt" />
                            <div className={"absolute top-10 right-19"}>
                                <img src="assets-src/image/VectorQR.svg" alt="Kích hoạt" className={"w-[100%]"} />
                                <Text style={{ fontSize: '10px',
                                             color: '#fff',
                                 }}>Kích hoạt</Text>
                            </div>
                       </div>
                }
                    activeIcon={<img src="assets-src/image/VectorQR.svg" alt="Kích hoạt" />}
               >

                </BottomNavigation.Item>
                <BottomNavigation.Item
                    key="timeline"
                    label="Yêu cầu "
                    icon={<img src="assets-src/image/ui-checks.svg" alt="Yêu cầu " />}
                    activeIcon={<img src="assets-src/image/ui-checks.svg" alt="Yêu cầu" />}
                />
                <BottomNavigation.Item
                    key="me"
                    label="Tài khoản"
                    icon={<img src="assets-src/image/person-badge.svg" alt="Tài khoản" />}
                    activeIcon={<img src="assets-src/image/person-badge.svg" alt="Tài khoản" />}
                />
            </BottomNavigation>

    );
};

export default Footer;
