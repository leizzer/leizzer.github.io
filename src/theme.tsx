const lighttheme = {
  primary: '#003366',
  secondary: '#eee',
  tertiary: '#220000',
  gray: '#555555',
}

const theme = {
  lighttheme: {
    color: lighttheme,
    ...lighttheme,
    svgTool: {
      height: '104px',
      width: '104px',
    },
    toolStyle: {
      fill: lighttheme.primary,
      stroke: lighttheme.secondary,
      strokeWidth: 2,
    },
  },
}

export default theme
