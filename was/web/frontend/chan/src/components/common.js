import React, { useState } from "react";
import { Menu } from "antd";
import {
    AppstoreOutlined,
    BarsOutlined,
    CompassOutlined,
    HomeOutlined,
    MailOutlined,
    SettingOutlined,
    SolutionOutlined,
    TeamOutlined,
    ToolOutlined,
    KeyOutlined,
    IdcardOutlined,
    RocketOutlined,
} from "@ant-design/icons";
import 'antd/dist/antd.css';

// 공통 컴포넌트

function TopMenu() {
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['topMenu']}>
            <Menu.Item key="menu1" icon={<HomeOutlined/>} style={{width:200, textAlign:"center"}} onClick={()=>{window.location.replace("/home")}}>
                홈
            </Menu.Item>
            <Menu.SubMenu key="SubMenu1" title="시작하기" icon={<RocketOutlined/>} style={{width:200, textAlign:"center"}}>
                <Menu.Item key="sub1-1" icon={<KeyOutlined/>} onClick={()=>{window.location.replace("/user/login")}}>
                    로그인
                </Menu.Item>
                <Menu.Item key="sub1-2" icon={<IdcardOutlined/>} onClick={()=>{window.location.replace("/user/register")}}>
                    회원가입
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="SubMenu2" title="소개" icon={<SolutionOutlined/>} style={{width:200, textAlign:"center"}}>
                <Menu.Item key="sub2-1" icon={<BarsOutlined/>} onClick={()=>{window.location.replace("/service/about")}}>
                    서비스
                </Menu.Item>
                <Menu.Item key="sub2-2" icon={<TeamOutlined/>} onClick={()=>{window.location.replace("/service/project/about")}}>
                    멤버
                </Menu.Item>
                <Menu.Item key="sub2-3" icon={<ToolOutlined/>} onClick={()=>{window.location.replace("/service/tech/about")}}>
                    기술
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="menu2" icon={<CompassOutlined/>} style={{width:200, textAlign:"center"}} onClick={()=>{window.location.replace("/service/map")}}>
                지도 서비스
            </Menu.Item>
            <Menu.Item key="menu3" icon={<SettingOutlined/>} style={{width:200, textAlign:"center"}} onClick={()=>{window.location.replace("/service/mypage")}}>
                마이페이지
            </Menu.Item>
        </Menu>
    );
}

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

function MapSideMenu() {
    const items = [
        getItem('메뉴 1', 'sub1', <MailOutlined/>, [
            getItem('소메뉴 1', '1'),
            getItem('소메뉴 2', '2'),
            getItem('소메뉴 3', '3'),
            getItem('소메뉴 4', '4'),
        ]),
        getItem('메뉴 2', 'sub2', <AppstoreOutlined/>, [
            getItem('소메뉴 5', '5'),
            getItem('소메뉴 6', '6'),
            getItem('서브메뉴', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
        ]),
        getItem('메뉴 3', 'sub4', <SettingOutlined/>, [
            getItem('소메뉴 9', '9'),
            getItem('소메뉴 10', '10'),
            getItem('소메뉴 11', '11'),
            getItem('소메뉴 12', '12'),
        ]),
    ];
    const [current, setCurrent] = useState('1');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
        <br/>
            <Menu
                theme="dark"
                onClick={onClick}
                style={{
                    width: 180,
                    position: "relative",
                    zIndex: 2,
                }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
                items={items}
            />
        </>
    );
}

export { TopMenu, MapSideMenu };
