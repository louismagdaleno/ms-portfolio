import React from "react";
import { IHomeState, IHomeProps } from '../../contracts';
import { Stack, Text } from 'office-ui-fabric-react';

/**
 * @class Home
 */
export class Home extends React.Component<IHomeState, IHomeProps> {
    constructor(props : IHomeProps){
        super(props)
        this.state = {
            name : 'Louis'
        }
    };

    public render(){
        return (
            <Stack>
                <Text>Hello World</Text>
            </Stack>
        )
    }
};