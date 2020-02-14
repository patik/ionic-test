import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react'

import ExploreContainer from '../components/ExploreContainer'
import './Tab1.css'

const Tab1 = ({ data }: { data: Array<any> }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page">
          <IonList>
            {data.map(item => (
              <IonItem>
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

export default Tab1
