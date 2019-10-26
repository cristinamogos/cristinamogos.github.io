"use strict";

$(document).ready(function() {
  let index = 0;
  let button = "";
  let parent = "";
  let targetID = "";

  $.getJSON("./js/web-app-items.json", function(data) {
    if ($(".guide__button__desktop-js").on("click")) {
      button = "guide__button__desktop-js";
      parent = data[index].modalDesktopParent;
      targetID = data[index].targetID_desktop;
      renderWebModal(data, index, button, parent, targetID);
      transcriptWebVideo(data, index, targetID);
    }
    if ($(".guide__button__mobile-js").on("click")) {
      button = "guide__button__mobile-js";
      parent = data[index].modalMobileParent;
      targetID = data[index].targetID_mobile;
      renderWebModal(data, index, button, parent, targetID);
      transcriptWebVideo(data, index, targetID);
    }
    if ($(".portflio__button__desktop-js").on("click")) {
      index = 1;
      button = "portflio__button__desktop-js";
      parent = data[index].modalDesktopParent;
      targetID = data[index].targetID_desktop;
      renderWebModal(data, index, button, parent, targetID);
      transcriptWebVideo(data, index, targetID);
    }
    if ($(".portflio__button__mobile-js").on("click")) {
      index = 1;
      button = "portflio__button__mobile-js";
      parent = data[index].modalMobileParent;
      targetID = data[index].targetID_mobile;
      renderWebModal(data, index, button, parent, targetID);
      transcriptWebVideo(data, index, targetID);
    }
  });
});

function renderSubElements(obj, index, i) {
  let elements = obj[index].transcriptElements[i].subElements;
  let data = "";
  for (let j = 0; j < elements.length; j++) {
    data += `
        <div class="row no-gutters py-2">
            <div class="col-12">
                <div class="transcript__text-section-box" data-time="${obj[index].transcriptElements[i].subElements[j].timeElement}" tabindex="1">
                    <div class="row align-items-center">
                        <div class="col-9">
                            <span class="transcript__text-section mb-0 font-weight-bold">
                                ${obj[index].transcriptElements[i].subElements[j].titleElement}
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

function renderWebModal__guide(obj, index) {
  let data = "";

  for (let i = 0; i < obj[index].transcriptElements.length; i++) {
    if (i <= 1) {
      data += `
            <div class="row no-gutters py-1">
                <div class="col-12">
                    <div class="transcript__text-section-box" data-time="${obj[index].transcriptElements[i].dataTime}" tabindex="1" data-toggle="collapse" data-target="#${obj[index].transcriptElements[i].dataTarget}" aria-expanded="false" aria-controls="${obj[index].transcriptElements[i].dataTarget}">
                        <div class="row align-items-center">
                            <div class="col-9">
                                <span class="transcript__text-section mb-0 font-weight-bold">
                                    ${obj[index].transcriptElements[i].title}
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
            <div class="collapse transcript__text-element my-2" id="${obj[index].transcriptElements[i].dataTarget}" data-parent="#${obj[index].transcriptElements[i].dataTarget}">
                <div class="card card-body">
                    <p class="card__body__text">
                        ${obj[index].transcriptElements[i].text}
                    </p>
                </div>
            </div>
        `;
    } else if (i > 1 && i <= 8) {
      data += `
            <div class="row no-gutters py-2">
                <div class="col-12">
                    <div class="transcript__text-section-box__subelements" tabindex="1" data-toggle="collapse" data-target="#${
                      obj[index].transcriptElements[i].dataTarget
                    }" aria-expanded="false" aria-controls="${
        obj[index].transcriptElements[i].dataTarget
      }">
                        <div class="row align-items-center">
                            <div class="col-7">
                                <span class="transcript__text-section mb-0 font-weight-bold">
                                    ${obj[index].transcriptElements[i].title}
                                </span>
                            </div>
                            <div class="col-5 text-right">
                                <div class="transcript__text-button-box">
                                    <button class="btn btn-primary transcript__text-button" type="button">
                                        + pages +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- end of row  -->
                    </div>
                </div>
            </div>
            <!-- end of row  -->
            <div class="collapse transcript__text-element my-2" id="${
              obj[index].transcriptElements[i].dataTarget
            }" data-parent="#${obj[index].transcriptElements[i].dataTarget}">
                <div class="card card-body">
                    ${renderSubElements(obj, index, i)}
                </div>
            </div>
        `;
    } else {
      data += `
            <div class="row no-gutters py-2">
                <div class="col-12">
                    <div class="transcript__text-section-box" data-time="${obj[index].transcriptElements[i].dataTime}" tabindex="1">
                        <div class="row align-items-center">
                            <div class="col-9">
                                <span class="transcript__text-section mb-0 font-weight-bold">
                                    ${obj[index].transcriptElements[i].title}
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
  }
  return data;
}

function renderWebModal__items(obj, index) {
  let data = "";
  for (let i = 0; i < obj[index].transcriptElements.length; i++) {
    data += `
            <div class="row no-gutters py-1">
                <div class="col-12">
                    <div class="transcript__text-section-box" data-time="${obj[index].transcriptElements[i].dataTime}" tabindex="1">
                        <div class="row align-items-center">
                            <div class="col-9">
                                <span class="transcript__text-section mb-0 font-weight-bold">
                                    ${obj[index].transcriptElements[i].title}
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

function modalType(obj, index, btn) {
  if (
    btn === "guide__button__desktop-js" ||
    btn === "guide__button__mobile-js"
  ) {
    return renderWebModal__guide(obj, index);
  } else {
    return renderWebModal__items(obj, index);
  }
}

function renderWebModal(data, i, btn, parent, targetID) {
  $(`.${parent}`).append(`
    <div class="modal fade" id="${targetID}">
        <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <!-- modal-header  -->
            <div class="modal-header">
            <div class="row no-gutters w-100 justify-content-center align-items-center">
                <div class="col-12">
                <div class="">
                    <button class="close" type="button" data-dismiss="modal">
                    &times;
                    </button>
                </div>
                </div>
                <div class="col-12">
                <div class="">
                    <h4 class="modal-title modal__title my-4 text-center font-weight-bold">
                        ${data[i].titleBox}
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
                    <video id="${
                      data[i].videoID
                    }" poster="${data[i].coverVideo}" controls class="w-100" playsinline>
                    <source src="${data[i].videoSource}" type="video/mp4" />
                    "Your browser cannot load the clip"
                    </video>
                </div>
                </div>
                <div class="col-12">
                <div class="modal__transcript__container">
                    <h5 class="transcript__container-heading text-center bg-dark text-white py-4">
                    Site sections:
                    </h5>
                    <div class="modal__transcript__text" id="${
                      data[i].transcriptContainer
                    }">
                        ${modalType(data, i, btn)}
                    </div>
                </div>
                </div>
            </div>
            <!-- end of row  -->
            </div>
            <!-- end of modal body  -->
            <!-- modal footer  -->
            <div class="modal-footer">
            <button type="button" class="btn btn-primary modal__footer-btn" data-dismiss="modal">Close</button>
            </div>
            <!-- end of footer modal  -->
        </div>
        </div>
    </div>
    `);
}

function transcriptWebVideo(data, i, targetID) {
  let section = $(".transcript__text-section-box");

  let modal = document.getElementById(`${targetID}`);
  let video = document.getElementById(`${data[i].videoID}`);

  $(modal).on("shown.bs.modal", function() {
    for (let i = 0; i < section.length; i++) {
      section[i].addEventListener(
        "click",
        function() {
          let start = parseFloat(this.getAttribute("data-time"));
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
