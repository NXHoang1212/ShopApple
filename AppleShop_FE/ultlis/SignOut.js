import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SignOut = ({ visible, title, message, onCancelPress, onOKPress }) => {
    return (
        <Modal visible={visible} animationType='fade' transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onCancelPress}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.okButton} onPress={onOKPress}>
                            <Text style={styles.okButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default SignOut

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: '#F2F2F7',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        width: 300,
        height: 150,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        bottom: 5,
        color: 'black',
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
        bottom: 5,
        fontWeight: '400',
        left: 12,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        bottom: 8,
    },
    cancelButton: {
        backgroundColor: '#f71b1b',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginRight: 10,
        width: 90,
    },
    cancelButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    okButton: {
        backgroundColor: '#14d9c8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 80,
    },
    okButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});