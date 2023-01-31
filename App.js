import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Product from './src/srceens/product_list/list1';
export default function App() {
  const[status, setStatus] = useState(false);

  const listProducts = [
    {id:1, name: 'Sky', mota: 'beauty',
    linkimage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F835370890%2Fphoto%2Fsunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DzGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdusk-sky&tbnid=VUWeNoqXMQRx4M&vet=12ahUKEwiQ0P61s_H8AhXaxosBHWYmDoIQMygCegUIARDkAQ..i&docid=TroR6sxSkGoCaM&w=612&h=408&q=sky&ved=2ahUKEwiQ0P61s_H8AhXaxosBHWYmDoIQMygCegUIARDkAQ'},
    {id:2, name:'ocean', mota: 'beauty',
    linkimage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvcdn1-dulich.vnecdn.net%2F2018%2F06%2F19%2FPhu-Quoc-honeymoon-beach.jpg%3Fw%3D1200%26h%3D0%26q%3D100%26dpr%3D1%26fit%3Dcrop%26s%3Dg-Omn4qgZxh3okJe7scP_A&imgrefurl=https%3A%2F%2Fvnexpress.net%2Fnha-trang-phu-quoc-vao-top-50-noi-co-bai-bien-dep-nhat-the-gioi-3765625.html&tbnid=6SWM5pZ4aVub4M&vet=12ahUKEwiIg4frs_H8AhVVw4sBHeSvBFIQMygHegUIARDqAQ..i&docid=qRNG0c35NgcVPM&w=1024&h=768&q=bi%E1%BB%83n&ved=2ahUKEwiIg4frs_H8AhVVw4sBHeSvBFIQMygHegUIARDqAQ'},
    {id: 3, name:'Space', mota: 'beauty',
    linkimage:'https://www.google.com/imgres?imgurl=https%3A%2F%2Flive-production.wcms.abc-cdn.net.au%2F8393f16b3a14cd32d0d5d75c1c05d56b%3Fimpolicy%3Dwcms_crop_resize%26cropH%3D1080%26cropW%3D1918%26xPos%3D1%26yPos%3D0%26width%3D862%26height%3D485&imgrefurl=https%3A%2F%2Fwww.abc.net.au%2Feducation%2Fdoes-space-go-on-forever%2F14053466&tbnid=JfOItDhUmH8MbM&vet=12ahUKEwik-7nEtPH8AhXkhMYKHetVDt4QMygEegUIARDpAQ..i&docid=NxuAoEFl2CMv_M&w=862&h=485&q=space&hl=en-GB&ved=2ahUKEwik-7nEtPH8AhXkhMYKHetVDt4QMygEegUIARDpAQ'}
  ];
  return (
    <View style={styles.container}>
      <Text>Họ và tên: Hoàng Ngọc Quyết</Text>
      <Text>MSV: PH27643</Text>
    <Button 
    title="Thêm"
    onPress={() => setStatus(!status)}
    />
    {
      status
      ?
      <>
      <View style={styles.layoutname}>
        <TextInput style={styles.layouttext}>
        Tên
        </TextInput>
        <TextInput style={styles.layouttext}>
         Mô tả
        </TextInput>
        <TextInput style={styles.layouttext}>
        Link ảnh
        </TextInput>

        <Button
        title='Cancel'
        onPress={() => setStatus(!status)}
        />
        <Button style={styles.button}
        title='Save'
        />
      </View>
      
      </>
      :null
    }
    <View style={styles.layoutview1}>
      <Product
      data = {listProducts}
      />
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop: 10,
  },
  layoutview1: {
    width: 300,
    height: 300,
    borderStyle: 'solid',
    borderColor: "#000000",
    borderWidth: 1,
    marginTop:20,
    padding:10,
    borderRadius: 10,
  },
  layoutname:{
    width: 200,
    height:200,
    borderStyle: 'solid',
    borderColor: "#000000",
    marginTop:20,
    alignItems:'center',
    borderWidth: 1,
  },
  layouttext:{
    width: 200,
    height:20,
    borderStyle: 'solid',
    borderColor: "#000000",
    marginTop:20,
    
    
  }
});
