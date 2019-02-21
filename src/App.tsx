import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

interface ColoredTextProps {
  color: string
}

// this works, but vscode-styled-components doesn't highlight it correctly, yet
// see: https://github.com/styled-components/vscode-styled-components/pull/101
// const ColoredText = styled.div<ColoredTextProps>`
//   color: ${({ color }) => color};
// `

const ColoredText = styled.div`
  color: ${({ color }: ColoredTextProps) => color};
`

class App extends React.Component {
  render() {
    return (
      <>
        <div
          css={css`
            color: red;
          `}
        >
          this is red
        </div>

        <ColoredText color="blue">prop-based color</ColoredText>
      </>
    )
  }
}

export default App
