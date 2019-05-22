import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginHorizontal: metrics.baseMargin * 2,
        marginTop: metrics.baseMargin,
        flexDirection: "row",
        padding: metrics.basePadding,
        borderRadius: metrics.baseRadius,
        alignItems: "center",
        justifyContent: "space-between"
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    icon: {
        fontSize: 20,
        fontWeight: "bold"
    },
    textContainer: {
        flex: 1,
        textAlign: "left",
        paddingHorizontal: metrics.basePadding
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "100"
    }
});

export default styles;
