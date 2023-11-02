import React from 'react';
import {Box, Button, Page, Text} from "zmp-ui";

function Display(props) {
    return (
        <Page>
            <Box className={" custom-rounded"}>
            </Box>
            <Box className={"layout flex flex-col items-center justify-center custom-layout"}>
                <Box className={"custom-button"}>
                    <Box className="button flex flex-row">
                        <Box className="custom-flex">
                            <img className={"mr-2"} src='assets-src/image/user.svg'/>
                            <Text className={"text-[#000] custom-text"}> Đăng nhập </Text>
                        </Box>
                        <Box className="">
                            <img src='assets-src/image/Button.svg'/>
                        </Box>
                    </Box>
                </Box>

                <Box className={"custom-frame "}>
                    <Box className={"custom-flex flex-shrink-0 w-full"}>
                        <Box className={"custom-flex1 "}>
                            <img className={""} src='assets-src/image/Search.svg'/>
                            <Text className={"custom-text text-center  px-3"}>Tra cứu bảo hành </Text>
                        </Box>
                        <Box className={"custom-flex1  "}>
                            <img className={""} src='assets-src/image/Search2.svg'/>
                            <Text className={"custom-text text-center  px-3 "}>Danh sách sản phẩm </Text>
                        </Box>
                        <Box className={"custom-flex1"}>
                            <img className={""} src='assets-src/image/Search3.svg'/>
                            <Text className={"custom-text text-center px-3"}>Quản lý nhân viên</Text>
                        </Box>
                        <Box className={"custom-flex1"}>
                            <img className={""} src='assets-src/image/Search3.svg'/>
                            <Text className={"custom-text text-center px-3"}>Sản phẩm cần thay thế</Text>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <div className={"font-bold mt-4 text-[#000] font-[14px]"}>
                        Vui lòng đăng ký thông tin để trải nghiệm tính năng của ứng dụng
                    </div>
                </Box>
                <div className={"mt-4"}>
                    <div className={"layout pb-44  bg-green-bg  rounded-[10px]"}>
                        <div className={"flex flex-col items-center"}>
                            <p className={"text-center font-bold text-[14px] mt-4"}> Đăng ký </p>
                            <img className={" h-[103px] w-full"} src='assets-src/image/dangky.svg'/>
                            <p className={"text-center  text-[14px] text-[#22215B]"}> Chọn đối tượng Đăng ký </p>
                        </div>
                        <div className={"px-3"}>
                            <div className={"custom-display px-3 mt-4 flex flex-row items-center m-auto"}>

                                <img className={"mr-2"} src='assets-src/image/Vector.svg'/>
                                <p className={"text-[#22215B] text-[16px]"}>
                                    Đại lý
                                    <p className={"text-[14px]"}>
                                        Đăng ký thông tin đại lý với hãng
                                    </p>
                                </p>

                            </div>

                            <div className={"custom-display px-3 mt-4 flex flex-row items-center m-auto"}>

                                <img className={"mr-2"} src='assets-src/image/Vector.svg'/>
                                <p className={"text-[#22215B] text-[16px]"}>
                                    Nhân viên
                                    <p className={"text-[14px]"}>
                                        Đăng ký tài khoản nhân viên của Đại lý
                                    </p>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Page>
    );
}

export default Display;