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
            Liga de la Ciencia: <br />
            sembrando vocaciones científicas para transformar el futuro.
        </BlockText>
        <BlockText tag="p" class="blockipi-fecha" data-aos="fade-up">2025</BlockText>

        <div class="blockipi-flex blockipi-align-center blockipi-justify-center">
            <div class="blockipi-bottomsubtitle" data-aos="fade-up">
                <BlockText tag="p"><strong>Sectores beneficiados:</strong></BlockText>
            </div>
        </div>

        <BlockText tag="p" data-aos="fade-up">
            Estudiantes de bachillerato en San Luis Potosí
        </BlockText>

        <BlockBackgroundImage data-aos="fade-up" src="./assets/imgs/bannerligadelaciencia.png" alt=""
            class="blockipi_backgroundPrincipal">
            <div class="blockflex-imgs blockipi-flex blockipi-flexwrap blockipi-align-center blockipi-justify-center">
                <BlockImage data-aos="fade-right" src="./assets/imgs/ligadelaciencia.png" alt=""
                    class="blockipi_backgroundPrincipal-img" />
                <BlockImage data-aos="fade-left" src="./assets/imgs/6generaciones.png" alt=""
                    class="blockipi_backgroundPrincipal-img" />
            </div>
        </BlockBackgroundImage>

        <BlockSocialMedia>
            <BlockText tag="p" data-aos="fade-right">Compartir:</BlockText>
            <BlockBtnSocialMedia data-aos="fade-left">FB</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">X</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">In</BlockBtnSocialMedia>
        </BlockSocialMedia>

        <BlockText tag="p" data-aos="fade-up">
            Con el firme propósito de despertar el interés de las y los jóvenes por las disciplinas científicas, se
            lleva a cabo la Liga de la Ciencia, un programa formativo impulsado por el Instituto Potosino de
            Investigación Científica y Tecnológica (IPICYT), A.C a través del grupo de Divulgación PRISMATIC. Esta
            iniciativa busca fortalecer la curiosidad científica de estudiantes de primero a quinto semestre de
            bachillerato mediante experiencias reales en laboratorios de alto nivel, promoviendo así nuevas vocaciones
            en ciencia, tecnología e innovación
        </BlockText>

        <div class="blockipi-estudiantes">
            <div class="blockflex-imgs blockipi-flex blockipi-flexwrap blockipi-align-center blockipi-justify-center">
                <BlockImage data-aos="fade-right" src="./assets/imgs/120estudiantesbenificiados-1.png"
                    alt="" class="" />
                <BlockImage data-aos="fade-left" src="./assets/imgs/120estudiantesbenificiados-2.png"
                    alt="" class="" />
            </div>
        </div>

        <BlockText tag="p" data-aos="fade-up">
            Desde su primera edición, la Liga de la Ciencia ha sido una plataforma clave para acercar la ciencia a 120 jóvenes, quienes han participado activamente en charlas, talleres y prácticas en las cinco divisiones académicas del IPICYT: Biología Molecular, Ciencias Ambientales, Control y Sistemas Dinámicos, Geociencias Aplicadas y Materiales Avanzados. Además, los participantes exploran instalaciones de vanguardia como el Laboratorio Nacional de Investigaciones en Nanociencias (LINAN) y el Centro Nacional de Supercómputo (CNS), experiencias que les permiten vivir de primera mano el quehacer científico.
        </BlockText>

        <BlockBackgroundImage data-aos="fade-up" src="./assets/imgs/bannerprismatic.png" alt=""
            class="blockipi_backprismatic">
            <div class="blockflex-imgs blockipi-flex blockipi-flexwrap blockipi-align-center blockipi-justify-center">
                <BlockImage data-aos="fade-right" src="./assets/imgs/arrow.png" alt=""
                    class="blockipi_backprismatic-img" />
                <a href="https://www.facebook.com/prismatic.ipicyt" target="_blank" class="blockipi_backprismatic-button" data-aos="zoom-in">
                    <BlockText class="blockipi_backprismatic-buttontext" tag="p">Facebook de :</BlockText>
                    <BlockImage src="./assets/imgs/prismaticlogo.png" alt=""
                    class="blockipi_backprismatic-buttonimg" />
                </a>
            </div>
        </BlockBackgroundImage>

        <BlockText tag="p" data-aos="fade-up">
            La iniciativa es organizada por <strong class="strong-underline">Prismatic,</strong> un colectivo de divulgación científica integrado principalmente por estudiantes de posgrado del IPICYT. Fundado en 2013, este grupo surgió como una respuesta al reto de acercar la ciencia a la sociedad desde una perspectiva accesible, dinámica y comprometida con el desarrollo social. 
        </BlockText>

        <div class="blockipi-corona">
            <BlockImage data-aos="fade-in" src="./assets/imgs/corona.png" alt=""
             class="" />
        </div>

        <BlockText tag="p" data-aos="fade-up">
            El programa comprende jornadas sabatinas dedicadas a las divisiones del instituto y a los laboratorios nacionales, complementando la formación con dinámicas lúdicas como rallys y juegos científicos. Además, se integra un curso en colaboración con la Coordinación de Emprendimiento y Competitividad de San Luis Potosí, donde los estudiantes desarrollan proyectos que apliquen el conocimiento científico con un enfoque emprendedor, demostrando cómo la ciencia puede ser motor de innovación y autosuficiencia económica.
        </BlockText>

    </div>
</template>

<style scoped lang="scss">
// @use '@styles/base/variables' as v;
@use '@/styles/mixins' as m;

.strong-underline {
    text-decoration: underline;
    // text-decoration-color: #589DFF;
}

.blockipi_backgroundPrincipal {
    min-height: 638px;
    padding: 40px 40px;

    .blockflex-imgs {
        gap: 100px;

        img {
            margin: 0;
        }
    }
}

.blockipi-estudiantes {
    .blockflex-imgs {
        gap: 20px;

        img {
            margin: 0;
        }
    }
}

.blockipi_backprismatic{
    min-height: 638px;
    padding: 40px 40px;

    .blockipi_backprismatic-button{
        border-radius: 100px;
        border: 1px solid transparent;
        background: linear-gradient(180deg, #FF585B 0%, rgba(125, 41, 86, 0.56) 100%);
        padding: 20px clamp(40px, 5vw, 109px);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 15px;

        &:hover{
            cursor: pointer;
            border: 1px solid #FFF;
            background: linear-gradient(180deg, #589DFF 0%, rgba(44, 41, 125, 0.56) 100%);
        }

        @include m.tablet{
            flex-direction: column;
        }

        .blockipi_backprismatic-buttonimg{

        }

        .blockipi_backprismatic-buttontext{
            margin: 0;
            padding: 0;
            color: #FFF;
            font-size: clamp(18px, 5vw, 30px);
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    .blockflex-imgs{
        gap: 25px;
        img {
            margin: 0;
        }

    }
}
</style>