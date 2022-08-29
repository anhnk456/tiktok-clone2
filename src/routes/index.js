import Home from '../page/Home'
import Following from '../page/Following';
import Upload from '../page/Upload';
import OnlyHeader from '../components/Layout/OnlyHeader';
import Profile from '../components/Layout/Profile';
const publicRoutes = [
    {
        path: '/tiktok-clone2',
        component: Home
    },
    {
        path: '/following',
        component: Following
    },
    {
        path: '/upload',
        component: Upload,
        layout: OnlyHeader
    },
    {
        path: '/@:nickname',
        component: Profile,
        
    }

]

const privateRoutes = [

]

export {publicRoutes, privateRoutes} 