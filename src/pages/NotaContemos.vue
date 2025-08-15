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
        <BlockText tag="h1" class="blockipi-title" data-aos="fade-up">CONTEMOS - Puertas Abiertas de la División de
            Control y Sistemas Dinámicos (DCSD)</BlockText>
        <BlockText tag="p" class="blockipi-fecha" data-aos="fade-up">2025</BlockText>
        <div class="blockipi-flex blockipi-align-center blockipi-justify-center">
            <div class="blockipi-bottomsubtitle" data-aos="fade-up">
                <BlockText tag="p"><strong>Sectores beneficiados:</strong></BlockText>
            </div>
        </div>
        <BlockText tag="p" data-aos="fade-up">Estudiantes de licenciatura con carreras afines a la Ciencia, tecnología,
            Ingeniería y Matemáticas (STEM por sus siglas en inglés)</BlockText>
        <BlockBackgroundImage data-aos="fade-up" src="/note-contemos6/assets/imgs/250-participantes-back.png"
            alt="460 estudiantes en el IPICYT" class="blockipi_backgroundPrincipal">
            <div class="blockflex-imgs blockipi-flex blockipi-flexwrap blockipi-align-center blockipi-justify-center">
                <BlockImage data-aos="fade-right" src="/note-contemos6/assets/imgs/icon-csd.png"
                    alt="460 estudiantes en el IPICYT" class="blockipi_backgroundPrincipal-img" />
                <BlockImage data-aos="fade-left" src="/note-contemos6/assets/imgs/250-participantes-up.png"
                    alt="460 estudiantes en el IPICYT" class="blockipi_backgroundPrincipal-img" />
            </div>
        </BlockBackgroundImage>
        <BlockSocialMedia>
            <BlockText tag="p" data-aos="fade-right">Compartir:</BlockText>
            <BlockBtnSocialMedia data-aos="fade-left">FB</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">X</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">In</BlockBtnSocialMedia>
        </BlockSocialMedia>
        <BlockText tag="p" data-aos="fade-up">El CONTEMOS es un evento diseñado para dar a conocer las líneas de
            investigación y los posgrados de la división de Control y Sistemas Dinámicos, especialmente dirigido a
            estudiantes de últimos semestres interesados en áreas afines.</BlockText>

        <!-- Botones de posgrado -->
        <div class="blockipi-posgrado">
            <a href="" class="blockipi-itemposgrado" data-aos="fade-right">
                <BlockImage src="/note-contemos6/assets/imgs/icon_MCSD.svg" alt="Doctorado" />

                <BlockText tag="p"><strong>Maestría</strong> en Control y Sistemas Dinámicos</BlockText>
            </a>
            <a href="" class="blockipi-itemposgrado" data-aos="fade-left">
                <BlockImage src="/note-contemos6/assets/imgs/icon_DCSD.svg" alt="Doctorado" />

                <BlockText tag="p"><strong>Doctorado</strong> en Control y Sistemas Dinámicos</BlockText>
            </a>
        </div>


        <div class="blockflex-imgs blockipi-flex blockipi-flexwrap blockipi-align-center blockipi-justify-center">
            <BlockImage data-aos="fade-in" src="/note-contemos6/assets/imgs/equipo-principal.png" alt="Doctorado" />

            <div class="blockipi-principales-actividades" data-aos="fade-right">
                <BlockText class="blockipi-principales-actividades_title" tag="p"><strong>Las principales actividades
                        que se desarrollan son:</strong></BlockText>
                <div class="blockipi-actividades">
                    <div class="blockipi-actividades_item">
                        <div class="blockipi-actividades_icon">

                        </div>
                        <BlockText tag="p"><strong>Conexiones de bienvenida</strong> con espacios para la interacción
                            informal y fomentar la conexión entre los participantes.</BlockText>
                    </div>
                    <div class="blockipi-actividades_item">
                        <div class="blockipi-actividades_icon">

                        </div>
                        <BlockText tag="p">
                            <strong>Charlas impartidas por investigadores</strong> de la División de Control y Sistemas
                            Dinámicos (DCSD), con temas teóricos y aplicados.
                        </BlockText>
                    </div>
                    <div class="blockipi-actividades_item">
                        <div class="blockipi-actividades_icon">

                        </div>
                        <BlockText tag="p">
                            <strong>Visitas guiadas a los laboratorios de la División</strong>, lo que les permite
                            conocer de cerca la investigación en acción.
                        </BlockText>
                    </div>
                    <div class="blockipi-actividades_item">
                        <div class="blockipi-actividades_icon">

                        </div>
                        <BlockText tag="p"><strong>Talleres prácticos.</strong></BlockText>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <a href="" class="blockipi-buttonPosgrado" data-aos="zoom-in-up">
                <BlockImage src="/note-contemos6/assets/imgs/icon-csdwhite.png" alt="Doctorado"
                    class="" />
                <BlockText tag="p"><strong>Conoce la División de Control y Sistemas Dinámicos</strong></BlockText>
            </a>
        </div>


        <BlockBackgroundImage data-aos="fade-up" src="/note-contemos6/assets/imgs/17-años-back.png"
            alt="460 estudiantes en el IPICYT" class="blockipi_backcontemos">
            <BlockImage data-aos="zoom-in-up" src="/note-contemos6/assets/imgs/17-años-up.png"
                alt="460 estudiantes en el IPICYT"
                :style="{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }"
                class="blockipi_backcontemos-img" />
        </BlockBackgroundImage>

    </div>
</template>

<style scoped lang="scss">
// @use '@styles/base/variables' as v;
@use '@/styles/mixins' as m;

.blockipi_backgroundPrincipal {
    max-height: 872px;
    height: 872px;
    padding: 0px 40px;
}

.blockipi_backcontemos{
    max-height: 872px;
    height: 872px;
    padding: 0px 40px;
    margin-bottom: 0;

    .blockipi_backcontemos-img{

    }
}

.blockflex-imgs {
    gap: 46px;

    img {
        margin: 0;
    }
}

.blockipi-posgrado {
    max-width: 790px;
    margin: 70px auto;
    padding: 0;
    gap: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @include m.desktop {
        padding: 0 40px;
    }

    @include m.mobile {
        flex-direction: column;
    }

    .blockipi-itemposgrado {
        max-width: 790px;
        border-radius: 12px;
        background: rgba(237, 237, 237);
        padding: 14px 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;

        text-decoration: none;

        @include m.tablet {
            flex-direction: column;
            text-align: center;
        }

        &:hover {
            cursor: pointer;
            filter: brightness(0.9);
        }

        p {
            display: inline-block;
            margin: 0;
            padding: 0;

            color: #000;
            font-family: "Noto Sans";
            font-size: 18px;
            font-style: normal;
            line-height: normal;
            text-decoration: none;
        }

        img {
            margin: 0;
            padding: 0;
        }
    }
}

.blockipi-principales-actividades {
    p {
        padding: 0;
        margin: 0;
    }

    .blockipi-principales-actividades_title {
        padding-bottom: 21px;
        line-height: clamp(24px, 2vw, 39px);
    }

    .blockipi-actividades {
        max-width: 460px;

        .blockipi-actividades_item {
            border-bottom: 1px solid #FF0000;
            padding: 24px 0;

            display: flex;
            align-items: start;
            justify-content: start;

            gap: 23px;

            &:first-of-type {
                border-top: 1px solid #FF0000;
            }

            p {
                font-style: normal;
                line-height: normal;
                text-align: start;
            }

            .blockipi-actividades_icon {
                border-radius: 50%;
                background-color: #FF0000;
                width: 24px;
                height: 24px;
                flex-shrink: 0;

                margin-top: 3px;
            }
        }
    }
}

.blockipi-buttonPosgrado {
    max-width: 790px;
    padding: 28px clamp(28px, 3vw, 153px);
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 28px;

    border-radius: 100px;
    background-color: #F00;

    color: white;

    margin: 70px auto;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        background-color: black;
    }

    @include m.tablet {
        flex-direction: column;
        gap: 20px;
    }

    p {
        color: white;
        padding: 0;
        margin: 0;
        line-height: clamp(24px, 2vw, 39px);
        text-decoration: none;
    }

    img {
        margin: 0;
        padding: 0;
    }
}
</style>