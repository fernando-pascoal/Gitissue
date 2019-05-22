import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light
    },
    loading: {
        flex: 1,
        justifyContent: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: metrics.basePadding / 2,
        backgroundColor: colors.regular,
        marginVertical: metrics.baseMargin,
        marginHorizontal: metrics.baseMargin * 2,
        borderRadius: metrics.baseRadius
    },
    buttonText: {
        color: colors.light,
        fontWeight: "normal",
        fontSize: 16
    },
    buttonSelected: {
        color: colors.light,
        fontWeight: "bold",
        fontSize: 16,
        color: colors.white
    }
});

export default styles;
