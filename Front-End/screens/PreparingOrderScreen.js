import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 8000);
  }, []);

  return (
    <SafeAreaView className="bg-[#DCDCDC] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        className="h-150 w-150"
        animation={"slideInUp"}
        iterationCount={1}
      />
      <Animatable.Text
        animation={"slideInUp"}
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center">
        Wating for Restaurant to accpet your order!
      </Animatable.Text>
      <Progress.CircleSnail size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
SafeAreaView;
