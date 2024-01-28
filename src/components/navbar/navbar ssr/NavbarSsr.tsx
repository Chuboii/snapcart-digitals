import { FC } from "react";
import {
    Container, Form,WrapLogo, Wrapper,Wrap, Icon4, Icon5, Icon6, Logo, Button, Input, Icon1, Icon2, Icon3, Text, Box
} from './NavbarSsr.style'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
// import Cart from "../cart/Cart";
// import { Outlet } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toggleCart } from "/src/utils/reducers/toggle reducer/toggleReducer";

interface NavbarProps {
    screenScrolled: boolean;
}
const NavbarSsr = ({screenScrolled} : NavbarProps) => {
    // const dispatch = useDispatch()
    



//     const toggleCartFunction = useCallback(() => {
//      dispatch(toggleCart())
// },[dispatch])

    return (
        <>
            {/* <Cart/> */}
            <Container position={screenScrolled  ? "sticky" : "relative"}>
             <Wrapper>
                <WrapLogo>
                  <Icon1> <HorizontalSplitOutlinedIcon/> </Icon1>
                    <Logo>SNAPCART</Logo>
                </WrapLogo>

                <Form>
                    <Icon2></Icon2>
                    <Input placeholder="Search products, brands and categories" autoComplete='true' />
                    <Button>Search</Button>
                </Form>
                </Wrapper>

                <Wrap>
                    <Box>
                        <Icon3><Person2OutlinedIcon/></Icon3>
                        <Text>Account</Text>
                        <Icon4><KeyboardArrowDownOutlinedIcon/></Icon4>
                    </Box>

                    <Box>
                        <Icon5><HelpOutlineOutlinedIcon/></Icon5>
                        <Text>Help</Text>
                        <Icon4><KeyboardArrowDownOutlinedIcon/></Icon4>
                    </Box>

                    <Box >
                        <Icon6><ShoppingCartOutlinedIcon/></Icon6>
                        <Text>Cart</Text>
                    </Box>

                </Wrap>
            </Container>
        </>
    )
}

export default NavbarSsr