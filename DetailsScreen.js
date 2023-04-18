import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ navigation }) {
  const [trails, setTrails] = useState([]);

useEffect(() => {
  fetch('http://192.168.1.200:3000/trails')
    .then(response => response.json())
    .then(data => {
      setTrails(data);
      console.log(data);
    })
    .catch(error => console.error(error));
}, []);

  return (
    <View>
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{ color: 'black', fontSize: 20, }}>Trail Information</Text>
    <View>
      <Text style={{ color: 'black', fontSize: 20, }}>Trails</Text>
      {trails.map(trail => (
        <View key={trail.id}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold'}}>{trail.name}</Text>
          <Text style={{ color: 'black'}}>Location: {trail.location}</Text>
          <Text style={{ color: 'black'}}>Difficulty: {trail.difficulty}</Text>
        </View>
      ))}
    </View>
    </View>
    <View style={{alignItems: 'center', position: 'absolute', bottom: 20}}>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        
       />
       </View>
    </View>
  );
}

export default DetailsScreen;
