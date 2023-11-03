import React,{useState} from 'react';
import {Box, Button, Input, Sheet, Text, useNavigate,} from "zmp-ui";
import SheetOTP from "./SheetOTP";

function PopupDangky2({visible,onClose}) {
    const [actionSheet2, setActionSheet2] = React.useState(false);
    const [actionSheet3, setActionSheet3] = React.useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [buttonClass, setButtonClass] = useState('bg-xam-button');

    const handlePhoneNumberChange = (event) => {
        const newPhoneNumber = event.target.value;
        setPhoneNumber(newPhoneNumber);

        // Thay đổi lớp CSS của nút dựa trên trạng thái đã nhập hay chưa
        if (newPhoneNumber === '') {
            setButtonClass('bg-xam-button');
        } else {
            setButtonClass('custom-button bg-green-button');
        }
    };
    const isButtonEnabled = phoneNumber !== '';

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
            <Box className={""}>
                <Text.Title className={"text-center "}>
                    Đăng ký
                </Text.Title>
            </Box>
            <Box flex flexDirection="column" >
                <div style={{ flex: 1 }} className=" pt-5" >
                    <img className="m-auto py-3 w-[80%]" src='assets-src/image/dangky.svg' />
                    <Box px={5}>
                    <Input label="Số điện thoại" type={"number"}
                           value={phoneNumber}
                           onChange={handlePhoneNumberChange}/>
                    </Box>
                </div>
                <div style={{ flex: 1 }}  className={"pt-10 pb-10 px-5"}>
                    <Button
                        onClick={() => {
                            setActionSheet3(true);
                        }}
                        fullWidth
                        className={buttonClass}
                    >
                        Tiếp tục
                    </Button>
                </div>

            </Box>
        </Sheet>



    );
}

export default PopupDangky2