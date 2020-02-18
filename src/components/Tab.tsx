import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react'

import ExploreContainer from './ExploreContainer'
import '../pages/Tab1.css'

const Tab = ({ data, index }: { data: Array<any>; index: number }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{`Tab ${index}`}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{`Tab ${index}`}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={`Tab ${index} page`}>
          <IonList inset>
            {data.map(item => (
              <IonItem key={item.line1}>
                <IonLabel>{item.line1}</IonLabel>
                <IonLabel>{item.line2}</IonLabel>
                <IonLabel>{item.line3}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  )
}

export default Tab
