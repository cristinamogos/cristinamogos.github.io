"use strict";

$(window).on("load", paginate);
$(".nav-link").click(paginate);

function paginate(e) {
  let tabName;

  if (e.type === "load") {
    tabName = "bucharest";
  } else {
    tabName = $(e.currentTarget)
      .text()
      .toLowerCase();
  }

  let nrItems = $(`#${tabName} .${tabName}-item`).length;

  let limit = 4;
  let totalPages = Math.ceil(nrItems / limit);

  $(`#${tabName} .${tabName}-item`).show();
  $(`#${tabName} .${tabName}-item`)
    .slice(limit)
    .hide();

  // pagination buttons

  $(".pagination")
    .children("li")
    .remove();

  $(".pagination").append(
    '<li class="page-item prev-page"><a class="page-link" href="javascript:void(0)" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a></li>'
  );

  $(".pagination").append(
    `<li class="page-item current-page active"><a class="page-link" href="javascript:void(0)">${1}</a></li>`
  );

  for (let i = 2; i <= totalPages; i++) {
    $(".pagination").append(
      `<li class="page-item current-page"><a class="page-link" href="javascript:void(0)">${i}</a></li>`
    );
  }

  $(".pagination").append(
    '<li class="page-item next-page"><a class="page-link" href="javascript:void(0)" aria-label="Next"><span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>'
  );

  // functionality current page
  $(".pagination li.current-page").on("click", function() {
    if ($(this).hasClass("active")) {
      return false;
    } else {
      let currentPage = $(this).index();
      $(".pagination li").removeClass("active");
      $(this).addClass("active");
      $(`#${tabName} .${tabName}-item`).hide();
      let grandTotal = limit * currentPage;

      for (var i = grandTotal - limit; i < grandTotal; i++) {
        $(`#${tabName} .${tabName}-item:eq(${i})`).show();
      }
    }
  });

  // functionality next button
  $(".next-page").on("click", function() {
    let currentPage = $(".pagination li.active").index();
    if (currentPage === totalPages) {
      return false;
    } else {
      currentPage++;
      $(".pagination li").removeClass("active");
      $(`#${tabName} .${tabName}-item`).hide();

      let grandTotal = limit * currentPage;

      for (let i = grandTotal - limit; i < grandTotal; i++) {
        $(`#${tabName} .${tabName}-item:eq(${i})`).show();
      }
      $(`.pagination li.current-page:eq(${currentPage - 1})`).addClass(
        "active"
      );
    }
  });

  // functionality prev button
  $(".prev-page").on("click", function() {
    let currentPage = $(".pagination li.active").index();
    if (currentPage === 1) {
      return false;
    } else {
      currentPage--;
      $(".pagination li").removeClass("active");
      $(`#${tabName} .${tabName}-item`).hide();

      let grandTotal = limit * currentPage;

      for (let i = grandTotal - limit; i < grandTotal; i++) {
        $(`#${tabName} .${tabName}-item:eq(${i})`).show();
      }
      $(`.pagination li.current-page:eq(${currentPage - 1})`).addClass(
        "active"
      );
    }
  });
}
