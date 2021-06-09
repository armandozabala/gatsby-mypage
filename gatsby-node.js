const path = require('path');

exports.createPages = async({graphql, actions}) => {
    actions.createPage({
        path: 'dummy',
        component: path.resolve('./src/templates/education.js')
    })
}