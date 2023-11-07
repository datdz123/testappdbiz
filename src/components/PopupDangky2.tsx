import React,{useState,useEffect} from 'react';
import {Box, Button, Input, Page, Sheet, Text, useNavigate,} from "zmp-ui";
import SheetOTP from "./SheetOTP";

function PopupDangky2({visible,onClose}) {
    const [actionSheet2, setActionSheet2] = useState(false);
    const [actionSheet3, setActionSheet3] = useState(false);
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
    useEffect(() => {
        if (actionSheet3) {
            // Nếu SheetOTP được mở, thì đóng Sheet trong PopupDangky2
            onClose();
        }
    }, [actionSheet3, onClose]);
    return (
<Page>
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
                </div>

                <div  className="input-container ">
                    <input type="number" id="phone"
                           placeholder={" Nhập số điện thoại"}
                           value={phoneNumber}
                           onChange={handlePhoneNumberChange}
                    />
                    <label htmlFor="phone " className={"text-black text-[14px]"}>Số điện thoại *</label>
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

    <SheetOTP visible={actionSheet3} onClose={() => setActionSheet3(false)} />

</Page>
    );
}

export default PopupDangky2