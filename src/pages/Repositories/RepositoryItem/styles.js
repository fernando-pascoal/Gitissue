import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: metrics.basePadding,
        marginHorizontal: metrics.baseMargin * 2,
        marginBottom: metrics.baseMargin,
        alignItems: "center",
        borderRadius: metrics.baseRadius
    },
    avatar: { width: 50, height: 50 },
    icon: {
        fontSize: 20
    },
    infoContainer: {
        flex: 1,
        paddingLeft: metrics.basePadding
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    }
});

export default styles;
