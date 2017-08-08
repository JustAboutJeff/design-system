import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { Heading } from '@pluralsight/ps-design-system-text/react'

export default _ =>
  <div className="app">
    <header>
      <Heading size="medium" style={{ color: core.colors.gray06 }}>
        <h3>Pluralsight Design System</h3>
      </Heading>
      <Heading size="large" style={{ color: core.colors.gray06 }}>
        <h2>React Install Example</h2>
      </Heading>
    </header>
    <div
      style={{
        marginTop: core.layout.spacingLarge,
        padding: core.layout.spacingLarge,
        background: core.colors.bone,
        borderRadius: 4
      }}
    >
      <Button
        size="large"
        onClick={_ => alert("It's working")}
        icon={<Icon id="logo" />}
      >
        Design System component
      </Button>
    </div>
  </div>
