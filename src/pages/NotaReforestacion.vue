<script setup>
import BlockText from '@/components/Title/BlockText.vue';
import BlockBackgroundImage from '@/components/background/BlockBackgroundImage.vue';
import BlockImage from '@/components/img/BlockImage.vue';
import BlockSocialMedia from '@/components/social/BlockSocialMedia.vue';
import BlockBtnSocialMedia from '@/components/social/BlockBtnSocialMedia.vue';
import IconExpand from '@/components/icons/IconExpand.vue';
import { ref, onMounted } from "vue";
import AOS from "aos";
import ImageScaleModal from '@/components/modal/ImageScaleModal.vue'; // Asegúrate de que la ruta sea correcta

const modalRef = ref(null);
const currentImage = ref({
  src: '',
  name: ''
});

const openModal = (imgSrc, imgName) => {
  currentImage.value = {
    src: imgSrc,
    name: imgName
  };
  modalRef.value?.open();
};

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
            Reforestación <br />
            del IPICYT
        </BlockText>
        <BlockText tag="p" class="blockipi-fecha" data-aos="fade-up">13 julio 2024</BlockText>

        <div class="blockipi-flex blockipi-align-center blockipi-justify-center">
            <div class="blockipi-bottomsubtitle" data-aos="fade-up">
                <BlockText tag="p"><strong>Sectores beneficiados:</strong></BlockText>
            </div>
        </div>

        <BlockText tag="p" data-aos="fade-up">
            <strong>Comunidad Educativa:</strong> La creación de espacios verdes agradables y sustentables dentro del
            campus tiene un impacto positivo en el bienestar de la comunidad educativa. Estos entornos se convierten en
            lugares de esparcimiento, reflexión e interacción, fomentando un ambiente académico más enriquecedor y
            saludable.
        </BlockText>

        <div class="blockipi-especies">
            <div class="blockflex-imgs blockipi-flex blockipi-flexwrap blockipi-align-center blockipi-justify-center">
                <BlockImage data-aos="fade-right" src="/note-reforestacion2/assets/imgs/porunipicytsustentable.png"
                    alt="" class="" />
                <BlockImage data-aos="fade-left" src="/note-reforestacion2/assets/imgs/especiesdearboles.png" alt=""
                    class="" />
            </div>
        </div>

        <div class="blockipi_galeria">
            <div data-aos="zoom-in" class="blockipi_galeria-item" @click="openModal('/note-reforestacion2/assets/imgs/pinopinoneromodal.png', 'Pino Piñonero')">
                <div class="blockipi_galeria-boximg">
                    <BlockImage class="blockipi_galeria-img" src="/note-reforestacion2/assets/imgs/pinopinonero.png" alt="" />
                    <div class="blockipi_galeria-boxiconexpand">
                        <IconExpand class="blockipi_galeria-iconexpand" />
                    </div>
                </div>
                <BlockText class="blockipi_galeria-itemtext" tag="p">
                    Pino Piñonero
                </BlockText>
            </div>
            <div data-aos="zoom-in" class="blockipi_galeria-item" @click="openModal('/note-reforestacion2/assets/imgs/paloverdemodal.png', 'Palo Verde')">
                <div class="blockipi_galeria-boximg">
                    <BlockImage class="blockipi_galeria-img" src="/note-reforestacion2/assets/imgs/paloverde.png" alt="" />
                    <div class="blockipi_galeria-boxiconexpand">
                        <IconExpand class="blockipi_galeria-iconexpand" />
                    </div>
                </div>
                <BlockText class="blockipi_galeria-itemtext" tag="p">
                    Palo Verde
                </BlockText>
            </div>
            <div data-aos="zoom-in" class="blockipi_galeria-item" @click="openModal('/note-reforestacion2/assets/imgs/tejocotemodal.png', 'Tejocote')">
                <div class="blockipi_galeria-boximg">
                    <BlockImage class="blockipi_galeria-img" src="/note-reforestacion2/assets/imgs/tejocote.png" alt="" />
                    <div class="blockipi_galeria-boxiconexpand">
                        <IconExpand class="blockipi_galeria-iconexpand" />
                    </div>
                </div>
                <BlockText class="blockipi_galeria-itemtext" tag="p">
                    Tejocote
                </BlockText>
            </div>
            <div data-aos="zoom-in" class="blockipi_galeria-item" @click="openModal('/note-reforestacion2/assets/imgs/anacahuitamodal.png', 'Anacahuita')">
                <div class="blockipi_galeria-boximg">
                    <BlockImage class="blockipi_galeria-img" src="/note-reforestacion2/assets/imgs/anacahuita.png" alt="" />
                    <div class="blockipi_galeria-boxiconexpand">
                        <IconExpand class="blockipi_galeria-iconexpand" />
                    </div>
                </div>
                <BlockText class="blockipi_galeria-itemtext" tag="p">
                    Anacahuita
                </BlockText>
            </div>
            <div data-aos="zoom-in" class="blockipi_galeria-item" @click="openModal('/note-reforestacion2/assets/imgs/mezquitemodal.png', 'Mezquite')">
                <div class="blockipi_galeria-boximg">
                    <BlockImage class="blockipi_galeria-img" src="/note-reforestacion2/assets/imgs/mezquite.png" alt="" />
                    <div class="blockipi_galeria-boxiconexpand">
                        <IconExpand class="blockipi_galeria-iconexpand" />
                    </div>
                </div>
                <BlockText class="blockipi_galeria-itemtext" tag="p">
                    Mezquite
                </BlockText>
            </div>
        </div>

        <BlockSocialMedia>
            <BlockText tag="p" data-aos="fade-right">Compartir:</BlockText>
            <BlockBtnSocialMedia data-aos="fade-left">FB</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">X</BlockBtnSocialMedia>
            <BlockBtnSocialMedia data-aos="fade-left">In</BlockBtnSocialMedia>
        </BlockSocialMedia>

        <BlockText tag="p" data-aos="fade-up">
            El IPICYT reafirmó su compromiso con la sociedad y el medio ambiente a través de una significativa jornada
            de limpieza y reforestación en su campus en julio 2024. Esta iniciativa, liderada por el doctor Luis Antonio
            Salazar Olivo, va más allá de embellecer las instalaciones; representa una acción concreta para restaurar el
            equilibrio ecológico de una zona urbana que ha experimentado un considerable deterioro ambiental.
        </BlockText>

        <div class="blockipi-miembros">
            <div class="blockflex-imgs blockipi-flex blockipi-flexwrap blockipi-align-center blockipi-justify-center">
                <BlockImage data-aos="fade-right" src="/note-reforestacion2/assets/imgs/60mienbrosparticipantes-1.png"
                    alt="" class="" />
                <BlockImage data-aos="fade-left" src="/note-reforestacion2/assets/imgs/60mienbrosparticipantes-2.png"
                    alt="" class="" />
            </div>
        </div>

        <BlockText tag="p" data-aos="fade-up">
            La decisión de retirar especies invasoras y reemplazarlas con aproximadamente <strong
                class="strong-underline">150 ejemplares</strong> nativos, como el resistente mezquite, subraya la visión
            de sostenibilidad del IPICYT. Al priorizar plantas con un menor consumo de agua, el instituto demuestra su
            responsabilidad ante la creciente problemática de la escasez hídrica, un desafío crucial para la comunidad
            de San Luis Potosí.
        </BlockText>

        <div class="blockipi-ejemplares">
            <div class="blockflex-imgs blockipi-flex blockipi-flexwrap blockipi-align-center blockipi-justify-center">
                <BlockImage data-aos="fade-right" src="/note-reforestacion2/assets/imgs/150ejemplares-1.png" alt=""
                    class="" />
                <BlockImage data-aos="fade-left" src="/note-reforestacion2/assets/imgs/150ejemplares-2.png" alt=""
                    class="" />
            </div>
        </div>

        <BlockText tag="p" data-aos="fade-up">
            Esta labor no es solo una intervención ambiental, sino también una valiosa lección práctica para los 60
            estudiantes, académicos y personal administrativo que participaron activamente en ella. Al involucrarse
            directamente, la comunidad del IPICYT resalta la importancia de la conservación y la necesidad de tomar
            medidas para mitigar el impacto humano en el entorno.
        </BlockText>

        <BlockBackgroundImage data-aos="fade-up" src="/note-reforestacion2/assets/imgs/bannersustentable.png" alt=""
            class="blockipi_backsustentable">
            <BlockImage data-aos="fade-right" src="/note-reforestacion2/assets/imgs/porunipicytsustentable.png" alt=""
                class="blockipi_backsustentable-img" />
            <BlockText class="blockipi_backsustentable-text" tag="p" data-aos="zoom-in">
                La continuidad de esta campaña de reforestación, con la expectativa de plantar un número igual o mayor
                de especies nativas en futuras jornadas, evidencia el compromiso a largo plazo del IPICYT con la
                responsabilidad social. Al elegir plantas que no solo ahorran agua, sino que también evitan daños a la
                infraestructura urbana, el instituto se posiciona como un agente de cambio consciente de su papel en la
                construcción de una sociedad más resiliente y armoniosa con su entorno natural. Esta iniciativa es un
                ejemplo inspirador de cómo las instituciones educativas pueden contribuir activamente a la
                sustentabilidad y al bienestar colectivo.
            </BlockText>
        </BlockBackgroundImage>
    </div>

    <ImageScaleModal data-aos="fade-in" ref="modalRef" :img="currentImage.src" :name="currentImage.name" />
</template>

<style scoped lang="scss">
// @use '@styles/base/variables' as v;
@use '@/styles/mixins' as m;

.strong-underline {
    text-decoration: underline;
}

.blockipi-especies {

    .blockflex-imgs {
        gap: 46px;

        img {
            margin: 0;
        }
    }
}

.blockipi-miembros {
    .blockflex-imgs {
        gap: 10px;

        img {
            margin: 0;
        }
    }
}

.blockipi-ejemplares {
    .blockflex-imgs {
        gap: 10px;

        img {
            margin: 0;
        }
    }
}

.blockipi_backsustentable {
    min-height: 638px;
    padding: 40px 40px;

    margin-bottom: 0px;

    display: flex;
    flex-direction: row;
    // align-items: center;
    // justify-content: center;
    flex-wrap: wrap;

    gap: clamp(50px, 5vw, 110px);

    .blockipi_backsustentable-img {
        margin: 0;
        padding: 0;
    }

    .blockipi_backsustentable-text {
        margin: 0;
        padding: 0;
        color: #FFF;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 33px;
        /* 183.333% */
    }

}

.blockipi_galeria {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 23px;

    .blockipi_galeria-item {
        max-width: 385px;
        width: min(385px, 100%);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .blockipi_galeria-boximg {
            position: relative;
            width: 100%;
            // height: 385px;
            // min-height: 280px;

            &:hover {
                cursor: pointer;
                filter: brightness(0.9);
            }

            .blockipi_galeria-img {
                margin: 0;
                padding: 0;
                width: 100%;
                height: auto;
                min-height: 200px;

                object-fit: cover;
                z-index: 9;
            }

            .blockipi_galeria-boxiconexpand {
                position: absolute;
                bottom: 10px;
                right: 10px;
                width: 31px;
                height: 31px;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;


                .blockipi_galeria-iconexpand {}
            }

        }

        .blockipi_galeria-itemtext {
            margin: 0;
            padding: 0;
            color: #000;
            text-align: center;
            font-family: "Noto Sans";
            font-size: clamp(18px, 5vw, 42px);
            font-style: normal;
            font-weight: 400;
            line-height: clamp(30px, 5vw, 60px);
            /* 142.857% */
        }
    }
}
</style>