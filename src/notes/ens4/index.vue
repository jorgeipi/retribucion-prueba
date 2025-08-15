<script setup>
import BlockText from '@/components/Title/BlockText.vue';
import BlockBackgroundImage from '@/components/background/BlockBackgroundImage.vue';
import BlockImage from '@/components/img/BlockImage.vue';
import BlockSocialMedia from '@/components/social/BlockSocialMedia.vue';
import BlockBtnSocialMedia from '@/components/social/BlockBtnSocialMedia.vue';
import { computed, onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init({
        once: false,
        mirror: true,
        duration: 500,
        easing: 'ease-in-out',
    });
});
</script>

<template>
    <div class="nota">
        <BlockText tag="h1" class="blockipi-title" data-aos="fade-up">
            Escuelas Nacionales de Supercómputo & IA
        </BlockText>
        <BlockText tag="p" class="blockipi-fecha" data-aos="fade-up">2025</BlockText>

        <div class="blockipi-flex blockipi-align-center blockipi-justify-center">
            <div class="blockipi-bottomsubtitle" data-aos="fade-up">
                <BlockText tag="p"><strong>Sectores beneficiados:</strong></BlockText>
            </div>
        </div>

        <BlockText tag="p" data-aos="fade-up">
            Estudiantes de licenciatura, posgrado y profesionales en las áreas STEM de diversas universidades e
            instituciones de investigación en todo el país. 
        </BlockText>

        <BlockBackgroundImage data-aos="fade-up" src="/note-ens4/assets/imgs/240_estudiantes-back.png"
            alt="460 estudiantes en el IPICYT" class="blockipi_backestudiantes">
            <BlockImage data-aos="fade-in" src="/note-ens4/assets/imgs/240_estudiantes.png"
                alt="460 estudiantes en el IPICYT" class="blockipi_backestudiantes-img" />
        </BlockBackgroundImage>

        <BlockSocialMedia>
            <BlockText tag="p" data-aos="fade-right">Compartir:</BlockText>
            <BlockBtnSocialMedia data-aos="fade-left">FB</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">X</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">In</BlockBtnSocialMedia>
        </BlockSocialMedia>

        <BlockText tag="p" data-aos="fade-up">
            Las Escuelas Nacionales de Supercómputo no son solo programas educativos; son una inversión estratégica en
            el talento y el futuro de México. A través de la capacitación de vanguardia en <strong
                class="strong-purple">cómputo de alto rendimiento (HPC) & IA,</strong> estamos cosechando logros
            extraordinarios y consolidando un profundo compromiso social.
        </BlockText>

        <div>
            <BlockImage data-aos="fade-in" src="/note-ens4/assets/imgs/2_anios_realizando.png" alt="" />
        </div>

        <BlockText tag="p" data-aos="fade-up">
            Más allá de los números, el verdadero impacto de las Escuelas Nacionales de Supercómputo reside en su
            compromiso social. Estamos empoderando a los jóvenes talentos de México con las herramientas y el
            conocimiento necesarios para acelerar la solución de problemas críticos, fomentar la innovación y la
            competitividad y además inspirar a las futuras generaciones de científicos e ingenieros, asegurando un flujo
            continuo de talento en áreas críticas.
        </BlockText>

        <BlockBackgroundImage data-aos="fade-up" src="/note-ens4/assets/imgs/aplicaciones_back.png" alt=""
            class="blockipi_backaplicaciones">
            <div class="blockipi_aplicaciones">
                <div class="blockipi_aplicaciones-list">
                    <div class="blockipi_aplicaciones-item" data-aos="fade-right">
                        <BlockImage class="blockipi_aplicaciones-icono" src="/note-ens4/assets/imgs/icono-1.png"
                            alt="" />
                        <BlockText class="blockipi_aplicaciones-text" tag="p">
                            Aplicaciones en Biomedicina Molecular
                        </BlockText>
                    </div>
                    <div class="blockipi_aplicaciones-item" data-aos="fade-left">
                        <BlockImage class="blockipi_aplicaciones-icono" src="/note-ens4/assets/imgs/icono-2.png"
                            alt="" />
                        <BlockText class="blockipi_aplicaciones-text" tag="p">
                            Aplicaciones para la Remoción de Contaminantes del Agua
                        </BlockText>
                    </div>
                    <div class="blockipi_aplicaciones-item" data-aos="fade-right">
                        <BlockImage class="blockipi_aplicaciones-icono" src="/note-ens4/assets/imgs/icono-3.png"
                            alt="" />
                        <BlockText class="blockipi_aplicaciones-text" tag="p">
                            Aplicaciones para el Estudio del Cambio Climático
                        </BlockText>
                    </div>
                    <div class="blockipi_aplicaciones-item" data-aos="fade-left">
                        <BlockImage class="blockipi_aplicaciones-icono" src="/note-ens4/assets/imgs/icono-4.png"
                            alt="" />
                        <BlockText class="blockipi_aplicaciones-text" tag="p">
                            Análisis de Series de Tiempo
                        </BlockText>
                    </div>
                </div>
                <a class="blockipi_aplicaciones-button" data-aos="fade-in">
                    <strong class="strong-purple">Mas información</strong>
                </a>
            </div>
        </BlockBackgroundImage>

        <div>
            <BlockImage data-aos="fade-in" src="/note-ens4/assets/imgs/4-ventajas.png" alt="" />
        </div>

        <div>
            <div class="blockipi_ventajas">
                <div class="blockipi_ventajas-item" data-aos="fade-right">
                    <div class="blockipi_ventajas-boxitem">
                        <div class="blockipi_ventajas-boxicono">
                            <BlockImage class="blockipi_ventajas-icono" src="/note-ens4/assets/imgs/icono-saludo.png"
                                alt="" />
                        </div>
                        <BlockText class="blockipi_ventajas-text" tag="p">Escuelas sin costo</BlockText>
                    </div>
                </div>
                <div class="blockipi_ventajas-item" data-aos="fade-left">
                                        <div class="blockipi_ventajas-boxitem">
                    <div class="blockipi_ventajas-boxicono">
                        <BlockImage class="blockipi_ventajas-icono" src="/note-ens4/assets/imgs/icono-bus.png" alt="" />
                    </div>
                    <BlockText class="blockipi_ventajas-text" tag="p">Beca para transporte</BlockText>
                    </div>
                </div>
                <div class="blockipi_ventajas-item" data-aos="fade-right">
                                                            <div class="blockipi_ventajas-boxitem">
                    <div class="blockipi_ventajas-boxicono">
                        <BlockImage class="blockipi_ventajas-icono" src="/note-ens4/assets/imgs/icono-sleep.png"
                            alt="" />
                    </div>
                    <BlockText class="blockipi_ventajas-text" tag="p">Beca para hospedaje</BlockText>
                    </div>
                </div>
                <div class="blockipi_ventajas-item" data-aos="fade-left">
                                                                                <div class="blockipi_ventajas-boxitem">
                    <div class="blockipi_ventajas-boxicono">
                        <BlockImage class="blockipi_ventajas-icono" src="/note-ens4/assets/imgs/icono-eat.png" alt="" />
                    </div>
                    <BlockText class="blockipi_ventajas-text" tag="p">Beca de alimentación</BlockText>
                    </div>
                </div>
            </div>
        </div>

        <BlockBackgroundImage data-aos="fade-up" src="/note-ens4/assets/imgs/escuelas-nacionales-back.png"
            alt="" class="blockipi_backescuelas">
            <BlockText tag="p" data-aos="fade-in">
                Las Escuelas Nacionales de Supercómputo son un pilar fundamental para el desarrollo científico y tecnológico de México. <strong>¡Nos comprometemos a seguir formando líderes que construirán un futuro más brillante y próspero para todos!</strong>
            </BlockText>
        </BlockBackgroundImage>
    </div>
</template>

<style scoped lang="scss">
// @use '@styles/base/variables' as v;
@use '@/styles/mixins' as m;

p {
    .strong-purple {
        color: #5C16B8;
    }
}

.blockipi_backestudiantes {
    max-height: 638px;
    height: 638px;
    padding: 0px 40px;

    .blockipi_backestudiantes-img {
        max-width: 790px;
        width: 100%;
    }
}

.blockipi_backaplicaciones {
    min-height: 638px;
    padding: 40px 40px;
    margin-bottom: 140px;

    .blockipi_aplicaciones {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 44px;

        p {
            margin: 0;
            padding: 0;
        }

        .blockipi_aplicaciones-list {
            .blockipi_aplicaciones-item {
                border-bottom: 1px solid #FFF;

                &:first-of-type {
                    border-top: 1px solid #FFF;
                }

                padding: 35px 10px;

                display: flex;
                align-items: center;
                justify-content: start;
                gap: clamp(30px, 5vw, 68px);

                .blockipi_aplicaciones-icono {
                    margin: 0;
                    padding: 0;
                }

                .blockipi_aplicaciones-text {
                    color: #FFF;
                    font-size: clamp(18px, 5vw, 24px);
                    font-style: normal;
                    font-weight: 300;
                    line-height: normal;
                }
            }
        }

        .blockipi_aplicaciones-button {
            display: inline-flex;
            border-radius: 93px;
            background: #FFF;

            padding: 13px clamp(26px, 5vw, 61px);

            text-align: center;
            font-size: clamp(18px, 5vw, 24px);
            font-style: normal;
            line-height: normal;
            color: #5C16B8;

            &:hover {
                cursor: pointer;
                background: #5C16B8;
                color: #FFF;
            }
        }
    }
}

.blockipi_backescuelas{
    min-height: 638px;
    padding: 40px 40px;
    margin: 0;

    p{
        padding: 0;
        margin: 0;
        color: #FFF;
        text-align: center;
        font-size: clamp(18px, 5vw, 30px);
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
}


.blockipi_ventajas {
    max-width: 612px;
    margin: 0px auto;
    padding: 0;
    margin-bottom: 140px;

    .blockipi_ventajas-item {
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #5C16B8;

        &:first-of-type {
            border-top: 1px solid #5C16B8;
        }

        padding: 19px;

        .blockipi_ventajas-boxitem {
            max-width: 350px;
            width: min(350px, 100%);
            display: grid;
            grid-template-columns: 67px 1fr;
            gap: clamp(30px, 5vw, 44px);
        }

        .blockipi_ventajas-boxicono {
            max-width: 67px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: start;

            .blockipi_ventajas-icono {
                margin: 0;
                padding: 0;
            }
        }

        .blockipi_ventajas-text {
            text-align: start;
            padding: 0;
            margin: 0;
            font-size: clamp(18px, 5vw, 24px);
            font-style: normal;
            font-weight: 300;
            line-height: clamp(30px, 5vw, 39px);
            /* 162.5% */
        }
    }
}
</style>