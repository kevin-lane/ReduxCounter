import * as React from 'react';
import { IReduxCounterProps } from '../IReduxCounterProps';

export default class Output extends React.Component<IReduxCounterProps, {}> {
    public render(): React.ReactElement<IReduxCounterProps> {
        return(
            <h3>Counter value: {this.props.value}</h3>
        );
    }
}
