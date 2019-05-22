import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";

import api from "~/services/api";

import Header from "~/components/Header";
import IssueItem from "./IssueItem";

import styles from "./styles";

class Issues extends Component {
    state = {
        data: [],
        full_name: this.props.navigation.getParam("full_name", ""),
        loading: true,
        listSelected: "all",
        refreshing: false
    };

    async componentDidMount() {
        this.loadIssues();
    }

    loadIssues = async (listSelected = "all") => {
        const { full_name } = this.state;

        this.setState({ loading: true, listSelected });

        const { data } = await api.get(
            `${full_name}/issues?state=${listSelected}`
        );

        const dataMini = data.map(issue => ({
            id: issue.id,
            title: issue.title,
            username: issue.user.login,
            avatar_url: issue.user.avatar_url,
            url: issue.html_url,
            state: issue.state
        }));

        this.setState({ data: dataMini, loading: false, listSelected });
    };

    //this function is executed into Header component
    redirectToRepositories = () => {
        const { navigation } = this.props;
        return navigation.navigate("Repositories");
    };

    renderIssues = () => {
        const { data, refreshing } = this.state;
        return (
            <FlatList
                data={data}
                keyExtractor={issue => String(issue.id)}
                onRefresh={this.loadIssues}
                refreshing={refreshing}
                renderItem={({ item }) => (
                    <IssueItem key={item.id} issue={item} />
                )}
            />
        );
    };

    render() {
        const { loading, listSelected } = this.state;

        return (
            <View style={styles.container}>
                <Header
                    title="Issues"
                    redirect={() => this.redirectToRepositories()}
                />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => this.loadIssues("all")}>
                        <Text
                            style={
                                listSelected === "all"
                                    ? styles.buttonSelected
                                    : styles.buttonText
                            }
                        >
                            Todas
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.loadIssues("open")}>
                        <Text
                            style={
                                listSelected === "open"
                                    ? styles.buttonSelected
                                    : styles.buttonText
                            }
                        >
                            Abertas
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.loadIssues("closed")}>
                        <Text
                            style={
                                listSelected === "closed"
                                    ? styles.buttonSelected
                                    : styles.buttonText
                            }
                        >
                            Fechadas
                        </Text>
                    </TouchableOpacity>
                </View>
                {loading ? (
                    <ActivityIndicator style={styles.loading} size={40} />
                ) : (
                    this.renderIssues()
                )}
            </View>
        );
    }
}

export default withNavigation(Issues);
