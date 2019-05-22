import React from "react";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";

import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const RepositoryItem = ({ repository, navigation }) => {
    const redirectToIssues = full_name => {
        navigation.navigate("Issues", { full_name });
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => redirectToIssues(repository.full_name)}
        >
            <View style={styles.container}>
                <Image
                    source={{ uri: repository.avatar_url }}
                    style={styles.avatar}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{repository.name}</Text>
                    <Text style={styles.subtitle}>{repository.full_name}</Text>
                </View>
                <Icon name="angle-right" style={styles.icon} />
            </View>
        </TouchableWithoutFeedback>
    );
};

RepositoryItem.propTypes = {
    repository: PropTypes.shape({
        full_name: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
};

export default withNavigation(RepositoryItem);
