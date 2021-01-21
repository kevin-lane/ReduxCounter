import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ReduxCounterWebPartStrings';
import ReduxCounter from './components/ReduxCounter';
import { IReduxCounterProps } from './components/IReduxCounterProps';

export interface IReduxCounterWebPartProps {
  description: string;
  value: number;
}

export default class ReduxCounterWebPart extends BaseClientSideWebPart <IReduxCounterWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReduxCounterProps> = React.createElement(
      ReduxCounter,
      {
        description: this.properties.description,
        value: this.properties.value
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
