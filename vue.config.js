module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pagina_web_la_gran_ola/' 
    : '/',
  transpileDependencies: true
}
