import * as React from 'react';
import './AppHeader.scss';
import { Stack, Text } from 'office-ui-fabric-react';

/**
 * @function AppHeader
 * @param props 
 */
export const AppHeader = (props : any) => {
    return (
        <Stack horizontal>
            <Text>Louis Magdaleno</Text>
        </Stack>
    );
};