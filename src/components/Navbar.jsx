import { Diversity2, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { width } from '@mui/system';
import React, { useState } from 'react'

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});


const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }

}));


const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));




const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>HUMPTY-IT</Typography>
                <Diversity2 sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>

                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar 
                    sx={{ width: 30, height: 30 }} 
                    src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" 
                    onClick={e => setOpen(true)}
                    />
                </Icons>

                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
                        onClick={e => setOpen(true)}
                    />
                    <Typography variant='span'>Kushi</Typography>
                </UserBox>
            </StyledToolBar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>


        </AppBar>
    );

};




export default Navbar