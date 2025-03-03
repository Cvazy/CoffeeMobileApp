import { styles } from "./styles";
import { Dimensions, Image, View, Text, Pressable } from "react-native";
import ProductImage from "../../../../assets/images/products/product.png";
import { SvgIcon } from "../../../shared";
import { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

export const Product = () => {
  return (
    <View
      style={{
        ...styles.itemContainer,
        width: (width - 58) / 2,
      }}
    >
      <View style={styles.itemWrapper}>
        <View style={styles.itemImageContainer}>
          <Image
            style={styles.itemImage}
            alt={"Product Image"}
            source={ProductImage}
          />
        </View>

        <View style={styles.itemInfoContainer}>
          <Text style={styles.itemTitle}>Cappuccino</Text>

          <Text style={styles.itemDescription}>Classic</Text>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.itemPrice}>₱ 45.13</Text>

          <Pressable style={styles.addToCartButton}>
            <View style={styles.addToCartButtonWrapper}>
              <SvgIcon
                whiteCondition={true}
                iconPathCode={"M8.61743 12V4"}
                width={17}
                height={16}
                color={"white"}
                strokeWidth={1.5}
              >
                <Path
                  d={"M4.61743 8H12.6174"}
                  stroke="white"
                  strokeWidth={1.5}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                />
              </SvgIcon>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
