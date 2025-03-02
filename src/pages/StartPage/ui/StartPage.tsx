import { View, Text, ImageBackground } from "react-native";
import { Button } from "../../../shared";
import StartBgImage from "../../../../assets/images/backgrounds/startBg.png";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { RootStackParamList } from "../../../app/model";
import { StackNavigationProp } from "@react-navigation/stack";
import { FC } from "react";

type IStartPageProps = {
  navigation?: StackNavigationProp<RootStackParamList, "Home">;
};

const StartPage: FC<IStartPageProps> = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <ImageBackground
          style={styles.topBgImage}
          source={StartBgImage}
          alt={"startBg"}
          resizeMode={"contain"}
        />
      </View>

      <LinearGradient
        colors={[
          "#167c55",
          "#167c55",
          "#167c55",
          "rgba(27, 174, 118, 0.5)",
          "rgba(27, 174, 118, 0.5)",
        ]}
        start={[1, 1]}
        end={[0, 0]}
        style={styles.bottom}
      >
        <View style={styles.bottomWrapper}>
          <View style={{ gap: 48 }}>
            <View style={styles.bottomTitle}>
              <Text style={styles.title}>
                {"Elevate your coffee experience at \nKopi Kap"}
              </Text>

              <Text style={styles.description}>
                Where coffee meets comfort.
              </Text>
            </View>

            <Button
              inversion={false}
              height={62}
              rounded={16}
              onPress={() => navigation?.navigate("Home")}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default StartPage;
