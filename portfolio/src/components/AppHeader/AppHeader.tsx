import * as React from 'react';
import './AppHeader.scss';
import { Stack, Text } from 'office-ui-fabric-react';
import { CommunicationColors } from '@uifabric/fluent-theme/lib/fluent/FluentColors';

/**
 * @function AppHeader
 * @param props 
 */
export const AppHeader = (props : any) => {
    return (
        <Stack style={{background: 'rgb(37, 142, 222)', height: '40px'}} horizontal>
            <Text style={{color: 'black', fontWeight: 'bold'}} variant='large'>Louis Magdaleno</Text>
        </Stack>
    );
};