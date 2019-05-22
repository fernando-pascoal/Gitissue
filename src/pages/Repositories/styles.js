import { StyleSheet } from "react-native";
import { metrics, colors } from "~/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
        flexDirection: "column"
    },
    inputContainer: {
        justifyContent: "space-between",
        margin: metrics.baseMargin * 2,
        paddingBottom: metrics.basePadding,
        flexDirection: "row",
        marginBottom: metrics.basePadding,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.regular
    },
    input: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: metrics.baseRadius,
        height: 44,
        paddingHorizontal: metrics.basePadding,
        borderRadius: metrics.baseRadius
    },
    inputError: {
        flex: 1,
        borderRadius: metrics.baseRadius,
        height: 44,
        paddingHorizontal: metrics.basePadding,
        borderRadius: metrics.baseRadius,
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.danger
    },
    button: {
        justifyContent: "center",
        marginLeft: metrics.basePadding / 2
    }
});

export default styles;
