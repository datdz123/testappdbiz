import React, { useState } from 'react';
import { Box, Button, Icon, Input, Page, Text, useNavigate } from "zmp-ui";

function Home() {
    const navigate = useNavigate();
    return (
        <Page className="">
            <Box className={" custom-rounded"}>
            </Box>
            <Box>
                <Box flex flexDirection='row' mt='4' m={12} className={"layout custom-layoutHome gap-8 justify-center text-[12px]"}>
                    <Box flex flexDirection='column' className='customHome'>
                        <Box flex flexDirection='row' alignItems='center' >
                            <img className={"mr-2"} src='assets-src/image/svgHome1.svg' />
                            <p className='text-[24px] font-bold ' > 15 </p>
                        </Box>
                        <Box>
                            Chưa xử lý
                        </Box>
                    </Box>
                    <Box p={12} flex flexDirection='column' className='customHome'>
                        <Box flex flexDirection='row' alignItems='center' >
                            <img className={"mr-2"} src='assets-src/image/svgHome2.svg' />
                            <p className='text-[24px] font-bold '> 12 </p>
                        </Box>
                        <Box>
                            Đã xử lý
                        </Box>
                    </Box>
                    <Box p={12} flex flexDirection='column' className='customHome'>
                        <Box flex flexDirection='row' alignItems='center' >
                            <img className={"mr-2"} src='assets-src/image/svgHome3.svg' />
                            <p className='text-[24px] font-bold '> 23 </p>
                        </Box>
                        <Box>
                            Chưa phân giao
                        </Box>
                    </Box>

             
                </Box>

                <Box p={1.5} mt='4' flex flexDirection='row' className='justify-center items-center gap-4 rounded-[8px] bg-white 
            border border-solid border-opacity-15 border-green-500;
]'>

                        <Text className=''>
                            Tất cả
                        </Text>
                        <Text>
                            Bảo hành
                        </Text>
                        <Text>
                            Lắp mới
                        </Text>
                        <Text>
                            Sửa chữa
                        </Text>
                        <Text>
                            Thay thế linh kiện
                        </Text>
                    </Box>
                    <Box flex flexDirection='column' mt='4' >
                    <Box flex flexDirection='row' mt='8' p='5' className='rounded-lg border border-solid border-gray-800'>
                            <Box>
                            <img className={"mr-4"} src='assets-src/image/svgHome3.svg' />
                            </Box>
                            <Box> 
                                <Text>
                                Máy lọc nước Hydrogen ion kiềm nóng lạnh KG10a10S
                                </Text>
                                <Text>
                                Nguyễn Văn An - 0985097740
                                 </Text>
                            </Box>
                    </Box>
            
                <Box flex flexDirection='row' mt='8' p='5' className='rounded-lg border border-solid border-gray-800' >
                            <Box>
                            <img className={"mr-4"} src='assets-src/image/svgHome3.svg' />
                            </Box>
                            <Box> 
                                <Text>
                                Máy lọc nước Hydrogen ion kiềm nóng lạnh KG10a10S
                                </Text>
                                <Text>
                                Nguyễn Văn An - 0985097740
                                 </Text>
                            </Box>
                    </Box>
                </Box>
                <Box flex flexDirection='row' mt='8' p='5'  className='rounded-lg border border-solid border-gray-800' >
                            <Box>
                            <img className={"mr-4"} src='assets-src/image/svgHome3.svg' />
                            </Box>
                            <Box> 
                                <Text>
                                Máy lọc nước Hydrogen ion kiềm nóng lạnh KG10a10S
                                </Text>
                                <Text>
                                Nguyễn Văn An - 0985097740
                                 </Text>
                            </Box>
                    </Box>
                    </Box>

               
            
             
   



        </Page>
    );
}

export default Home;
