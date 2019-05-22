import React from "react";
import PropTypes from "prop-types";

import {
    View,
    Image,
    Text,
    Linking,
    TouchableWithoutFeedback
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const redirect = path => {
    Linking.openURL(path);
};

const IssueItem = ({ issue }) => {
    return (
        <TouchableWithoutFeedback onPress={() => redirect(issue.url)}>
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{ uri: issue.avatar_url }}
                />
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={styles.title}>
                        {issue.title}
                    </Text>
                    <Text style={styles.subtitle}>{issue.username}</Text>
                    <Text style={styles.subtitle}>[{issue.state}]</Text>
                </View>
                <Icon style={styles.icon} name="angle-right" />
            </View>
        </TouchableWithoutFeedback>
    );
};

IssueItem.propTypes = {
    issue: PropTypes.shape({
        url: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    }).isRequired
};

export default IssueItem;
