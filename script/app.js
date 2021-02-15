var app = new Vue({
    el: '#app',
    data: {
        page: 'home',
        seen: false,
        instagramUrl: 'https://www.instagram.com/santossamuelplus',
        gmailUrl: 'mailto:santossamuelplus@gmail.com?subject=Olá, Samuel! Vim pelo site!',
        githubUrl: 'https://github.com/Santos-Samuels',
        linkedinUrl: 'https://www.linkedin.com/in/samuel-santos-0aaa2a1b3',
        whatsappUrl: 'https://api.whatsapp.com/send?l=pt_BR&phone=557581530423&text=Olá, Samuel! Vim pelo site!',

        projects: [
            {
                title: 'Web Site Pessoal v2.0',
                tecnology: 'HTML e CSS e Vue.js',
                description: 'Remake de Web Site Pessoal, agora com cara nova e utilizando novas tecnologias.',
                codeUrl: 'https://github.com/Santos-Samuels/my-web-site-v2.0',
                demoUrl: 'https://my-web-site-v2-0.vercel.app/'
            },
            {
                title: 'Cátalogo Interativo',
                tecnology: 'HTML e CSS e JavaScript',
                description: 'Site para exposição de roupas com possíbilidade de interação com a loja via WhatsApp.',
                codeUrl: 'https://github.com/Santos-Samuels/catalogo-vendas',
                demoUrl: 'https://catalogo-vendas.vercel.app/'
            },
            {
                title: 'Web Site Pessoal',
                tecnology: 'HTML e CSS e JavaScript',
                description: 'Pensando em reunir minhas experiências de aprendizado como desenvolvedor, criei essa página.',
                codeUrl: 'https://github.com/Santos-Samuels/my-web-site',
                demoUrl: '/'
            },
            {
                title: 'Boletim de Notícias',
                tecnology: 'HTML',
                description: 'Colaboração na edição especial do Boletim, projeto da Comunicação do IFBA campus Feira de Santana.',
                codeUrl: 'https://github.com/Santos-Samuels/Boletim-Edicao-Especial',
                demoUrl: 'https://boletim-edicao-especial-j59opzxaj.vercel.app/'
            }
        ],

        posts: [
            { text: 'Aprendendo Vue.js', liked: false }
        ]
    },

    methods: {
        showMenu() {
            this.seen = !this.seen
        },
        toggleLike(post) {
            post.liked = !post.liked
        }
    }
})