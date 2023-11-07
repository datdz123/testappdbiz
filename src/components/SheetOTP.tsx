import React, {useEffect, useState} from 'react';
import {Box, Button, Input, Page, Sheet, Text, useNavigate} from "zmp-ui";
import SheetDangky from "./SheetDangky";

function SheetOTP({visible,onClose}) {
    const [otpValue, setOtpValue] = useState('');
    const [actionSheet3, setActionSheet3] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState();
    const [buttonClass, setButtonClass] = useState('bg-xam-button');
    const [actionSheetDangky, setactionSheetDangky] = useState(false);
    const [countdown, setCountdown] = useState(60);
    const handleOtpChange = (value) => {
        const otpChange = value.target.value;
        setOtpValue(otpChange);
        // Thay đổi lớp CSS của nút dựa trên trạng thái đã nhập hay chưa
        if (otpChange === '') {
            setButtonClass('bg-xam-button');
        }
        else if (otpChange.length === 6) {

            setButtonClass('custom-button bg-green-button');
        }
    };
    useEffect(() => {

            const decreaseCountdown = () => {
                if (countdown > 0) {
                    setCountdown(countdown - 1);
                }
            };
            const countdownInterval = setInterval(decreaseCountdown, 1000);

            // Hủy interval khi component unmount hoặc khi actionSheet3 thay đổi
            return () => {
                clearInterval(countdownInterval);
            };

    }, [countdown]);


    const isButtonEnabled = phoneNumber !== '';

    const  navigate = useNavigate();
    const navigateToLoginForm = () => {
        navigate('/Loginform');
    };

    useEffect(() => {
        if (actionSheetDangky) {
            onClose();
        }
    }, [actionSheetDangky,onClose]);




    return (
        <>
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
                    <Text className={"text-center"}> Mã xác thực đã được gửi va zns của Zalo </Text>
                    <Box px={5}>
                        <Input.OTP
                            show
                            otpLength={6}
                            onChange={handleOtpChange}
                        />
                    </Box>
                    <Text className={"text-center"} >{`Gửi lại (${countdown}s)`}</Text>
                </div>
                <div style={{ flex: 1 }}  className={"pt-10 pb-10 px-5"}>

                    <Button
                        fullWidth
                        className={buttonClass}
                        onClick={() => {
                            setactionSheetDangky(true);

                        }}
                    >
                        Tiếp tục
                    </Button>

                </div>

            </Box>
        </Sheet>
            <SheetDangky visible={actionSheetDangky} onClose={() => setactionSheetDangky(false)} />
        </>
    );
}
export default SheetOTP;