import SideNavLink from './SideNavLink';
import HomeIcon from '@mui/icons-material/Home'
import PeronIcon from '@mui/icons-material/Person';

export default function SideNav() {
  

  return (
    <div className='sidenav' style={{marginTop: 40 }}>
      <SideNavLink link="/" text="Home" Icon={HomeIcon} />
      <SideNavLink link="/login" text="Login" Icon={PeronIcon} />
    </div>
  )
}