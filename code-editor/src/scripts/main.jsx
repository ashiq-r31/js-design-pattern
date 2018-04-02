import React from 'react'
import { render } from 'react-dom'
import 'grommet/scss/vanilla/index.scss'
import Editor from './components/Editor'
import Section from 'grommet/components/Section'
import Button from 'grommet/components/Button'

// Render editor
render(
  <div>
    <Button primary label='Start' />
    <Section>
      What's up?
    </Section>
    {/* <Editor /> */}
  </div>,
  document.getElementById('example')
);
