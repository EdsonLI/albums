import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ( {onPress, children} ) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity 
            onPress={ onPress }
            style={ buttonStyle }
        >
            <Text style={ textStyle }>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;