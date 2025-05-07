import SplashScreen from './src/pages/SplashScreen'
import Start from './src/pages/Start'
import SignUp from './src/pages/SignUp/Index'
import SignIn from './src/pages/SignIn/Index'
import Home from './src/pages/Home'
import Signature from './src/pages/Signature'
import Food from './src/pages/Food'
import Drink from './src/pages/Drink'
import Pastries from './src/pages/Pastries'
import Pesanan from './src/pages/Pesanan'
import DetailPesanan from './src/pages/DetailPesanan'
import Profile from './src/pages/Profile'
import ProfileSaya from './src/pages/ProfilSaya' 
import TentangKami from './src/pages/TentangKami'
import Pengaturan from './src/pages/Pengaturan'
import PengaturanBahasa from './src/pages/PengaturanBahasa'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context'; 
import './src/config/Firebase'; // <-- Perubahan di sini

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Start"
            component={Start}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signature"
            component={Signature}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Food"
            component={Food}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Drink"
            component={Drink}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Pastries"
            component={Pastries}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Pesanan"
            component={Pesanan}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailPesanan"
            component={DetailPesanan}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileSaya"
            component={ProfileSaya}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TentangKami"
            component={TentangKami}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Pengaturan"
            component={Pengaturan}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PengaturanBahasa"
            component={PengaturanBahasa}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};


export default App;