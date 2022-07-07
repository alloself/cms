module.exports = {
    outputDir: '../../public/assets/account',
    publicPath: process.env.NODE_ENV === 'production' ? '/assets/account/' : '/account',
    indexPath:
        process.env.NODE_ENV === 'production' ? '../../../resources/views/pages/account.blade.php' : 'index.html',
};
