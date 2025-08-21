import { BannerProps } from "@/@types/bannerTemplate";
import { whatsappLink } from "./whatsappLink";

export const bannersContent: BannerProps[] = [
    {
        bannerImg: '/img/tania.png',
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