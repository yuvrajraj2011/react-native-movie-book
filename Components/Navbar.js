import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import LatestMovies from "./LatestMovies";
import MovieDetail from "./MovieDetail";
import TicketBookingDetail from "./TicketBookingDetail";

const Stack = createStackNavigator();

function Navbar() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LatestMovies} options={{ title: 'Latest Movies' }}/>
        <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ title: 'Movie Detail' }}/>
        <Stack.Screen name="TicketBookingDetail" component={TicketBookingDetail} options={{ title: 'Ticket Booking' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;