import { Dimensions, Image, ScrollView, View } from "react-native";
import { styles } from "./styles";
import { SearchingCoffee } from "../../../features";
import HomeBanner from "../../../../assets/images/banners/Home.png";
import { CategoriesList, ProductsList } from "../../../widgets";

const { width } = Dimensions.get("window");

const MainPage = () => {
  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.topContainer}>
        <View style={styles.topContainerWrapper}>
          <SearchingCoffee />
        </View>

        <View
          style={{
            ...styles.bannerContainer,
            height: width / 2.5,
          }}
        >
          <Image
            style={{
              ...styles.banner,
              width: width - 48,
              height: width / 2.5,
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
    </ScrollView>
  );
};

export default MainPage;
