import React from "react";
import PropTypes from "prop-types";

import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const Header = ({ title, redirect }) => (
    <View style={styles.container}>
        {redirect && (
            <Icon
                style={styles.icon}
                name="angle-left"
                onPress={() => redirect()}
            />
        )}
        <Text style={styles.title}>{title}</Text>
    </View>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    redirect: PropTypes.func
};

export default Header;
