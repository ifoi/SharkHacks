import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {

    const Stack = createStackNavigator()

    return (
        <SafeAreaView>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen name="NavigateCard" component={NavigateCard} options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{
                        headerShown: false
                    }}/>
                </Stack.Navigator>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
