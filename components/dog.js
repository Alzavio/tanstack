import React, {useEffect, useState} from 'react';
import {useBreedIds} from "../queries";
import {ScrollView, View} from "react-native";
import {Card} from "@rneui/themed";
import { Text } from "react-native"

function Dog(props) {
    const dogInfo = useBreedIds()
    const [selectedDog, setSelectedDog] = useState({});

    if (dogInfo.isPending) {
        return <div>Loading...</div>
    }

    if (dogInfo.isError) {
        return <div>Something went wrong.</div>
    }

    if (dogInfo.isSuccess) {
        return (
            <View>
                <select onChange={(e) => setSelectedDog(dogInfo.data.find(({id}) => id === e.target.value))}>
                    <option> Set something</option>
                    {dogInfo.data.filter(({ id }) =>
                        Object.keys(props.selectedDogGroup).length !== 0 ? props.selectedDogGroup.relationships.breeds.data.some(breed => breed.id === id) : true
                    ).map(({id, attributes}) => (
                        <option key={id} value={id}>
                            {attributes.name}
                        </option>
                    ))}
                </select>
                {Object.keys(selectedDog).length !== 0 && (
                    <Card>
                        <Card.Title>{selectedDog.attributes.name}</Card.Title>
                        <Text>
                            {selectedDog.attributes.description}
                        </Text>
                        <Text style={{marginTop: 2}}>
                            Hypoallergenic: {selectedDog.attributes.hypoallergenic ? "True" : "False"}
                        </Text>
                    </Card>
                )}
            </View>
        );
    }

    return null;
}

export default Dog;