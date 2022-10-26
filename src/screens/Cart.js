import { FlatList, Text, View } from "react-native";
import { getTotalPrice } from "../../App";
import { StyleSheet } from "react-native"

export const Cart = ({ items, getTotalPrice }) => {
  return (
  <View>
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <View style={styles.containerPrd} >
          <View>
            <Text style={styles.textProd2}>
            {item.product.name} x {item.qty}
            </Text>
          </View>
          <View>
            <Text style={styles.textProd}>
            R$ {item.qty * item.product.price}
            </Text>
          </View>
        </View>
      )}


    ListFooterComponent={() => (
      <View style={styles.containerPrd2}>
        <Text>Total</Text>
        <Text>R$ {getTotalPrice()}</Text>
      </View>
    )}
  />
  </View>
  );
};


const styles = StyleSheet.create({

  containerPrd: {
    flex: 1,
    justifyContent: "space-between",
    margin: 12,
    flexDirection: "row",
  },
  
  containerPrd2: {
    
    flexDirection: "row",
    margin: 12,
    borderTopColor: "gray",
    borderTopWidth: 2,
    justifyContent: "space-between",
  },
 
  textProd: {
    fontSize: 20,
    fontWeight: "bold",
  },

  textProd2: {
    fontSize: 20,
  },


});
