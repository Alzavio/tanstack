import React, {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";

export default function DogGroup(props) {


    useEffect(() => {
        console.log("Selected Group", props.selectedDogGroup, props.groups.data)
    }, [props.selectedDogGroup])
        return (
            <View>
                <select
                    onChange={(e) => e.target.value ? props.setSelectedDogGroup(props.groups.data.find(({id}) => id === e.target.value)) : props.setSelectedDogGroup({})}>

                    <option value={""}> Set something</option>
                    {props.groups.data.map(({id, attributes}) => (
                        <option key={id} value={id}>
                            {attributes.name}
                        </option>
                    ))}
                </select>
            </View>
        )
}
