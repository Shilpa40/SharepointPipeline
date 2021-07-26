import * as React from 'react';
import styles from './SharePointPipeline.module.scss';
import { ISharePointPipelineProps } from './ISharePointPipelineProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SharePointPipeline extends React.Component<ISharePointPipelineProps, {}> {
  public render(): React.ReactElement<ISharePointPipelineProps> {
    return (
      <div className={ styles.sharePointPipeline }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome hello hiiii  to the First SPFx Project using Azure Devops and Github Project!</span>
              <p className={ styles.subTitle }>First Continuous Integration and Continuous Deployment Pipeline..</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
