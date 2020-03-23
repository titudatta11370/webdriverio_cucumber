
let creds = {
    user: 'tdatta@exiger.com',
    password: 'Admin1234$'
};

if (process.env.USE_QA === 'true') {
    creds = {
        user: 'test',
        password: 'test'
    }
}

module.exports = creds;