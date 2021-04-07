import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Header from '../../Component/Header';
import strings from '../../constants/lang/en'
export default class QrCode extends Component{
    render() {
        return (
            <View>
                      <Header
          textData={strings.HEADER_QRCODE}
        
        />
        <View style={styles.QrCode}>
        <QRCode
            value="http://awesome.link.qr"

          />
        </View>

            </View>
          
        );
      };
}


const styles=StyleSheet.create({
    QrCode:{
        marginHorizontal: 110,
        marginVertical: 30
    }
})