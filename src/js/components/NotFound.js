import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';


const NotFound = () => {
  return (
  	<Box pad='large' align='center'>
      <Heading>Oops..</Heading>
      <Paragraph size='large'>This page does not exist.</Paragraph>
    </Box>
  );
};
export default NotFound;
