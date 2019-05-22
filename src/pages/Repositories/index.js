import React, { Component } from "react";
import api from "~/services/api";
import AsyncStorage from "@react-native-community/async-storage";

import Icon from "react-native-vector-icons/FontAwesome";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    FlatList
} from "react-native";

import styles from "./styles";
import Header from "~/components/Header";
import RepositoryItem from "./RepositoryItem";

class Repositories extends Component {
    state = {
        namestorage: "@Gitissues:repos",
        namerepo: "",
        loading: true,
        refreshing: false,
        data: [],
        error: false
    };

    async componentDidMount() {
        this.loadRepositories();
    }

    loadRepositories = async () => {
        const { namestorage } = this.state;

        const data = await AsyncStorage.getItem(namestorage);

        if (data) {
            return this.setState({ data: JSON.parse(data), loading: false });
        }
        return this.setState({ loading: false });
    };

    handlerInputPress = async () => {
        const { namerepo, data, namestorage } = this.state;
        this.setState({ loading: true, namerepo: "" });
        try {
            const response = await api.get(namerepo);

            const { id, name, full_name, owner } = response.data;

            const newData = [
                ...data,
                { id, name, full_name, avatar_url: owner.avatar_url }
            ];

            this.setState({ data: newData, loading: false });
            await AsyncStorage.setItem(namestorage, JSON.stringify(newData));
        } catch (error) {
            console.tron.log(error);
            return this.setState({ loading: false, error: true });
        }
        const response = await api.get(namerepo);

        const { id, name, full_name, owner } = response.data;

        const newData = [
            ...data,
            { id, name, full_name, avatar_url: owner.avatar_url }
        ];
        this.setState({ data: newData, loading: false });
        await AsyncStorage.setItem(namestorage, JSON.stringify(newData));
    };

    handlerPressList = full_name => {
        console.tron.log(full_name);
    };

    renderRepositories = () => {
        const { data, refreshing } = this.state;
        return (
            <FlatList
                data={data}
                onRefresh={this.loadRepositories}
                refreshing={refreshing}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <RepositoryItem key={item.id} repository={item} />
                )}
            />
        );
    };

    render() {
        const { namerepo, loading, error } = this.state;
        return (
            <View style={styles.container}>
                <Header title="Gitissues" />
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Ex.: facebook/react"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={namerepo}
                        style={error ? styles.inputError : styles.input}
                        onChangeText={namerepo => this.setState({ namerepo })}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.handlerInputPress}
                    >
                        {loading ? (
                            <ActivityIndicator />
                        ) : (
                            <Icon name="plus" size={20} />
                        )}
                    </TouchableOpacity>
                </View>

                {this.renderRepositories()}
            </View>
        );
    }
}

export default Repositories;
