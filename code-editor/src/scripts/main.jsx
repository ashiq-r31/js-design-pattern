import React from 'react'
import { render } from 'react-dom'
import 'grommet/scss/vanilla/index.scss'
import App from 'grommet/components/App'
import Button from 'grommet/components/Button'
import Headline from 'grommet/components/Headline'
import Heading from 'grommet/components/Heading'
import Hero from 'grommet/components/Hero'
import Box from 'grommet/components/Box'
import Tabs from 'grommet/components/Tabs'
import Tab from 'grommet/components/Tab'
// Render editor
render(
  <div>
    <Tabs> 
      <Tab title='First'></Tab>
      <Tab title='Second'></Tab>
    </Tabs>
    <App>
      <Hero>
      <Heading>Turn your code into poetry</Heading>
      <Heading margin='medium' tag='h3'>Learn popular Javascript design patterns used in popular libraries and frameworks</Heading>
      <Box direction='row' wrap align='start' pad={{ between: 'medium' }}>
        <Button primary label='Start lesson' type='submit' />
        <Button secondary label='About us' type='submit' />
      </Box>
      </Hero>
    </App>
    {/* <Editor /> */}
  </div>,
  document.getElementById('example')
);
