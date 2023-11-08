import React from 'react';
import {Box, Button, Sheet, Page, Text, useNavigate, Icon} from "zmp-ui";
function PopupDangky1({visible,onClose}) {
    const [actionSheetOpened, setActionSheetOpened] = React.useState(false);
    const  navigate = useNavigate();
    const navigateToLoginForm = () => {
        navigate('/Loginform');
    };
    return (

        <Sheet
            visible={visible}
            onClose ={onClose}
            mask
            handler
            swipeToClose
        >
            <Box className={"relative"}>
                <Box className={"absolute right-[25px]"}>  <Icon icon={"zi-close"} ></Icon></Box>
                <Text.Title className={"text-center "}>
                    Yêu cầu đăng nhập
                </Text.Title>
            </Box>
            <div className="bottom-sheet-body text-center pt-10 px-8" style={{ overflowY: "auto" }}>
                <Text>
                    Vui lòng đăng nhập để sự dụng tính năng của ứng dụng
                </Text>
            </div>

            <Box flex flexDirection="column" mt={5}>
                <div style={{ flex: 1 }} className=" pt-5" >
                    <img className="m-auto py-3 w-[70%] h-[150px]" src='assets-src/image/bg.svg' />
                </div>

                <div style={{ flex: 1 }}  className={"pt-10 px-5"}>
                    <Button
                        fullWidth
                        className={"custom-button bg-green-button "}
                        onClick={navigateToLoginForm}
                    >
                        Đăng nhập ngay
                    </Button>
                </div>

            </Box>

        </Sheet>

    );
}

export default PopupDangky1;