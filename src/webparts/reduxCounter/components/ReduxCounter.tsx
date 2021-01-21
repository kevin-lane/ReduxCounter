import * as React from 'react';
import styles from './ReduxCounter.module.scss';
import { IReduxCounterProps } from './IReduxCounterProps';
import  Counter  from '../containers/Counter';

export default class ReduxCounter extends React.Component<IReduxCounterProps, {}> {
  public render(): React.ReactElement<IReduxCounterProps> {
    return (
      <div className={ styles.reduxCounter }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <span className={ styles.title }>Redux Counter</span>
            <Counter value={1} description="TEST" />
          </div>
        </div>
      </div>
    );
  }
}
