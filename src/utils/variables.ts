import { TestmonialsProps } from "@/@types/testmonial"

export const swiperBreakpoints = {
    400: { slidesPerView: 2 },
    568: { slidesPerView: 2 },
    620: { slidesPerView: 2 },
    830: { slidesPerView: 3 },
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
    }
]