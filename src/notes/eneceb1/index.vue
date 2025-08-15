<script setup>
import BlockText from '@/components/Title/BlockText.vue';
import BlockBackgroundImage from '@/components/background/BlockBackgroundImage.vue';
import BlockImage from '@/components/img/BlockImage.vue';
import BlockSocialMedia from '@/components/social/BlockSocialMedia.vue';
import BlockBtnSocialMedia from '@/components/social/BlockBtnSocialMedia.vue';
import IconPlayFillRed from '@/components/icons/IconPlayFillRed.vue';
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
            Encuentro Nacional de Ciencias en Educación Básica
        </BlockText>
        <BlockText tag="p" class="blockipi-fecha" data-aos="fade-up">20 y 21 Marzo 2025</BlockText>

        <div class="blockipi-flex blockipi-align-center blockipi-justify-center">
            <div class="blockipi-bottomsubtitle" data-aos="fade-up">
                <BlockText tag="p"><strong>Sectores beneficiados:</strong></BlockText>
            </div>
        </div>

        <BlockText tag="p" data-aos="fade-up">
            <strong>Educativo:</strong> Estudiantes y Docentes de Primaria, Secundaria, y Estudiantes con Discapacidad
            Visual y Docentes que lo imparten.
        </BlockText>

        <BlockBackgroundImage data-aos="fade-up" src="/note-eneceb1/assets/imgs/banner-1.png" alt=""
            class="blockipi_backbeneficios">
            <div class="blockipi_backbeneficios-list">
                <div class="blockipi_backbeneficios-item" data-aos="fade-right">
                    <BlockText class="blockipi_backbeneficios-text" tag="p">
                        <span class="span-gap"><strong>6</strong></span>Manuales
                    </BlockText>
                </div>
                <div class="blockipi_backbeneficios-item" data-aos="fade-left">
                    <BlockText class="blockipi_backbeneficios-text" tag="p">
                        <span class="span-gap"><strong>6</strong></span>Conferencias
                    </BlockText>
                </div>
                <div class="blockipi_backbeneficios-item" data-aos="fade-right">
                    <BlockText class="blockipi_backbeneficios-text" tag="p">
                        <span class="span-gap"><strong>1</strong></span>Mesa de discusión
                    </BlockText>
                </div>
                <div class="blockipi_backbeneficios-item" data-aos="fade-left">
                    <BlockText class="blockipi_backbeneficios-text" tag="p">
                        <span class="span-gap"><strong>3</strong></span>Talleres impartidos
                    </BlockText>
                </div>
                <div class="blockipi_backbeneficios-item" data-aos="fade-right">
                    <BlockText class="blockipi_backbeneficios-text" tag="p">
                        <span class="span-gap"><strong>150</strong></span>Maestros beneficiados
                    </BlockText>
                </div>
            </div>
        </BlockBackgroundImage>

        <BlockSocialMedia>
            <BlockText tag="p" data-aos="fade-right">Compartir:</BlockText>
            <BlockBtnSocialMedia data-aos="fade-left">FB</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">X</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">In</BlockBtnSocialMedia>
        </BlockSocialMedia>

        <BlockText tag="p" data-aos="fade-up">
            El Encuentro Nacional de Ciencias en Educación Básica, con sede en el IPICYT, impulsa significativos
            beneficios sociales al reunir a educadores, divulgadores e investigadores para fortalecer la enseñanza de
            las ciencias. Este encuentro se enfoca en el desarrollo del pensamiento crítico y el crecimiento solidario
            de la sociedad, tal como lo señala la Nueva Escuela Mexicana. Al promover el trabajo en equipo, el
            aprendizaje colaborativo y el diálogo entre diversas áreas del conocimiento, se fomenta la formación de
            ciudadanos críticos, participativos e inclusivos, con una visión científica y humanista.
        </BlockText>

        <!-- seccion de manuales -->
        <div class="blockipi-flex blockipi-align-center blockipi-justify-center">
            <div class="blockipi-bottomsubtitle" data-aos="fade-up">
                <BlockText class="blockipi-bottomsubtitle-text" tag="p"><strong>6</strong> Manuales de Educación Básica
                    para la enseñanza de las Nanociencias</BlockText>
            </div>
        </div>

        <BlockText tag="p" data-aos="fade-up">
            Un aspecto crucial de este encuentro es el énfasis en despertar la curiosidad científica desde la infancia,
            nutriendo el potencial de futuros científicos e innovadores desde los niveles básicos de educación. La
            incorporación de temas vanguardistas como la nanociencia busca inspirar a las nuevas generaciones y
            prepararlas para los desafíos y oportunidades del futuro.
        </BlockText>

        <!-- seccion de videos -->
        <div class="blockipi-flex blockipi-align-center blockipi-justify-center">
            <div class="blockipi-bottomsubtitle" data-aos="fade-up">
                <BlockText class="blockipi-bottomsubtitle-text" tag="p"><strong>6</strong> Conferencias</BlockText>
            </div>
        </div>
        <div class="blockipi-conferencias">
            <div class="blockipi-conferencias-item">
                <BlockText class="blockipi-conferencias-text" tag="p">La Política Nacional de Educación Básica: Logros y Desafíos</BlockText>
                <div class="blockipi-conferencias-boxvideo">
                    <IconPlayFillRed class="blockipi-conferencias-icon" />
                    <div class="blockipi-conferencias-videotitulo">
                        <BlockText class="blockipi-conferencias-text" tag="p">Ver en Youtube</BlockText>
                    </div>
                </div>
            </div>
            <div class="blockipi-conferencias-item">
                <BlockText class="blockipi-conferencias-text" tag="p">Panorama actual de la Educación en el Estado de San Luis Potosí</BlockText>
                <div class="blockipi-conferencias-boxvideo">
                    <IconPlayFillRed class="blockipi-conferencias-icon" />
                    <div class="blockipi-conferencias-videotitulo">
                        <BlockText class="blockipi-conferencias-text" tag="p">Ver en Youtube</BlockText>
                    </div>
                </div>
            </div>
            <div class="blockipi-conferencias-item">
                <BlockText class="blockipi-conferencias-text" tag="p">La enseñanza de la ciencia en la educación básica en México</BlockText>
                <div class="blockipi-conferencias-boxvideo">
                    <IconPlayFillRed class="blockipi-conferencias-icon" />
                    <div class="blockipi-conferencias-videotitulo">
                        <BlockText class="blockipi-conferencias-text" tag="p">Ver en Youtube</BlockText>
                    </div>
                </div>
            </div>
            <div class="blockipi-conferencias-item">
                <BlockText class="blockipi-conferencias-text" tag="p">El pensamiento científico como camino al desarrollo sostenible y bienestar social</BlockText>
                <div class="blockipi-conferencias-boxvideo">
                    <IconPlayFillRed class="blockipi-conferencias-icon" />
                    <div class="blockipi-conferencias-videotitulo">
                        <BlockText class="blockipi-conferencias-text" tag="p">Ver en Youtube</BlockText>
                    </div>
                </div>
            </div>
            <div class="blockipi-conferencias-item">
                <BlockText class="blockipi-conferencias-text" tag="p">La educación científica de alumnos con discapacidad visual</BlockText>
                <div class="blockipi-conferencias-boxvideo">
                    <IconPlayFillRed class="blockipi-conferencias-icon" />
                    <div class="blockipi-conferencias-videotitulo">
                        <BlockText class="blockipi-conferencias-text" tag="p">Ver en Youtube</BlockText>
                    </div>
                </div>
            </div>
            <div class="blockipi-conferencias-item">
                <BlockText class="blockipi-conferencias-text" tag="p">Desarrollo de material didáctico para la educación científica de alumnos con discapacidad</BlockText>
                <div class="blockipi-conferencias-boxvideo">
                    <IconPlayFillRed class="blockipi-conferencias-icon" />
                    <div class="blockipi-conferencias-videotitulo">
                        <BlockText class="blockipi-conferencias-text" tag="p">Ver en Youtube</BlockText>
                    </div>
                </div>
            </div>
        </div>

        <BlockBackgroundImage data-aos="fade-up" src="/note-eneceb1/assets/imgs/banner-2.png" alt=""
            class="blockipi_backespacio">
            <BlockText tag="p" data-aos="fade-in">
                Además, este espacio promueve activamente la igualdad de género en las áreas científicas y tecnológicas,
                alentando la participación de niñas y adolescentes y creando entornos equitativos para su desarrollo. Al
                impulsar la curiosidad, el pensamiento crítico y la creatividad, el encuentro sienta las bases para una
                sociedad más innovadora y capaz de abordar los retos del siglo XXI. El reconocimiento y apoyo a
                iniciativas como el proyecto Nano para Niñas, Niños y Jóvenes demuestran el compromiso de acercar la
                ciencia a la educación básica y generar un impacto social positivo a través del conocimiento científico.
            </BlockText>
        </BlockBackgroundImage>
    </div>
</template>

<style scoped lang="scss">
// @use '@styles/base/variables' as v;
@use '@/styles/mixins' as m;

.blockipi_backbeneficios {
    min-height: 638px;
    padding: 40px 40px;

    .blockipi_backbeneficios-list {
        max-width: 790px;

        .blockipi_backbeneficios-item {
            padding: 15px 0;
            border-bottom: 1px solid white;

            &:first-of-type {
                padding-top: 0;
            }

            &:last-of-type {
                border-bottom: none;
            }

            .blockipi_backbeneficios-text {
                padding: 0;
                margin: 0;
                color: #FFF;
                text-align: center;
                font-family: "Noto Sans";
                font-size: clamp(30px, 5vw, 60px);
                font-style: normal;
                font-weight: 300;
                line-height: normal;

                .span-gap {
                    margin-right: 15px;
                }
            }
        }
    }
}

.blockipi_backespacio {
    min-height: 638px;
    padding: 40px 40px;
    margin: 0;

    p {
        padding: 0;
        margin: 0;
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 36px;
        /* 200% */
    }
}

.blockipi-bottomsubtitle {
    max-width: 790px;
    border-radius: 93px;
    width: 100%;

    .blockipi-bottomsubtitle-text {
        font-size: clamp(18px, 5vw, 30px);
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        padding: 0;
    }
}
</style>