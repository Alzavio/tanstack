import React from 'react';
import {useFacts} from "../queries";
import {ScrollView, Text} from "react-native";
import {Card} from "@rneui/themed";

function Fact(props) {
    const Fact = useFacts()

    if (Fact.isPending) {
        return <div>Loading...</div>
    }

    if (Fact.isError) {
        console.log(Fact.error)
        return <div>Something went wrong.</div>
    }

    if (Fact.isSuccess) {
        return (
            <Card>
                <Card.Title>Fun Fact</Card.Title>
                <Text>
                    {Fact.data.attributes.body}
                </Text>
            </Card>
        );
    }

    return null

}

export default Fact;