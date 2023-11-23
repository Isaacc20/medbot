// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from './state/store';

import Box from '@mui/material/Box';
import sizes from './Theming/sizes';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer'

function MainLayout({ children }: { children: any }) {
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <main>
      <nav>
        <HeaderComponent />
      </nav>
      
      <Box 
        sx={{
          // width: { sm: `calc(100% - ${sizes.drawerWidth - 20}px)` }, 
          ml: { sm: `${sizes.drawerWidth + 20}px` }, 
          mx: `10px`, 
          textAlign: "left",
          pt: "70px",
        }}
      >
        { children }
      </Box>
      
      <footer>
        <FooterComponent />
      </footer>
    </main>
  )
}

export default MainLayout