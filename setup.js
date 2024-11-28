import React, { useState } from "react";
import Dog from "./components/dog";
import Fact from "./components/fact";
import DogGroup from "./components/dogGroup";
import {useGroups} from "./queries";



export default function Setup() {
    const [selectedDogGroup, setSelectedDogGroup] = useState({});
    const groups = useGroups()

    if (groups.isPending) {
        return <div>Loading...</div>
    }

    if (groups.isError) {
        return <div>Something went wrong.</div>
    }

    if (groups.isSuccess) {
        return (
            <>
                <DogGroup setSelectedDogGroup={setSelectedDogGroup} selectedDogGroup={selectedDogGroup} groups={groups} />
                <Dog groups={groups.data} selectedDogGroup={selectedDogGroup} />
                <Fact />
            </>
        );
    }
}