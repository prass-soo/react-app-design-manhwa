import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  PicManagerKim,
  PicLookism,
  PicOmniscientReader,
  PicTowerOfGod,
  PicQuestism,
  PicWindBreaker,
  PicMaybeMeantToBe,
  PicSoloLeveling,
  PicGoodBadFortune,
  PicSistersWar,
} from './../assets/images/';

const LibraryScreen = ({navigation}) => {
  const savedManhwa = [
    {
      id: 1,
      name: 'Lookism',
      image: PicLookism,
      sinopsis:
        'Lookism mengisahkan tentang seorang remaja laki-laki bernama Park Hyung Seok yang mengalami bully penampilannya yang dianggap tidak menarik. Bully yang begitu parah membuatnya memutuskan untuk pindah rumah dan sekolah. Tak disangka, keputusan pindah itu ternyata benar-benar mengubah kehidupan Park Hyung Seok.',
      author: 'Park Tae Joon',
    },
    {
      id: 2,
      name: 'Wind Breaker',
      image: PicWindBreaker,
      sinopsis:
        'Jahyun, seorang murid teladan di sekolah yang senang bersepeda sendirian. Namun, karena kemampuannya yang hebat dalam bersepeda, ia terus berhadapan dengan crew sepeda di sekitarnya.',
      author: 'Yongseok Jo',
    },
    {
      id: 3,
      name: 'Questism',
      image: PicQuestism,
      sinopsis:
        'Questism adalah manhwa yang mengisahkan Kim Soohyun, seorang siswa sekolah menengah yang merasa lemah dan tidak bisa melawan teman-teman yang berbuat jahat. Suatu hari, kehidupannya berubah ketika ia mendapatkan sebuah quest yang mengubahnya menjadi seorang pahlawan. Cerita ini penuh dengan petualangan dan pertarungan epik di dunia mistis.',
      author: 'YuNuni dan TAEWAN (PTJ COMPANY)',
    },
    {
      id: 4,
      name: 'Manager Kim',
      image: PicManagerKim,
      sinopsis:
        'Manager Kim adalah manhwa yang mengisahkan petualangan seorang pria paruh baya bernama Kim, mantan agen khusus, yang kembali beraksi demi menyelamatkan sang anak',
      author: 'Park Tae-Jun Comics Company',
    },
    {
      id: 5,
      name: 'Maybe Meant To Be',
      image: PicMaybeMeantToBe,
      sinopsis:
        'Sudah berapa tahun kamu tinggal di rumah orang tua? Han Jiah (pengangguran) yang tahun ini berusia 32 tahun, hari ini juga menderita karena masih belum menikah dan bekerja. Tiba-tiba Jim Minchul, sahabat kecil Jiah muncul dan mereka memutuskan untuk menikah!?? Ternyata mereka berdua malah lebih cocok dari yang diperkirakan?!',
      author: 'honeyskin & damcho',
    },
    {
      id: 6,
      name: 'Omniscient Reader',
      image: PicOmniscientReader,
      sinopsis:
        '"Jalan cerita ini... hanya aku yang tahu!" Dunia baru akan datang, maka dunia yang lama harus hancur. Apakah dia bisa menyelamatkan diri dari kehancuran dunia yang lama?!',
      author: 'UMI',
    },
    {
      id: 7,
      name: 'Tower Of God',
      image: PicTowerOfGod,
      sinopsis:
        'Harta, kuasa, dan dendam.. Semua yang kamu inginkan, ada di sini!',
      author: 'SIU',
    },
    {
      id: 8,
      name: 'Solo Leveling',
      image: PicSoloLeveling,
      sinopsis:
        'petualangan protagonis utama bernama Sung Jin Woo. Mengikuti kisah Jin Woo yang dikenal sebagai hunter yang terbilang lemah di dunia dimana makhluk-makhluk seperti monster dan dungeon selalu muncul dan mengancam manusia.',
      author: 'Chu-Gong',
    },
    {
      id: 9,
      name: 'Sisters at War',
      image: PicSistersWar,
      sinopsis:
        'Won Rion dan Chu Haera adalah murid juara 1 dan juara 2 di sebuah SMA kesenian. Keduanya sama-sama jenius dan seniman yang berbakat, namun memiliki nasib hidup yang jauh berbeda. Pada suatu hari, Chu Haera menemukan bukti-bukti yang membuatnya curiga kalau Won Rion yang selama ini dikenalnya adalah Won Rion ‘palsu’, dan kebenaran yang kemudian tersingkap pun menyulut kompetisi berdarah di antara mereka! ',
      author: 'KMK',
    },
    {
      id: 10,
      name: 'GOOD/BAD FORTUNE',
      image: PicGoodBadFortune,
      sinopsis: 'Hati-hati! Jika bertemu mereka, nasib kalian akan berubah...!',
      author: 'Ariel Duyung',
    },
  ];

  const renderSavedManhwa = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {manhwa: item})}>
      <View style={styles.manhwaItemContainer}>
        <Image source={item.image} style={styles.manhwaImage} />
        <Text style={styles.manhwaName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSeparator = () => <View style={styles.separatorLine} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Library</Text>
      </View>
      <FlatList
        data={savedManhwa}
        renderItem={renderSavedManhwa}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
        numColumns={3}
        contentContainerStyle={styles.manhwaList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#355a9c',
  },
  header: {
    padding: 16,
    backgroundColor: '#23374d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  manhwaList: {
    alignItems: 'center',
    padding: 16,
  },
  manhwaItemContainer: {
    marginRight: 18,
    marginBottom: 16,
  },
  manhwaImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  manhwaName: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
});

export default LibraryScreen;
