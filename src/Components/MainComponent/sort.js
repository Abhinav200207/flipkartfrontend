import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { useSelector, useDispatch } from "react-redux";
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from './card';
import { changeLinkSort, getProduct } from "../../Actions/ProductAction";



export default function Sort() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer);
  const { link } = useSelector((state) => state.linkReducer);



  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography variant='subtitle1'>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    if (newValue === 1) {
      dispatch(changeLinkSort(link, "", ""))
    }
    if (newValue === 3) {
      dispatch(changeLinkSort(link, "sortby", "asc"))
    }
    if (newValue === 2) {
      dispatch(changeLinkSort(link, "sortby", "desc"))
    }
    if (newValue === 4) {
      dispatch(changeLinkSort(link, "popular", "1"))
    }
    setValue(newValue);
  };

  React.useEffect(() => {
    dispatch(getProduct(link))
  }, [dispatch, link])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Sort by" disabled />
          <Tab label="Newest First" {...a11yProps(1)} />
          <Tab label="Price-High To Low" {...a11yProps(2)} />
          <Tab label="Price-Low To High" {...a11yProps(3)} />
          <Tab label="Popularity" {...a11yProps(4)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={1}>
        <Card product={product} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card product={product} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Card product={product} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Card product={product} />
      </TabPanel>
    </Box>
  );
}