import { Dimensions, Image, View } from "react-native";
import { styles } from "./styles";
import { SearchingCoffee } from "../../../features";
import HomeBanner from "../../../../assets/images/banners/Home.png";
import { CategoriesList, ProductsList } from "../../../widgets";

const MainPage = () => {
  const windowDimensions = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topContainerWrapper}>
          <SearchingCoffee />
        </View>

        <View
          style={{
            ...styles.bannerContainer,
            height: windowDimensions.width / 2.5,
          }}
        >
          <Image
            style={{
              ...styles.banner,
              width: windowDimensions.width - 48,
              height: windowDimensions.width / 2.5,
            }}
            source={HomeBanner}
            alt={"Home Banner"}
          />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.contentWrapper}>
          <CategoriesList />

          <ProductsList />
        </View>
      </View>
    </View>
  );
};

export default MainPage;
