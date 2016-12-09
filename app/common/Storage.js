import React from 'react-native';

const { AsyncStorage } = React;

class DeviceStorage {
    static get(key) {
        return AsyncStorage.getItem(key).then((value) => {
            const jsonValue = JSON.parse(value);
            return jsonValue;
        });
    }

    static save(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    static update(key, value) {
        return DeviceStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }

    static delete(key) {
        return AsyncStorage.removeItem(key);
    }
}

export default DeviceStorage;
