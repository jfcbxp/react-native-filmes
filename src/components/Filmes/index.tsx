import { StyleSheet, Text, View, Image, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { SwipeButton } from "@arelstone/react-native-swipe-button";
import { Filme } from "../../models/Filme";

interface Props {
  data: Filme;
}

const Filmes = (props: Props) => {
  const [animatedHeightCapa] = useState(new Animated.Value(0));

  const iniciarAnimacao = () => {
    Animated.sequence([
      Animated.timing(animatedHeightCapa, {
        toValue: 500,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedHeightCapa, {
        toValue: 200,
        duration: 3000,
        useNativeDriver: false,
      }),
    ]).start();
  };
  //Animated.parallel([]);
  //Animated.loop(Animated.sequence([]));
  useEffect(() => {
    iniciarAnimacao();
  }, []);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{props.data.nome}</Text>
        <Animated.Image
          source={{ uri: props.data.foto }}
          style={{ height: animatedHeightCapa }}
        />
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
