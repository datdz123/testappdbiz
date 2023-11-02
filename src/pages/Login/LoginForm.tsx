import React, { useState } from 'react';
import {Box, Button, Icon, Input, Page, Text,useNavigate } from "zmp-ui";

function LoginForm() {
    const navigate = useNavigate();
    return (
<Page className=" bg-green-bg">
    <Box className={"flex flex-col items-center justify-center custom-layout"}>
        <Box className={"relative"} >
            <Box onClick={()=>navigate(-1)}>
            <Icon icon={"zi-arrow-left"} className={"absolute custom-icon"}></Icon>
            </Box>
          <Text className="text-center pt-5 custom-text text-[14px] "> ĐĂNG NHẬP </Text>
            <img className="m-auto py-3 w-[142px] h-[81px]" src='assets-src/image/bg.svg' />
        </Box>
        <Box className=" h-full">
            <Input label="Số điện thoại" type={"number"} />
            <Input.Password label="Mật khẩu" visibilityToggle />
            <div className="flex items-center justify-center mt-4">
                <Button size="large" className=" custom-button bg-green-button rounded-[15px] ">
                   Đăng nhập
                </Button>
            </div>
            <Box>
                <Text className={"text-center mt-4 text-[#567DF4]"}>Quên mật khẩu?</Text>
            </Box>
        </Box>


    </Box>
</Page>
    );
}

export default LoginForm;
