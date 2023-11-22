import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Loading from "../components/Loading";
import MainLayout from "../MainLayout";

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';

function Home() {
  const authRedux = useSelector((state: RootState) => state.auth);
  const user = authRedux.data;
  const status = authRedux.status;
  const dispatch = useDispatch<AppDispatch>();

  

  // useEffect(() => {
  //   dispatch(getMaealAsync(""));
  // }, []);
  

  return (
    <MainLayout>
      <Box sx={{ width: "100%" }}>

        <Typography>
          Hello, welcome to the home page
        </Typography>

      </Box>
    </MainLayout>
  )
}

export default Home