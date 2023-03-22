import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./movietab.css";

function TabPanel(props) {
  const {
    children,
    value,
    index,

    ...other
  } = props;

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
          <Typography>{children}</Typography>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MovieTabs = ({ intro, starting, createdby, genre }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="OVERVIEW" {...a11yProps(0)} />
          <Tab label="TRAILERS & MORE" {...a11yProps(1)} />
          <Tab label="MORE LIKE THIS" {...a11yProps(2)} />
          <Tab label="DETAILS" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="movie-intro">
          <div className="movieintroduction">
            <p>{intro}</p>
            <ul>
              <li>
                <span clsssName="movieintroduction-span1">Starting </span>
                {starting}
              </li>
              <li>
                <span className="movieintroduction-span2">Created by</span>
                {createdby}
              </li>
              <li>
                <span className="movieintroduction-span3">Genre</span> {genre}
              </li>
            </ul>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );