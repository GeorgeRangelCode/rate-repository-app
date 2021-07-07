import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from "../theme"

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading
  },
  textAlignCenter: {
    textAlign: 'center'
  }
})

export default function StyledText ({ children, color, fontSize, fontWeight, style, align, ...restOfPros }) {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.primary,
    color === 'secondary' && styles.secondary,
    fontSize === 'subheading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold,
    style
  ]

  return (
    <Text style={textStyles} {...restOfPros}>
      {children}
    </Text>
  )
}
