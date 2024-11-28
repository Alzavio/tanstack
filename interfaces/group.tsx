export interface Group {
    id: string;
    type: string;
    attributes: {
        name: string;
    },
    relationships: {
        breeds: {
            data: Array<object>
        }
    }
}