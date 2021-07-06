import React from "react";
import { View, Text } from "react-native";

const RepositoryItem = (props) => {
  return (
    <View
      key={props.repo.id}
      style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}
    >
      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
        Id: {props.repo.id}
      </Text>
      <Text>FullName: {props.repo.fullName}</Text>
      <Text>Description: {props.repo.description}</Text>
      <Text>Language: {props.repo.language}</Text>
      <Text>Starts: {props.repo.stargazerCount}</Text>
      <Text>Forks: {props.repo.forksCount}</Text>
      <Text>Review: {props.repo.reviewCount}</Text>
      <Text>Rating: {props.repo.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
