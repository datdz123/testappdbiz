import React, {useEffect, useState} from 'react';
import {Box, Button, Input, Sheet, Text, useNavigate} from "zmp-ui";

function SheetOTP({visible,onClose}) {
    const [actionSheet3, setActionSheet3] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState();
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
    useEffect(() => {

    }, [actionSheet3]);

    const  navigate = useNavigate();
    const navigateToLoginForm = () => {
        navigate('/Loginform');
    };

    return (
        <Sheet
            visible={visible}
            onClose={onClose}
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
                    <Text> Mã xác thực đã được gư va zns của Zalo </Text>
                    <Box px={5}>
                        <Input.OTP
                            show
                            otpLength={6}
                        />
                    </Box>
                    <Text>Gửi lại (60s)</Text>
                </div>
                <div style={{ flex: 1 }}  className={"pt-10 pb-10 px-5"}>
                    <Button
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
export default SheetOTP;