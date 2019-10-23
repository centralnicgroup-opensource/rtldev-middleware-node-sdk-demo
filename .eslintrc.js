module.exports = {
    'env': {
        'mocha': true,
        'node': true
    },
    'extends': ['standard', 'plugin:json/recommended'],
    'plugins': [
        'markdown'
    ],
    'rules': {
        'no-void': 'off'
    }
}