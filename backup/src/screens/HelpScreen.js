// HelpScreen.js

import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>
            Q: Bagaimana cara menambahkan manhwa ke dalam library?
          </Text>
          <Text style={styles.faqAnswer}>
            A: Untuk menambahkan manhwa ke dalam library, Anda dapat pergi ke
            halaman manhwa dan menekan tombol "Tambahkan ke Library".
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>
            Q: Bagaimana cara mengakses history bacaan saya?
          </Text>
          <Text style={styles.faqAnswer}>
            A: Anda dapat melihat riwayat bacaan Anda di halaman "History".
            Riwayat ini mencakup manhwa yang pernah Anda baca beserta halaman
            terakhir yang Anda baca.
          </Text>
        </View>

        {/* Tambahkan pertanyaan dan jawaban lainnya sesuai kebutuhan */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Support</Text>
        <Text style={styles.contactText}>
          Jika Anda memiliki pertanyaan lebih lanjut atau mengalami masalah
          teknis, silakan hubungi tim dukungan kami di support@example.com
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#355a9c',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontSize: 16,
    marginBottom: 4,
    color: '#fff',
  },
  faqAnswer: {
    fontSize: 16,
    color: '#222',
  },
  contactText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default HelpScreen;
