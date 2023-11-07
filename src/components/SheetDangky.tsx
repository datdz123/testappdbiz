import React, {useState,useEffect} from 'react';
import {Box, Button, Checkbox, Icon, Input, Page, Select, Sheet, Text} from "zmp-ui";

function SheetDangky({visible, onClose}) {
    const { OtpGroup, Option } = Select;
    const [actionSheetDangky, setactionSheetDangky] = useState(true);
    const [buttonClass, setButtonClass] = useState('bg-xam-button');

    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const handleOptionChange = (value) => {
        if (selectedOptions.includes(value)) {
            setSelectedOptions(selectedOptions.filter((option) => option !== value));
        } else {
            setSelectedOptions([...selectedOptions, value]);
        }
    };

    useEffect(() => {
        // Check if all input fields have values
        if (
            formData.fullName &&
            formData.address &&
            formData.username &&
            formData.password &&
            formData.confirmPassword ===''
        )
        {
            setButtonClass('bg-xam-button');
        } else  {

            setButtonClass('custom-button bg-green-button');
        }
    }, [formData]);

    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    return (

        <Page>
            <Sheet
                visible={visible}
                onClose={onClose}
                mask
                handler
                swipeToClose
            >
                <Box className={"flex flex-col items-center justify-center custom-layout"}>
                    <Box className={""}>
                        <Text className="text-center pt-5 custom-text text-[14px] "> ĐĂNG KÝ </Text>
                    </Box>
                </Box>
                <Box px={10}>
                <div className="row">
                    <Input
                        type="text"
                        label="Họ tên "
                        placeholder="Nhập họ tên"
                        onChange={(value) => handleInputChange('confirmPassword', value)}

                    />
                </div>
                <div className="row">
                    <Select
                        label=" Địa chỉ "
                        placeholder="Chọn hãng"
                        defaultValue="1"
                    >
                        <OtpGroup label="Group 1">
                            <Option value="1" title="166 Trần Vỹ,Mai Dịch,Cầu Giấy,Hà Nội " />
                            <Option value="2" title="Option 2" />
                        </OtpGroup>
                    </Select>
                </div>
                <div className="row">
                    <Input
                        type="text"
                        label="Tên đăng nhập"
                        placeholder="Nhập tên đăng nhập"
                        onChange={(value) => handleInputChange('confirmPassword', value)}

                    />
                </div>
                <div className="row">
                    <Input.Password
                        type="text"
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu"
                        defaultValue=""
                        clearable
                        onChange={(value) => handleInputChange('confirmPassword', value)}

                    />
                </div>
                <div className="row">
                    <Input.Password
                        type="text"
                        label="Nhập lại mật khẩu"
                        placeholder="Nhập lại mật khẩu"
                        defaultValue=""
                        clearable
                        onChange={(value) => handleInputChange('confirmPassword', value)}

                    />
                </div>
                <div className="row">
                    <Select
                        label="Select Options"
                        clearable
                        renderValue={(values) => values.join(', ')}
                        value={selectedOptions}
                        onChange={(values) => setSelectedOptions(values)}
                    >
                        {options.map((option) => (
                            <div key={option.value} className="flex items-center">
                                <Checkbox
                                    label={option.label}
                                    value={option.value}
                                    checked={selectedOptions.includes(option.value)}
                                    onChange={() => handleOptionChange(option.value)}
                                />
                            </div>
                        ))}
                    </Select>
                </div>
                    <Box my={10}>
                    <Button  size="large" className= {buttonClass}>
                        Tiếp tục
                    </Button>

                </Box>
                </Box>
            </Sheet>
        </Page>

    );
}

export default SheetDangky;