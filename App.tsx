import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Filmes from "./src/components/Filmes";
import { carregarFilmes } from "./src/services/api";
export default function App() {
  const [filmes, setFilmes] = useState<any[]>();
  const renderItem: ListRenderItem<any> = ({ item }) => <Filmes data={item} />;
  const keyItem: (item: any) => string = (item: any) => item.id.toString();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    carregarFilmes().then((response) => {
      setFilmes(response);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color="#09A6FF" size={100} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.filmes}
          data={filmes}
          keyExtractor={keyItem}
          renderItem={renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  filmes: {},
});
