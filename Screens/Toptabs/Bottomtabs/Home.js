import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'



function Home() {

  const [data, setdata] = useState([])
  const [banner1, setbanner1] = useState([])
  const [isloading, setisloading] = useState(true)
  const [services, setservices] = useState([])
  const [staticbanner, setstaticbanner] = useState([])
  const [dianamicbanner, setdianamicbanner] = useState([])
  const [dianamicbanner2, setdianamicbanner2] = useState([])
  const [staticbanner2, setstaticbanner2] = useState([])
  const [digitalcard, setdigitalcard] = useState([])

  const [product, setproduct] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await fetch('https://www.ollz.com/index.php/ceymoxhttp/catalog/homePageData')

    const output = await res.json()
    setbanner1(output.home[0].data)
    setdata(output.home[1].data)
    setservices(output.home[2].data)
    setstaticbanner(output.home[3].data[0].url)
    setdianamicbanner(output.home[4].data)
    setdianamicbanner2(output.home[5].data[0].url)
    setstaticbanner2(output.home[6].data)
    setproduct(output.home[7].products)
    setdigitalcard(output.home[8].data)
    setisloading(false)
  }
  // console.log(banner1)

  // console.log(data)

  const renderItem1 = ({ item }) => {
    return (

      <View style={styles.imagecontainer}>
        <Image
          resizeMode='contain'
          style={{ height: '100%', width: '100%' }}
          source={{ uri: item.url }} />
        


      </View>
    )
  }

  const renderItem2 = ({ item }) => {
    return (

      <View style={{
        width: 100,
        height: 100,
        alignItems: 'center',
        marginTop: 10
      }}>
        <Image
          // resizeMode={'center'}
          style={{ height: 30, width: 30 }}
          source={{ uri: item.url }} />
        <Text style={{color:'black'}}>{item.title}</Text>


      </View>
    )
  }

  const renderItem3 = ({ item }) => {
    return (

      <View style={{
        width: 100,
        height: 100,
        alignItems: 'center',
        marginTop: 10

      }}>
        <Image
          style={{ height: 30, width: 30 }}
          source={{ uri: item.url }} />
        <Text style={{color:'black'}}>{item.title}</Text>


      </View>
    )
  }

  const renderItem6 = ({ item }) => {
    return (

      <View style={styles.productcard}>
        <Image
          resizeMode='contain'
          style={{ height: 120, width: 120, alignSelf: 'center', marginTop: 20 }}
          source={{ uri: item.thumbNail }} />

        <View style={{ marginTop: 20, justifyContent: 'space-around', flexDirection: 'row' }}>
          <Text style={styles.pricetxt}>{item.formattedFinalPrice}</Text>
          <Icon name='local-mall' color={'black'} size={24} />
        </View>
        <View style={{ height: 78, padding: 5 }}>
          <Text style={{ padding: 5, fontSize: 16,color:'black' }}>{item.name}</Text>
        </View>


        <View style={{ marginTop: 2 }}>

          <View style={styles.installmentbox}>
            <Text>installment starting from {item.formattedFinalPrice}</Text>
          </View>


        </View>

      </View>
    )
  }

  
  return (
    <ScrollView>
      {isloading ?
        <View style={styles.rsponselessload}>
          <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>LOADING.....</Text>
        </View> :

        <View style={styles.container}>

          <View style={styles.firstimage}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={banner1}
              renderItem={renderItem1}
            />

          </View>

          <View style={styles.categories}>

            <Text style={styles.headings}>Categories</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={renderItem2}
            />

          </View>



          <View style={styles.services}>

            <Text style={styles.headings}>Services</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={services}
              renderItem={renderItem3}
            />
          </View>

          <View style={styles.twobanner}>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={staticbanner2}
              renderItem={renderItem1}
            />
          </View>

          <View style={styles.static}>

            <Image
              style={{ height: '100%', width: '100%' }}
              source={{ uri: staticbanner }} />

          </View>

          <View style={styles.static}>

            <Image

              style={{ height: '100%', width: '100%' }}
              source={{ uri: dianamicbanner2 }} />

          </View>

          <View style={styles.twobanner}>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dianamicbanner}
              renderItem={renderItem1}
            />
          </View>

          <View style={styles.cardsvw}>
            <Text style={styles.headings}>Featured Products</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={product}
              renderItem={renderItem6}
            />
          </View>

          <View style={styles.twobanner}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={digitalcard}
              renderItem={renderItem1}
            />

          </View>


        </View>

      }

    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    height: 1950,
    backgroundColor: 'white'
  },
  categories: {
    height: '7%',
    // backgroundColor:'red',
    padding: 7,
    alignSelf: 'center'
  },
  firstimage: {
    height: '10%',
    // backgroundColor:'blue'
  },
  rsponselessload: {
    height: 600,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  services: {
    height: '8%',
    // backgroundColor:'pink',
    padding: 10,
    alignSelf: 'center'
  },
  static: {
    height: '12%',
    width: '100%',
    padding: 5,
    // backgroundColor:'black'
  },
  twobanner: {
    height: '10%',
    width: '100%',
    // backgroundColor:'grey',
    padding: 5
  },
  cardsvw: {
    height: '22%',
    // backgroundColor:'yellow',
    padding: 10
  },
  productcard: {
    height: 350,
    width: 220,
    borderColor: 'grey',
    borderWidth: 2,
    marginTop: 10,
    padding: 10,
    marginRight: 10,

  },
  installmentbox: {
    height: 60,
    width: 200,
    backgroundColor: 'gainsboro',
    alignSelf: 'center',
    padding: 5

  },
  headings: {
    fontWeight: '700',
    fontSize: 22,
    color: 'black'
  },
  pricetxt:{ 
    fontSize: 22, 
    color: 'black',
     fontWeight: 'bold' 
    },
    imagecontainer:{
      width: 350,
      height: 200,
      alignItems: 'center',
      padding: 5

    }
})