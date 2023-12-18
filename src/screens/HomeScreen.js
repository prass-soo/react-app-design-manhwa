import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  PicHowToFight,
  PicManagerKim,
  PicLookism,
  PicOmniscientReader,
  PicTowerOfGod,
  PicQuestism,
  PicWindBreaker,
  PicGodOfHighSchool,
  PicMaybeMeantToBe,
  PicMistake,
  PicNoblesse,
  PicSoloLeveling,
  PicTheSecretOfAngel,
  PicGirlsWorld,
  PicGoodBadFortune,
  PicSistersWar,
} from './../assets/images/';

const HomeScreen = ({navigation}) => {
  const [isProfileMenuVisible, setProfileMenuVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genres = [
    {id: 'action', title: 'Action'},
    {id: 'romance', title: 'Romantis'},
    {id: 'fantasy', title: 'Fantasi'},
    {id: 'drama', title: 'Drama'},
  ];

  const dummyManhwaData = {
    action: [
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
        name: 'How To Fight',
        image: PicHowToFight,
        sinopsis:
          'How to Fight bercerita tentang seorang tokoh anak laki-laki bernama Hobin yang dikenal lemah. Karena fisiknya yang lemah, Hobin sering dianggap sebagai pecundang di sekolahnya. Tak berhenti di situ, Hobin juga ditindas dan menjadi korban bully di sekolahnya.',
        author: 'Taejoon Park',
      },
    ],
    romance: [
      {
        id: 6,
        name: 'Mistake',
        image: PicMistake,
        sinopsis:
          'Sepasang murid terpaksa menikah karena sebuah video menghebohkan yang tersebar luas. Sekarang, mereka harus menanggung beban dan cemoohan dari orang-orang yang tidak mengetahui cerita sebenarnya di balik video tersebut....',
        author: 'KEVEEEN & Mathcwa',
      },
      {
        id: 7,
        name: 'Maybe Meant To Be',
        image: PicMaybeMeantToBe,
        sinopsis:
          'Sudah berapa tahun kamu tinggal di rumah orang tua? Han Jiah (pengangguran) yang tahun ini berusia 32 tahun, hari ini juga menderita karena masih belum menikah dan bekerja. Tiba-tiba Jim Minchul, sahabat kecil Jiah muncul dan mereka memutuskan untuk menikah!?? Ternyata mereka berdua malah lebih cocok dari yang diperkirakan?!',
        author: 'honeyskin & damcho',
      },
      {
        id: 8,
        name: 'The Secret Of Angel',
        image: PicTheSecretOfAngel,
        sinopsis:
          'bercerita tentang seorang gadis SMA bernama Jukyung yang awalnya sangat tidak percaya diri dengan penampilannya. Sampai kemudian dia mengenal dunia rias wajah.',
        author: 'Yaongyi (Kim Nayoung)',
      },
    ],
    fantasy: [
      {
        id: 9,
        name: 'Omniscient Reader',
        image: PicOmniscientReader,
        sinopsis:
          '"Jalan cerita ini... hanya aku yang tahu!" Dunia baru akan datang, maka dunia yang lama harus hancur. Apakah dia bisa menyelamatkan diri dari kehancuran dunia yang lama?!',
        author: 'UMI',
      },
      {
        id: 10,
        name: 'Tower Of God',
        image: PicTowerOfGod,
        sinopsis:
          'Harta, kuasa, dan dendam.. Semua yang kamu inginkan, ada di sini!',
        author: 'SIU',
      },
      {
        id: 11,
        name: 'Solo Leveling',
        image: PicSoloLeveling,
        sinopsis:
          'petualangan protagonis utama bernama Sung Jin Woo. Mengikuti kisah Jin Woo yang dikenal sebagai hunter yang terbilang lemah di dunia dimana makhluk-makhluk seperti monster dan dungeon selalu muncul dan mengancam manusia.',
        author: 'Chu-Gong',
      },
      {
        id: 12,
        name: 'Noblesse',
        image: PicNoblesse,
        sinopsis:
          'Rai, vampir termulia, bangun dari tidur panjangnya selama 820 tahun. Ia harus memulai hidup barunya sebagai pelajar di sekolah yang didirikan pelayan setianya. Namun hari-harinya terganggu dengan munculnya serangan-serangan misterius dari kelompok yang menyebut dirinya "Unions".',
        author: 'Jeho Son & Kwangsu Lee',
      },
      {
        id: 13,
        name: 'The God of HighSchool',
        image: PicGodOfHighSchool,
        sinopsis:
          'turnamen pertandingan bela diri untuk siswa sekolah di Korea Selatan hingga kelak sampai di tingkat dunia. Episode pertama diawali dengan munculnya tiga orang kriminal yang memeras sosok Park Mujin, yang ternyata politisi dan anggota Majelis Nasional Korea.',
        author: 'Yong Je Park',
      },
    ],
    drama: [
      {
        id: 14,
        name: "Girl's World",
        image: PicGirlsWorld,
        sinopsis: 'Jadi bebek di antara para angsa? We will surive!',
        author: 'Morangg',
      },
      {
        id: 15,
        name: 'Sisters at War',
        image: PicSistersWar,
        sinopsis:
          'Won Rion dan Chu Haera adalah murid juara 1 dan juara 2 di sebuah SMA kesenian. Keduanya sama-sama jenius dan seniman yang berbakat, namun memiliki nasib hidup yang jauh berbeda. Pada suatu hari, Chu Haera menemukan bukti-bukti yang membuatnya curiga kalau Won Rion yang selama ini dikenalnya adalah Won Rion ‘palsu’, dan kebenaran yang kemudian tersingkap pun menyulut kompetisi berdarah di antara mereka! ',
        author: 'KMK',
      },
      {
        id: 16,
        name: 'GOOD/BAD FORTUNE',
        image: PicGoodBadFortune,
        sinopsis:
          'Hati-hati! Jika bertemu mereka, nasib kalian akan berubah...!',
        author: 'Ariel Duyung',
      },
    ],
  };

  const toggleProfileMenu = () => {
    setProfileMenuVisible(!isProfileMenuVisible);
  };

  const navigateTo = screen => {
    setProfileMenuVisible(false);
    if (screen === 'Logout') {
      navigation.navigate('Login');
    } else {
      navigation.navigate(screen);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);

    if (!query) {
      setSelectedGenre(null);
      setSearchResults([]);
      return;
    }

    const results = genres.reduce((acc, genre) => {
      const genreData = dummyManhwaData[genre.id] || [];
      const genreResults = genreData.filter(manhwa =>
        manhwa.name.toLowerCase().includes(query.toLowerCase()),
      );

      if (genreResults.length > 0) {
        setSelectedGenre(genre.id);
        return genreResults;
      }

      return acc;
    }, []);

    setSearchResults(results);
  };

  const renderProfileMenu = () => {
    if (!isProfileMenuVisible) {
      return null;
    }

    const profileOptions = [
      {name: 'History', icon: 'history', screen: 'History'},
      {name: 'Help', icon: 'question-circle', screen: 'Help'},
      {name: 'Logout', icon: 'sign-out'},
    ];

    return (
      <View style={styles.profileMenu}>
        {profileOptions.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => navigateTo(option.name)}>
            <View style={styles.profileMenuItem}>
              <Icon
                name={option.icon}
                size={20}
                color="#000"
                style={styles.profileMenuIcon}
              />
              <Text style={styles.profileMenuText}>{option.name}</Text>
            </View>
            {index < profileOptions.length - 1 && (
              <View style={styles.separatorLine} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderManhwaItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {manhwa: item})}>
      <View style={styles.manhwaItemContainer}>
        <Image source={item.image} style={styles.manhwaImage} />
        <Text style={styles.manhwaName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSeparator = () => <View style={styles.separatorLine} />;

  const renderGenreItem = ({item, index}) => {
    if (selectedGenre && item.id !== selectedGenre) {
      return null;
    }

    return (
      <View style={styles.genreContainer}>
        <Text style={styles.genreTitle}>{item.title}</Text>
        <FlatList
          data={
            searchResults.length > 0
              ? searchResults
              : dummyManhwaData[item.id] || []
          }
          renderItem={renderManhwaItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={renderSeparator}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {index < genres.length - 1 && <View style={styles.separatorLine} />}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, {flex: 1}]}>Manhwa Reader</Text>
        <View style={styles.separatorLine} />
        <TouchableOpacity onPress={toggleProfileMenu}>
          <Icon
            name="ellipsis-v"
            size={30}
            color="#000"
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
      {renderProfileMenu()}

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari..."
          onChangeText={text => handleSearch(text)}
          value={searchQuery}
        />
      </View>

      <FlatList
        data={genres}
        renderItem={renderGenreItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#355a9c',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 10,
  },
  profileIconContainer: {
    alignSelf: 'flex-end',
  },
  profileIcon: {
    width: 10,
    height: 30,
    borderRadius: 15,
  },
  headerTitle: {
    fontSize: 24,
    marginLeft: 5,
    color: '#fff',
    fontFamily: 'Satisfy-Regular',
  },
  profileMenu: {
    position: 'absolute',
    width: 250,
    top: 60,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    zIndex: 1,
  },
  profileMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileMenuIcon: {
    marginRight: 10,
  },
  profileMenuText: {
    fontSize: 16,
    fontFamily: 'DidactGothic-Regular',
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  genreContainer: {
    marginTop: 20,
  },
  genreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  manhwaItemContainer: {
    marginRight: 10,
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
  manhwaAuthor: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
});

export default HomeScreen;
