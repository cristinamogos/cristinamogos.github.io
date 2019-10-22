"use strict";

$(document).ready(function() {
  let index = 0;

  $.getJSON("./js/photography-items.json", function(data) {
    for (let i = 0; i < data.length; i++) {
      renderBoxes(data, i);
    }
    if ($(`#photo__box__button-villageMuseum-js`).on("click")) {
      renderData(data, index);
    }
    if ($(`#photo__box__button-sunsets-js`).on("click")) {
      index = 1;
      renderData(data, index);
    }
    if ($(`#photo__box__button-millLake-js`).on("click")) {
      index = 2;
      renderData(data, index);
    }
    if ($(`#photo__box__button-rosesIsland-js`).on("click")) {
      index = 3;
      renderData(data, index);
    }
    if ($(`#photo__box__button-skiTower-js`).on("click")) {
      index = 4;
      renderData(data, index);
    }
    if ($(`#photo__box__button-airShow-js`).on("click")) {
      index = 5;
      renderData(data, index);
    }
    if ($(`#photo__box__button-cityAtNight-js`).on("click")) {
      index = 6;
      renderData(data, index);
    }
    if ($(`#photo__box__button-militaryCircle-js`).on("click")) {
      index = 7;
      renderData(data, index);
    }
    if ($(`#photo__box__button-sibiu2014-js`).on("click")) {
      index = 8;
      renderData(data, index);
    }
    if ($(`#photo__box__button-astra2014-js`).on("click")) {
      index = 9;
      renderData(data, index);
    }
    if ($(`#photo__box__button-sibiu2013-js`).on("click")) {
      index = 10;
      renderData(data, index);
    }
    if ($(`#photo__box__button-astra2013-js`).on("click")) {
      index = 11;
      renderData(data, index);
    }
    if ($(`#photo__box__button-blackSea-js`).on("click")) {
      index = 12;
      renderData(data, index);
    }
    if ($(`#photo__box__button-moieciu-js`).on("click")) {
      index = 13;
      renderData(data, index);
    }
    if ($(`#photo__box__button-fagarasFortress-js`).on("click")) {
      index = 14;
      renderData(data, index);
    }
    if ($(`#photo__box__button-transfagarasan-js`).on("click")) {
      index = 15;
      renderData(data, index);
    }
    if ($(`#photo__box__button-olanesti-js`).on("click")) {
      index = 16;
      renderData(data, index);
    }
    if ($(`.photo__box__button-evangelicalChurch-js`).on("click")) {
      index = 17;
      renderData(data, index);
    }
    if ($(`#photo__box__button-turdaSaltMine-js`).on("click")) {
      index = 18;
      renderData(data, index);
    }
    if ($(`#photo__box__button-mogosoaia-js`).on("click")) {
      index = 19;
      renderData(data, index);
    }
    if ($(`#photo__box__button-craiovaBotanicalGarden-js`).on("click")) {
      index = 20;
      renderData(data, index);
    }
    if ($(`#photo__box__button-romanescuPark-js`).on("click")) {
      index = 21;
      renderData(data, index);
    }
    if ($(`#photo__box__button-rupeaCitadel-js`).on("click")) {
      index = 22;
      renderData(data, index);
    }
    if ($(`#photo__box__button-albaCarolina-js`).on("click")) {
      index = 23;
      renderData(data, index);
    }
    if ($(`#photo__box__button-winter2019-js`).on("click")) {
      index = 24;
      renderData(data, index);
    }
    if ($(`#photo__box__button-autumn2018-js`).on("click")) {
      index = 25;
      renderData(data, index);
    }
    if ($(`#photo__box__button-winter2018-js`).on("click")) {
      index = 26;
      renderData(data, index);
    }
    if ($(`#photo__box__button-autumn2017-js`).on("click")) {
      index = 27;
      renderData(data, index);
    }
    if ($(`#photo__box__button-spring2017-js`).on("click")) {
      index = 28;
      renderData(data, index);
    }
    if ($(`#photo__box__button-autumn2016-js`).on("click")) {
      index = 29;
      renderData(data, index);
    }
    if ($(`#photo__box__button-spring2016-js`).on("click")) {
      index = 30;
      renderData(data, index);
    }
    if ($(`#photo__box__button-winter2015-js`).on("click")) {
      index = 31;
      renderData(data, index);
    }
    if ($(`#photo__box__button-autumn2015-js`).on("click")) {
      index = 32;
      renderData(data, index);
    }
    if ($(`#photo__box__button-spring2015-js`).on("click")) {
      index = 33;
      renderData(data, index);
    }
    if ($(`#photo__box__button-winter2014-js`).on("click")) {
      index = 34;
      renderData(data, index);
    }
    if ($(`#photo__box__button-autumn2014-js`).on("click")) {
      index = 35;
      renderData(data, index);
    }
    if ($(`#photo__box__button-spring2014-js`).on("click")) {
      index = 36;
      renderData(data, index);
    }
    if ($(`#photo__box__button-winter2013-js`).on("click")) {
      index = 37;
      renderData(data, index);
    }
    if ($(`#photo__box__button-autumn2013-js`).on("click")) {
      index = 38;
      renderData(data, index);
    }
    if ($(`#photo__box__button-summer2013-js`).on("click")) {
      index = 39;
      renderData(data, index);
    }
    if ($(`#photo__box__button-butterflies2019-js`).on("click")) {
      index = 40;
      renderData(data, index);
    }
    if ($(`#photo__box__button-butterflies2018-js`).on("click")) {
      index = 41;
      renderData(data, index);
    }
    if ($(`#photo__box__button-butterflies2017-js`).on("click")) {
      index = 42;
      renderData(data, index);
    }
    if ($(`#photo__box__button-butterflies2016-js`).on("click")) {
      index = 43;
      renderData(data, index);
    }
    if ($(`#photo__box__button-butterflies2015-js`).on("click")) {
      index = 44;
      renderData(data, index);
    }
    if ($(`#photo__box__button-moto2014-js`).on("click")) {
      index = 45;
      renderData(data, index);
    }
    if ($(`#photo__box__button-china2013-js`).on("click")) {
      index = 46;
      renderData(data, index);
    }
    if ($(`#photo__box__button-butterflies2013-js`).on("click")) {
      index = 47;
      renderData(data, index);
    }
  });
});

function images(obj, index) {
  let links = obj[index].photoLinks;
  let data = "";
  for (let i = 0; i < links.length; i++) {
    data += `<div class="col-11">
        <div class="image__box my-3">
          <img src="${obj[index].photoLinks[i]}" alt="Photo-1" class="w-100">
        </div>
      </div>`;
  }
  return data;
}

function renderData(data, i) {
  // photo modals
  $(`.${data[i].modalParent}`).append(
    `<div class="modal fade" id="${data[i].targetID}">
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
                  <h4 class="modal-title modal__title my-4 text-center text-uppercase font-weight-bold">
                    ${data[i].title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <!-- end of modal header  -->
    
          <!-- modal body  -->
          <div class="modal-body">
            <div class="row justify-content-center">
              ${images(data, i)}
            </div>
            <!-- end of row  -->
            <div class="row justify-content-center">
              <a href="${
                data[i].blogPostAddress
              }" class="btn btn-success btn-lg m-3 text-uppercase" target="_blank">More photos in the blog post  <i class="fas fa-sign-in-alt"></i></a>
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
    </div>`
  );
}

function renderBoxes(data, i) {
  // photo boxes
  $(`${data[i].boxParent}`).append(
    `<div class="col-11 col-md-6 col-xl-3 ${data[i].tabName}-item ${data[i].modalParent}">
      <div class="photo__box mr-3">
        <div class="photo__box__btn only__desktop">
          <a href="javascript:void(0)" class="btn btn-light photo__box__button font-weight-bold" id="${data[i].buttonID}" data-toggle="modal" data-target="#${data[i].targetID}">
            <span>More details</span>
          </a>
        </div>
        <div class="card img-fluid photo__card mt-4">
          <img src="${data[i].boxImage}" alt="${data[i].title}" class="card-img-top photo__card__img">
          <div class="card-img-overlay p-0">
            <div class="card-title photo__card-title text-center text-white py-4">
              <h4 class="photo__card__title font-weight-bold m-0"> ${data[i].title} </h4>
              <span class="photo__card__text-1 only__mobile"> ${data[i].month} </span>
            </div> 
            <div class="photo__card__text-box d-flex justify-content-center align-items-center align-items-sm-end w-100">
              <span class="photo__card__text-2 only__desktop"> ${data[i].month} </span>
            </div>
          </div>
          <div class="photo__card__button-box w-100 py-2 text-uppercase text-center only__mobile">
            <a href="javascript:void(0)" class="btn btn-default photo__card__button font-weight-bold" id="${data[i].buttonID}" data-toggle="modal" data-target="#${data[i].targetID}">
              <span>More details</span>
            </a>
          </div>
        </div>
      </div>
    </div>`
  );
}
