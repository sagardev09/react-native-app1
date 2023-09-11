import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

export default function Toast({ isVisible, onHide }) {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        if (isVisible) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();

            // Automatically hide the toast after a certain duration (e.g., 3 seconds)
            const hideTimeout = setTimeout(() => {
                hideToast();
            }, 1500);

            return () => clearTimeout(hideTimeout);
        } else {
            hideToast();
        }
    }, [isVisible, fadeAnim]);

    const hideToast = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            onHide();
        });
    };

    return (
        <Animated.View style={[styles.toastContainer, { opacity: fadeAnim }]}>
            <Text style={styles.toastText}>please fill all the fields</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    toastContainer: {
        backgroundColor: '#6AC47E',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
    },
    toastText: {
        color: 'white',
        fontSize: 16,
    },

});
