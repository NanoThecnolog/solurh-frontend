import { BannerProps } from "@/@types/bannerTemplate"
import { TestmonialsProps } from "@/@types/testmonial"

export const whatsappLink = "https://api.whatsapp.com/send/?phone=5522992905210&text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida%21%21&type=phone_number&app_absent=0"

export const swiperBreakpoints = {
    400: { slidesPerView: 1 },
    568: { slidesPerView: 1 },
    620: { slidesPerView: 1 },
    830: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1250: { slidesPerView: 3 },
    1440: { slidesPerView: 3 },
    1650: { slidesPerView: 3 },
    1810: { slidesPerView: 3 },
}
export const testmonials: TestmonialsProps[] = [
    {
        name: 'Solutions Engenharia',
        imgPath: '/img/clients/SE.jpeg',
        text: 'A SoluRH foi essencial para enriquecer nossa equipe com talentos que realmente fazem a diferença. Parceria sinônimo de sucesso!',
        starsCount: 5,
    },
    {
        name: 'Montana Hydro',
        imgPath: '/img/clients/M.png',
        text: 'A Solurh foi muito atenciosa conosco, apresentou custos acessíveis, compreendeu o perfil da vaga, entendeu nossa urgência e rapidamente nos enviou ótimos currículos dentro do perfil desejado, além de nos dar todo o suporte necessário no decorrer do processo seletivo. Eu super indico eles e espero manter a parceria por longos anos.',
        starsCount: 5,
    },
    {
        name: 'Imani Consultoria',
        imgPath: '/img/clients/I.jpeg',
        text: 'A equipe da IMANI CONSULTORIA expressa entusiasmo ao compartilhar uma jornada colaborativa e de crescimento com a SOLURH, destacando resultados extraordinários desde o início da parceria.',
        starsCount: 5,
    },
    {
        name: 'Lifting Group',
        imgPath: '/img/clients/Lift.png',
        text: 'A SoluRH é sinônimo de compromisso e competência. Essencial para o recrutamento e seleção, são cirúrgicos nas escolhas.',
        starsCount: 5,
    },
    {
        name: 'Point S',
        imgPath: '/img/clients/PointS.png',
        text: 'Nossa experiência com a consultoria está sendo excelente, principalmente na seleção de perfis específicos como mecânicos e vendedores para nossas lojas de auto centers, em diversas regiões do Brasil. O comprometimento e a agilidade da equipe têm feito toda a diferença. Além disso, percebo grande cuidado no alinhamento dos candidatos com a cultura da nossa empresa, o que agiliza o processo de integração. Sem dúvida, essa parceria tem agregado muito valor ao nosso negócio. Muito obrigado!',
        starsCount: 5
    },
    {
        name: 'MService',
        imgPath: '/img/clients/MS5.png',
        text: 'A Solurh foi essencial em um momento estratégico da nossa empresa. A consultoria trouxe clareza, estrutura e soluções práticas para nossos desafios. O profissionalismo e a escuta ativa da equipe fizeram toda a diferença. Recomendo com confiança!',
        starsCount: 5
    }
]

export const bannersContent: BannerProps[] = [
    {
        bannerImg: '/img/2-2.png',
        buttonText: 'Como podemos te ajudar?',
        buttonLink: whatsappLink,
        textHighLight: 'Transformamos a Gestão de Pessoas em Resultados Reais',
        logoImg: '/img/Logomarca/horizontal-white.png',
        subText: 'Na SoluRH, unimos estratégia, experiência e sensibilidade humana para desenvolver soluções personalizadas em Recursos Humanos.',
        textParagraph: 'Somos a SoluRH'
    },
    {
        bannerImg: '',
        buttonText: '',
        textHighLight: 'Descubra os Melhores Talentos para o seu Negócio',
        logoImg: '/img/Logomarca/horizontal-white.png',
        subText: 'Nossos serviços são especializados em encontrar soluções com foco no crescimento da sua empresa!',
        textParagraph: 'Soluções Personalizadas'
    },
    {
        bannerImg: '',
        buttonText: '',
        textHighLight: 'Consultoria estratégica em Recursos Humanos',
        logoImg: '/img/Logomarca/horizontal-white.png',
        subText: 'Unimos experiência e inovação para impulsionar negócios',
        textParagraph: 'Mais de 10 anos conectando pessoas e empresas'
    }
]

export const solurhInformation = {
    email: 'contato@solurh.com.br',
    telefones: {
        rj: '(22) 99290-5210',
        sp: '(11) 97608-5287',
        mg: '(34) 9906-9116',
    },
    whatsapp: '(22) 99290-5210',
    socialMedia: {
        linkedin: 'https://www.linkedin.com/in/tania-viannarh/',
        instagram: 'https://www.instagram.com/solu.rh?utm_source=qr&igsh=d2hkN3pweThtcHAz'
    }

}

