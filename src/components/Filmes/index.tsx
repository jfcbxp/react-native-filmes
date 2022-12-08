import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SwipeButton } from "@arelstone/react-native-swipe-button";

interface Props {
  data: any;
}

const Filmes = (props: Props) => {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{props.data.nome}</Text>
        <Image source={{ uri: props.data.foto }} style={styles.capa} />
        <View style={styles.areaBotao}>
          <SwipeButton
            containerStyle={styles.swipeButtonContainer}
            Icon={<Text style={styles.swipeButtonTitle}>{`>`}</Text>}
            onComplete={() => alert("Completed")}
            title="Leia Mais"
          />
        </View>
      </View>
    </View>
  );
};

export default Filmes;

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    backgroundColor: "#FFF",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    padding: 15,
  },
  capa: {
    height: 250,
    zIndex: 1,
  },
  areaBotao: {
    alignItems: "flex-end",
    marginTop: -90,
    zIndex: 9,
  },
  swipeButtonContainer: {
    backgroundColor: "#222",
    opacity: 0.8,
  },
  swipeButtonTitle: {
    alignItems: "center",
    fontSize: 30,
  },
});
