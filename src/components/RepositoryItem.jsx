import React from "react"
import { Image, View, StyleSheet, Platform } from "react-native"
import StyledText from "./StyledText"
import RepositoryStats from "./RepositoryStats"
import theme from "../theme"

const RepositoryHeader = ({ownerAvatarUrl, fullName, description, language}) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri : ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight='bold'>{fullName}</StyledText>
        <StyledText color='secondary'>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryHeader {...props} />
      <RepositoryStats {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20, 
    paddingBottom: 5,
    paddingTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({ ios: theme.colors.primary, android: 'purple' }),
    alignSelf: 'flex-start',
    marginVertical: 4,
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

export default RepositoryItem
