import React, { useState } from 'react';
import { Box, Button, Icon, Input, Page, Text, useNavigate } from "zmp-ui";
import Footer from "../../../Layout/footer";
import Header from "../../../Layout/header";


function HomePage (props)  {
    const navigate = useNavigate();

    return (
        <>
            <Header />
        <Page  className="">

            <Box px={5}>
                <Box flex flexDirection='row' mt={4} m={12} className={" gap-8 justify-center text-[12px]"}>
                    <Box flex flexDirection='column' className='customHome'>
                        <Box flex flexDirection='row' alignItems='center' >
                            <img className={"mr-2"} src='assets-src/image/svgHome1.svg' />
                            <p className='text-[24px] font-extrabold ' > 15 </p>
                        </Box>
                        <Box className={"font-bold text-[12px]"}>
                            Chưa xử lý
                        </Box>
                    </Box>
                    <Box p={12} flex flexDirection='column' className='customHome'>
                        <Box flex flexDirection='row' alignItems='center' >
                            <img className={"mr-2"} src='assets-src/image/svgHome2.svg' />
                            <p className='text-[24px] font-bold '> 12 </p>
                        </Box>
                        <Box className={"font-bold text-[12px]" }>
                            Đã xử lý
                        </Box>
                    </Box>
                    <Box p={12} flex flexDirection='column' className='customHome'>
                        <Box flex flexDirection='row' alignItems='center' >
                            <img className={"mr-2"} src='assets-src/image/svgHome3.svg' />
                            <p className='text-[24px] font-bold '> 23 </p>
                        </Box>
                        <Box className={"font-bold text-[12px]"}>
                            Chưa phân giao
                        </Box>
                    </Box>

             
                </Box>

                <Box p={3} mt={4} flex flexDirection='row' className='justify-center items-center gap-4
                rounded-[8px] bg-white border border-solid border-opacity-15 border-green-500 '>

                        <Text style={{ fontSize: 11 }} className=''>
                            Tất cả
                        </Text>
                        <Text style={{ fontSize: 11 }}>
                            Bảo hành
                        </Text>
                        <Text style={{ fontSize: 11 }}>
                            Lắp mới
                        </Text>
                        <Text style={{ fontSize: 11 }}>
                            Sửa chữa
                        </Text>
                        <Text style={{ fontSize: 11 }}>
                            Thay thế linh kiện
                        </Text>
                    </Box>
                    <Box flex flexDirection='column' mt={4} >
                    <Box flex flexDirection='row' mt={8} p={5} className='rounded-lg border-color bg-white relative'>
                            <Box>
                            <img className={"mr-10 w-[40px] h-[40px] rounded-[25px] object-cover"} src='assets-src/image/imageQuang.jpg' />
                            </Box>
                            <Box> 
                                <Text>
                                Máy lọc nước Hydrogen ion kiềm nóng lạnh KG10a10S
                                </Text>
                                <Text className={"mt-3"}>
                                Nguyễn Văn An - 0985097740
                                 </Text>
                            </Box>
                        <Box  className={"absolute right-[20px] top-[50px]"}   onClick={()=>navigate("")}>
                            <Icon icon={"zi-chevron-right"} className={"text-[#9090AD]"} ></Icon>
                        </Box>
                    </Box>
            
                <Box flex flexDirection='row' mt={8} p={5} className='rounded-lg border-color bg-white relative' >
                            <Box>
                            <img className={"mr-10 w-[40px] h-[40px] rounded-[25px] object-cover"} src='assets-src/image/imageNam.jpg' />
                            </Box>
                            <Box> 
                                <Text>
                                Máy lọc nước Hydrogen ion kiềm nóng lạnh KG10a10S
                                </Text>
                                <Text className={"mt-3"}>
                                Nguyễn Văn An - 0985097740
                                 </Text>
                                <Box  className={"absolute right-[20px] top-[50px]"}   onClick={()=>navigate("")}>
                                    <Icon icon={"zi-chevron-right"} className={"text-[#9090AD]"} ></Icon>
                                </Box>
                            </Box>
                    </Box>
                </Box>
                <Box flex flexDirection='row' mt={8} p={5}  className='rounded-lg border  border-color  bg-white relative' >
                            <Box>
                            <img className={"mr-10 w-[40px] h-[40px] rounded-[25px] object-cover"} src='assets-src/image/imageDat.jpg' />
                            </Box>
                            <Box> 
                                <Text>
                                Máy lọc nước Hydrogen ion kiềm nóng lạnh KG10a10S
                                </Text>
                                <Text className={"mt-3"}>
                                Nguyễn Văn An - 0985097740
                                 </Text>
                            </Box>
                    <Box  className={"absolute right-[20px] top-[50px]"}   onClick={()=>navigate("")}>
                        <Icon icon={"zi-chevron-right"} className={"text-[#9090AD]"} ></Icon>
                    </Box>
                    </Box>
                    </Box>
            <Footer />
        </Page>


</>
    );
}
const Home = () => {
    return (
        <>
            <Header />
            <HomePage/>
            <Footer />
        </>
    );
}
export default HomePage;
