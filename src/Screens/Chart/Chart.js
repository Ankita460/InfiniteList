import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Header from '../../Component/Header'
import{View, Text} from 'react-native'
import strings from '../../constants/lang';

class Chart extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
 
        return (
            <View>
                <Header
          textData={strings.HEADER_CHART}
        
        />
 <AreaChart
                style={{ height: 200 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(255, 0, 0, 0.8)' }}
            >
                <Grid />
                <Text style={{textAlign: 'center', marginBottom: 15}}>Chart1</Text>

            </AreaChart>
            <AreaChart
                style={{ height: 200 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(238, 130, 238, 0.8)' }}
            >
                <Grid />
                <Text style={{textAlign: 'center', marginBottom: 15}}>Chart2</Text>
            </AreaChart>
            <AreaChart
                style={{ height: 200 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid />
                <Text style={{textAlign: 'center', marginBottom: 15}}>Chart3</Text>
            </AreaChart>
            </View>
           
        )
    }
}

export default Chart;