import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/core'
import NavFavourites from './NavFavourites'

const NavigateCard = () => {

    const dispath = useDispatch();
    const navigation = useNavigation();


    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning </Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        fetchDetails
                        enableHighAccuracyLocation
                        placeholder="Where to"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        styles={toInputBoxStyles}
                        returnKeyType={'search'}
                        minLength={2}
                        debounce={400}
                        onPress={(data, details = false) => {
                            dispath(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            navigation.navigate("RideOptionsCard")
                        }}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en"
                        }}
                    />
                </View>   
                <NavFavourites />    
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})
