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
        once: false, // Permite que las animaciones se repitan al hacer scroll
        mirror: true, // Activa animaciones cuando pasas elementos en reversa
        duration: 500, // Duración de la animación (opcional)
        easing: 'ease-in-out', // Tipo de animación (opcional)
    });
});
</script>

<template>
    <p>Page inicio</p>

    <div class="nota">
        <BlockText tag="h1" class="blockipi-title" data-aos="fade-up">Estancias de Verano</BlockText>
        <BlockText tag="p" class="blockipi-fecha" data-aos="fade-up">2025</BlockText>
        <div class="blockipi-flex blockipi-align-center blockipi-justify-center">
            <div class="blockipi-bottomsubtitle" data-aos="fade-up">
                <BlockText tag="p"><strong>Sectores beneficiados:</strong></BlockText>
            </div>
        </div>
        <BlockText tag="p" data-aos="fade-up">Estudiantes de licenciatura de México y el Extranjero</BlockText>
        <BlockBackgroundImage data-aos="fade-up" src="/note-estancias5/assets/imgs/460-estudiantes-back.png"
            alt="460 estudiantes en el IPICYT" class="blockipi_backgroundPrincipal">
            <BlockImage data-aos="fade-left" src="/note-estancias5/assets/imgs/460-estudiantes.png"
                alt="460 estudiantes en el IPICYT"
                :style="{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }"
                class="blockipi_backgroundPrincipal-img" />
        </BlockBackgroundImage>
        <BlockSocialMedia>
            <BlockText tag="p" data-aos="fade-right">Compartir:</BlockText>
            <BlockBtnSocialMedia data-aos="fade-left">FB</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">X</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">In</BlockBtnSocialMedia>
        </BlockSocialMedia>
        <BlockText tag="p" data-aos="fade-up">Durante el verano de cada año, el IPICYT abre sus puertas a estudiantes de
            los últimos semestres de licenciatura, a fin de realizar estancias en las cinco Divisiones Académicas de
            nuestro Instituto con una duración en promedio de cinco semanas. A partir del impulso que nuestras y
            nuestros investigadores aportan al programa de Estancias de Verano, es posible que estudiantes
            universitarios(as) de diversos estados de la República Mexicana e incluso de algunos países, tengan la
            oportunidad de acercarse a la ciencia y a la tecnología de una forma vivencial y práctica, este tipo de
            experiencias formativas impulsan a las y los jóvenes a adentrarse al mundo de la investigación y genera una
            visión amplia y real sobre el quehacer de la persona investigadora.</BlockText>
        <div class="blockflex-imgs blockipi-flex blockipi-flexwrap blockipi-align-center blockipi-justify-center">
            <BlockImage data-aos="fade-right" src="/note-estancias5/assets/imgs/27-estados.png"
                alt="460 estudiantes en el IPICYT" class="blockipi_backgroundPrincipal-img" />
            <BlockImage data-aos="fade-left" src="/note-estancias5/assets/imgs/mundo.png"
                alt="460 estudiantes en el IPICYT" class="blockipi_backgroundPrincipal-img" />
        </div>
        <BlockText tag="p" data-aos="fade-up">El IPICYT ha sido un Centro de Investigación comprometido con la formación
            de recursos humanos de excelencia específicamente en estudios de maestría y doctorado, sin embargo desde
            hace más de veinte años es un comprometido propulsor de la educación desde otros programas como lo son las
            codirecciones de tesis de licenciatura, talleres, diplomados y anfitriones constantes y entusiastas de
            programas de estancias como el Verano de la Ciencia Región Centro, Programa Delfín, Programa de la Academia
            Mexicana de la Ciencias, entre otros.</BlockText>
        <BlockText tag="p" data-aos="fade-up"><strong>A la fecha más de 460 estudiantes han realizado una estancia de
                verano en el IPICYT, 195 son de sexo femenino y 265 de sexo masculino, su procedencia es de 27 estados
                de la república, EUA y Colombia.</strong> Este programa de verano produce un favorable impacto en las
            aspiraciones formativas de las y los jóvenes universitarios, el acercamiento entre investigador(a) –
            alumno(a), genera en la formación personal y académica de las y los jóvenes una reconstrucción de su visión
            hacia lo que desean hacer una vez concluida su licenciatura.</BlockText>
        <div class="blockipi-padding-0">
            <BlockImage data-aos="fade-down" src="/note-estancias5/assets/imgs/estancias-back.png"
                alt="460 estudiantes en el IPICYT" class="blockipi_img-estancias" />
            <a data-aos="zoom-in" href="/note-estancias5/assets/pdf/Memorias 2024.pdf" target="_blank"
                class="blockipi_button-estancias">
                <BlockImage src="/note-estancias5/assets/imgs/estancias-button.png" alt="460 estudiantes en el IPICYT"
                    class="" />
            </a>
        </div>
        <BlockText tag="p" data-aos="fade-up">Nuestro agradecimiento a cada investigadora e investigador anfitrión,
            personal técnico académico y estudiantes del posgrado que participan con tanto entusiasmo y compromiso en el
            Programa Institucional de Estancias de Verano cada año, trabajamos con el convencimiento que este
            acompañamiento paralelo de formación en la juventud, es un granito de arena en nuestro compromiso de
            retribución hacia la sociedad.</BlockText>
        <!-- <div class="">
            <img src="/note-estancias5/assets/imgs/460-estudiantes-back.png" alt="ejemplo">
        </div> -->
        <BlockBackgroundImage data-aos="fade-up" src="/note-estancias5/assets/imgs/posgrado-back.png"
            alt="460 estudiantes en el IPICYT" class="blockipi_backgroundPosgrado">
            <BlockImage data-aos="zoom-in-up" src="/note-estancias5/assets/imgs/posgrado-up.png"
                alt="460 estudiantes en el IPICYT"
                :style="{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }"
                class="blockipi_backgroundPosgrado-img" />
        </BlockBackgroundImage>


    </div>
</template>

<style scoped lang="scss">
.blockipi_backgroundPrincipal {
    max-height: 1320px;
    height: 1320px;
    padding: 0 40px;
}

.blockflex-imgs {
    gap: 46px;

    img {
        margin: 0;
    }
}

.blockipi_img-estancias {
    padding: 0;
    object-fit: cover;
    object-position: center center;
    min-height: 364px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
}

.blockipi_button-estancias {
    display: block;
    border: none;
    background-color: #1A37C3;
    padding: 40px;
    width: 100%;

    transition: 0.3s;

    &:hover {
        cursor: pointer;
        background-color: black;
    }
}

.blockipi_backgroundPosgrado {
    max-height: 638px;
    height: 638px;
    padding: 0 40px;
    margin: 0;
}
</style>