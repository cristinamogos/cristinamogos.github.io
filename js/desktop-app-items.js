"use strict";

$(document).ready(function() {
  let index = 0;

  $.getJSON("./js/desktop-app-items.json", function(data) {
    for (let i = 0; i < data.length; i++) {
      renderItem(data, i);
    }
    if ($(`#button__water__meters-js`).on("click")) {
      renderModal(data, index);
      transcriptVideo(data, index);
    }
    if ($(`#button__virtual__library-js`).on("click")) {
      index = 1;
      renderModal(data, index);
      transcriptVideo(data, index);
    }
    if ($(`#button__day__book-js`).on("click")) {
      index = 2;
      renderModal(data, index);
      transcriptVideo(data, index);
    }
  });
});

function renderItem(data, i) {
  $(`${data[i].boxParent}`).append(`
    <div class="col-11 col-md-6 col-lg-4 ${data[i].modalParent}">
        <div class="card desktop__card my-5">
            <div class="desktop__card__image-box">
                <img
                  src="${data[i].boxImage}"
                  alt="${data[i].boxTitle}"
                  class="card-img-top desktop__card__image"
                />
            </div>
            <div class="card-body desktop__card__body d-flex flex-wrap">
                <div
                  class="card-title desktop__card__title text-uppercase text-center font-weight-bold align-self-start w-100"
                >
                    ${data[i].boxTitle}
                </div>
                <div class="card-text desktop__card__text text-center justify-content-center p-4 mb-4 align-self-center">
                    ${data[i].boxDesc}
                </div>
                <div class="desktop__card__button-box justify-content-center align-self-end w-100">
                    <a
                      href="javascript:void(0)"
                      class="btn btn-default desktop__card__button w-100 font-weight-bold text-uppercase"
                      id="${data[i].boxButton}"
                      data-toggle="modal"
                      data-target="#${data[i].targetID}"
                    >
                        <span>See more</span>
                    </a>
                </div>
            </div>
            <!-- end of card body  -->
        </div>
        <!-- end of card  -->
    </div>
    `);
}

function renderTranscriptText(obj, index) {
  let elements = obj[index].transcriptElements;
  let data = "";
  for (let i = 0; i < elements.length; i++) {
    data += `
        <div class="row no-gutters py-1">
            <div class="col-12">
                <div class="transcript__text-section-box" data-time="${obj[index].transcriptElements[i].dataTime}" tabindex="1" data-toggle="collapse" data-target="#${obj[index].transcriptElements[i].dataTarget}" aria-expanded="false" aria-controls="${obj[index].transcriptElements[i].dataTarget}">
                    <div class="row align-items-center">
                        <div class="col-9">
                            <span class="transcript__text-section mb-0 font-weight-bold">
                                ${obj[index].transcriptElements[i].sectionTitle}
                            </span>
                        </div>
                        <div class="col-3 text-right">
                            <div class="transcript__text-button-box">
                                <button class="btn btn-primary transcript__text-button" type="button">
                                    >>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- end of row  -->
                </div>
            </div>                     
        </div>
        <!-- end of row  -->
        `;
  }
  return data;
}

function renderModal(data, i) {
  $(`.${data[i].modalParent}`).append(`
    <div class="modal fade" id="${data[i].targetID}">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <!-- modal header  -->
                <div class="modal-header modal__header">
                <div class="row no-gutters w-100 justify-content-center align-items-center">
                    <div class="col-12">
                    <div class="modal__header__close-box">
                        <button class="close" type="button" data-dismiss="modal">
                        &times;
                        </button>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="modal_header__title-box">
                        <h4 class="modal-title modal__title my-4 text-center font-weight-bold">
                        ${data[i].boxTitle}
                        </h4>
                    </div>
                    </div>
                </div>
                </div>
                <!-- end of modal header  -->
                        
                <!-- modal body  -->
                <div class="modal-body modal__body">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="modal__video__container">
                                <video id="${data[i].videoID}" poster="${
    data[i].coverVideo
  }" controls class="w-100" playsinline>
                                <source src="${
                                  data[i].linkVideo
                                }" type="video/mp4" />
                                    "Your browser cannot load the clip"
                                </video>
                            </div>
                        </div>
                        <div class="col-12">
                        <div class="modal__transcript__container">
                            <h5 class="transcript__container-heading text-center bg-dark text-white py-4">
                            Sections:
                            </h5>
                            <div class="modal__transcript__text" id="${
                              data[i].transcriptTextContainer
                            }">
                                ${renderTranscriptText(data, i)}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end of row  -->
                </div>
                <!-- end of modal body  -->
                <!-- modal footer  -->
                <div class="modal-footer modal__footer">
                <button class="btn btn-primary modal__footer-btn" type="button" data-dismiss="modal">
                    Close
                </button>
                </div>
                <!-- end of modal footer  -->
            </div>
        </div>
    </div>
    <!-- end of first modal  -->
    `);
}

function transcriptVideo(data, index) {
  let section = $(".transcript__text-section-box");

  let modal = document.getElementById(`${data[index].targetID}`);
  let video = document.getElementById(`${data[index].videoID}`);

  $(modal).on("shown.bs.modal", function() {
    for (let i = 0; i < section.length; i++) {
      section[i].addEventListener(
        "click",
        function() {
          var start = parseFloat(this.getAttribute("data-time"));
          video.currentTime = start;
          video.play();
        },
        false
      );
    }
  });

  modal.addEventListener(
    "mouseleave",
    function() {
      video.pause();
    },
    false
  );
}
