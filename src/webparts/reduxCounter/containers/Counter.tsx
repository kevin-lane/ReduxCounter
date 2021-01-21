import { DefaultButton } from 'office-ui-fabric-react';
import * as React from 'react';
import { IReduxCounterProps } from '../components/IReduxCounterProps';
import Output from '../components/CounterOutput/Output';
import { ICounterState } from './ICounterState';

export default class Counter extends React.Component<IReduxCounterProps, ICounterState> {
    /**
     *
     */
    constructor(props: IReduxCounterProps) {
        super(props);
        this.state = {
            counter: 0
        }       
    }

    private counterOnIncrement() {
        console.log("Counter Increment");
        this.setState({ counter: this.state.counter + 1 });
        console.log(this.state.counter);        
    }

    private counterOnDecrement() {
        console.log("Counter Decrement");
        this.setState({ counter: this.state.counter - 1 });
    }
    
    public render() : React.ReactElement<IReduxCounterProps> {
        return(
            <div>
                <Output value={this.state.counter} description="test" />
                <br></br>
                <DefaultButton text="Increment" onClick={() => this.counterOnIncrement()} />
                <DefaultButton text="Decrement" onClick={() => this.counterOnDecrement()} />
            </div>
        );
    }
}