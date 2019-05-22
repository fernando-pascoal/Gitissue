import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: metrics.basePadding,
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: colors.black,
        textAlign: "center"
    },
    icon: {
        width: 30,
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold"
    }
});

export default styles;
