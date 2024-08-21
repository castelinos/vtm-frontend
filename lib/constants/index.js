import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import Person4RoundedIcon from '@mui/icons-material/Person4Rounded';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';

export const navLinks = [{
    name:'home',
    text:'Home',
    path: '/',
    icon: <HomeRoundedIcon />
},{
    name:'drivers',
    text:'Drivers',
    path: '/catalogs/drivers',
    icon: <Person4RoundedIcon />
},{
    name:'vehicles',
    text:'Vehicles',
    path: '/catalogs/vehicles',
    icon: <DirectionsCarRoundedIcon />
},{
    name:'transfets',
    text:'Transfers',
    path: '/transfers',
    icon: <SwapHorizontalCircleRoundedIcon />
}]