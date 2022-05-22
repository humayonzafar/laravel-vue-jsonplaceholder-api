(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Home_vue"],{

/***/ "./node_modules/@hennge/vue3-pagination/dist/vue3-pagination.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@hennge/vue3-pagination/dist/vue3-pagination.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
const _hoisted_1 = {
  viewBox: "0 0 8 2",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M2.24 1c0 .556-.445 1-1 1-.556 0-1-.444-1-1s.444-1 1-1c.555 0 1 .444 1 1zm5.333 0c0 .556-.444 1-1 1-.555 0-1-.444-1-1s.445-1 1-1c.556 0 1 .444 1 1z",
  fill: "#BBB"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1, [
    _hoisted_2
  ]))
}var script = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'VPage',
    components: { IconPaginationDots: render },
    props: {
        page: {
            type: Number,
            default: null,
        },
        current: {
            type: Number,
            default: 0,
        },
        activeColor: {
            type: String,
            default: '#DCEDFF',
        },
    },
    emits: ['update'],
    setup(props, { emit }) {
        const isActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return props.page === props.current;
        });
        function clickHandler() {
            emit('update', props.page);
        }
        return { isActive, clickHandler };
    },
});const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-060ca318");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-060ca318");
const _hoisted_1$1 = {
  key: 0,
  class: "DotsHolder"
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

const render$1 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_icon_pagination_dots = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon-pagination-dots");

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", null, [
    (_ctx.page === null)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_1$1, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon_pagination_dots, { class: "Dots" })
        ]))
      : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
          key: 1,
          class: ["Page", { 'Page-active': _ctx.isActive }],
          type: "button",
          "aria-label": `Go to page ${_ctx.page}`,
          style: `background-color: ${_ctx.isActive ? _ctx.activeColor : 'transparent'};`,
          onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.clickHandler && _ctx.clickHandler(...args)))
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.page), 15 /* TEXT, CLASS, STYLE, PROPS */, ["aria-label"]))
  ]))
});script.render = render$1;
script.__scopeId = "data-v-060ca318";
script.__file = "src/components/atoms/VPage.vue";const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41M6 6h2v12H6V6z" }, null, -1 /* HOISTED */);

function render$2(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1$2, [
    _hoisted_2$1
  ]))
}const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41M16 6h2v12h-2V6z" }, null, -1 /* HOISTED */);

function render$3(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1$3, [
    _hoisted_2$2
  ]))
}const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
const _hoisted_2$3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z" }, null, -1 /* HOISTED */);

function render$4(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1$4, [
    _hoisted_2$3
  ]))
}const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
const _hoisted_2$4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z" }, null, -1 /* HOISTED */);

function render$5(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1$5, [
    _hoisted_2$4
  ]))
}var script$1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'VPagination',
    components: { IconPageFirst: render$2, IconChevronLeft: render$4, IconChevronRight: render$5, IconPageLast: render$3, VPage: script },
    props: {
        pages: {
            type: Number,
            default: 0,
        },
        rangeSize: {
            type: Number,
            default: 1,
        },
        modelValue: {
            type: Number,
            default: 0,
        },
        activeColor: {
            type: String,
            default: '#DCEDFF',
        },
        hideFirstButton: {
            type: Boolean,
            default: false,
        },
        hideLastButton: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        // pagination
        const pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const res = [];
            const minPaginationElems = 5 + props.rangeSize * 2;
            let rangeStart = props.pages <= minPaginationElems ? 1 : props.modelValue - props.rangeSize;
            let rangeEnd = props.pages <= minPaginationElems ? props.pages : props.modelValue + props.rangeSize;
            rangeEnd = rangeEnd > props.pages ? props.pages : rangeEnd;
            rangeStart = rangeStart < 1 ? 1 : rangeStart;
            if (props.pages > minPaginationElems) {
                const isStartBoundaryReached = rangeStart - 1 < 3;
                const isEndBoundaryReached = props.pages - rangeEnd < 3;
                if (isStartBoundaryReached) {
                    rangeEnd = minPaginationElems - 2;
                    for (let i = 1; i < rangeStart; i++) {
                        res.push(i);
                    }
                }
                else {
                    res.push(1);
                    res.push(null);
                }
                if (isEndBoundaryReached) {
                    rangeStart = props.pages - (minPaginationElems - 3);
                    for (let i = rangeStart; i <= props.pages; i++) {
                        res.push(i);
                    }
                }
                else {
                    for (let i = rangeStart; i <= rangeEnd; i++) {
                        res.push(i);
                    }
                    res.push(null);
                    res.push(props.pages);
                }
            }
            else {
                for (let i = rangeStart; i <= rangeEnd; i++) {
                    res.push(i);
                }
            }
            return res;
        });
        function updatePageHandler(params) {
            emit('update:modelValue', params);
        }
        // controls
        const isPrevControlsActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return props.modelValue > 1;
        });
        const isNextControlsActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return props.modelValue < props.pages;
        });
        function goToFirst() {
            if (isPrevControlsActive.value) {
                emit('update:modelValue', 1);
            }
        }
        function goToPrev() {
            if (isPrevControlsActive.value) {
                emit('update:modelValue', props.modelValue - 1);
            }
        }
        function goToLast() {
            if (isNextControlsActive.value) {
                emit('update:modelValue', props.pages);
            }
        }
        function goToNext() {
            if (isNextControlsActive.value) {
                emit('update:modelValue', props.modelValue + 1);
            }
        }
        return {
            pagination,
            updatePageHandler,
            isPrevControlsActive,
            isNextControlsActive,
            goToFirst,
            goToLast,
            goToPrev,
            goToNext,
        };
    },
});const _withId$1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-2a30deb0");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2a30deb0");
const _hoisted_1$6 = { class: "Pagination" };
const _hoisted_2$5 = {
  key: 0,
  class: "PaginationControl"
};
const _hoisted_3 = { class: "PaginationControl" };
const _hoisted_4 = { class: "PaginationControl" };
const _hoisted_5 = {
  key: 1,
  class: "PaginationControl"
};
(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

const render$6 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_icon_page_first = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon-page-first");
  const _component_icon_chevron_left = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon-chevron-left");
  const _component_v_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-page");
  const _component_icon_chevron_right = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon-chevron-right");
  const _component_icon_page_last = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon-page-last");

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", _hoisted_1$6, [
    (!_ctx.hideFirstButton)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", _hoisted_2$5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon_page_first, {
            class: ["Control", { 'Control-active': _ctx.isPrevControlsActive }],
            onClick: _ctx.goToFirst
          }, null, 8 /* PROPS */, ["class", "onClick"])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon_chevron_left, {
        class: ["Control", { 'Control-active': _ctx.isPrevControlsActive }],
        onClick: _ctx.goToPrev
      }, null, 8 /* PROPS */, ["class", "onClick"])
    ]),
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.pagination, (page) => {
      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_page, {
        key: `pagination-page-${page}`,
        page: page,
        current: _ctx.modelValue,
        "active-color": _ctx.activeColor,
        onUpdate: _ctx.updatePageHandler
      }, null, 8 /* PROPS */, ["page", "current", "active-color", "onUpdate"]))
    }), 128 /* KEYED_FRAGMENT */)),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", _hoisted_4, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon_chevron_right, {
        class: ["Control", { 'Control-active': _ctx.isNextControlsActive }],
        onClick: _ctx.goToNext
      }, null, 8 /* PROPS */, ["class", "onClick"])
    ]),
    (!_ctx.hideLastButton)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", _hoisted_5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon_page_last, {
            class: ["Control", { 'Control-active': _ctx.isNextControlsActive }],
            onClick: _ctx.goToLast
          }, null, 8 /* PROPS */, ["class", "onClick"])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ]))
});script$1.render = render$6;
script$1.__scopeId = "data-v-2a30deb0";
script$1.__file = "src/components/VPagination.vue";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script$1);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_jsonplaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/composables/jsonplaceholder */ "./resources/js/composables/jsonplaceholder.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/router */ "./resources/js/router/index.js");
/* harmony import */ var _components_ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/ui/Card */ "./resources/js/components/ui/Card.vue");
/* harmony import */ var _hennge_vue3_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hennge/vue3-pagination */ "./node_modules/@hennge/vue3-pagination/dist/vue3-pagination.esm.js");
/* harmony import */ var _hennge_vue3_pagination_dist_vue3_pagination_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hennge/vue3-pagination/dist/vue3-pagination.css */ "./node_modules/@hennge/vue3-pagination/dist/vue3-pagination.css");
/* harmony import */ var vue_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-debounce */ "./node_modules/vue-debounce/dist/vue-debounce.min.js");
/* harmony import */ var vue_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_utilities_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/components/utilities/Loading */ "./resources/js/components/utilities/Loading.vue");
/* harmony import */ var _composables_favorite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/composables/favorite */ "./resources/js/composables/favorite.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "JsonPlaceHolderImages",
  props: {
    start: {
      type: Number
    },
    limit: {
      type: Number
    },
    search: {
      type: String
    }
  },
  components: {
    VPagination: _hennge_vue3_pagination__WEBPACK_IMPORTED_MODULE_4__["default"],
    Loading: _components_utilities_Loading__WEBPACK_IMPORTED_MODULE_7__["default"],
    Card: _components_ui_Card__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  setup: function setup(props) {
    var _props$search;

    var start = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(parseInt(props.start));
    var limit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(parseInt(props.limit));
    var search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_props$search = props.search) !== null && _props$search !== void 0 ? _props$search : '');

    var _getPhotos = (0,_composables_jsonplaceholder__WEBPACK_IMPORTED_MODULE_1__.getPhotos)(),
        photos = _getPhotos.photos,
        totalPhotosCount = _getPhotos.totalPhotosCount,
        isFetchingPhotos = _getPhotos.isFetchingPhotos,
        fetchPhotos = _getPhotos.fetchPhotos;

    var pages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return Math.ceil(totalPhotosCount.value / limit.value);
    });
    var fetchFilteredRecords = (0,vue_debounce__WEBPACK_IMPORTED_MODULE_6__.debounce)(function (_) {
      /*wait 600ms without change before hitting an api end point*/
      _router__WEBPACK_IMPORTED_MODULE_2__["default"].push({
        path: '/',
        query: {
          start: start.value,
          limit: limit.value,
          search: search.value
        }
      });
      fetchPhotos(start.value, limit.value, search.value);
    }, '600ms');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return [limit.value, search.value];
    }, function () {
      start.value = 1;
      fetchFilteredRecords();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return [start.value];
    }, function () {
      fetchFilteredRecords();
    });
    fetchPhotos(start.value, limit.value, search.value);
    (0,_composables_favorite__WEBPACK_IMPORTED_MODULE_8__.fetchUserFavoriteImages)();
    return {
      photos: photos,
      start: start,
      limit: limit,
      totalPhotosCount: totalPhotosCount,
      pages: pages,
      search: search,
      isFetchingPhotos: isFetchingPhotos
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _composables_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/composables/user */ "./resources/js/composables/user.js");
/* harmony import */ var vue3_table_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-table-lite */ "./node_modules/vue3-table-lite/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ListUsers",
  components: {
    TableLite: vue3_table_lite__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    var _usersWithMostLikedIm = (0,_composables_user__WEBPACK_IMPORTED_MODULE_0__.usersWithMostLikedImagesCurrentWeek)(),
        metaData = _usersWithMostLikedIm.metaData,
        users = _usersWithMostLikedIm.users,
        loading = _usersWithMostLikedIm.loading,
        getUsersWithMostLikedImagesCurrentWeek = _usersWithMostLikedIm.getUsersWithMostLikedImagesCurrentWeek;

    var columns = [{
      label: "Name",
      field: "name",
      width: "30%",
      sortable: false
    }, {
      label: "Email",
      field: "email",
      width: "80%",
      sortable: false
    }, {
      label: "Likes",
      field: "likes",
      width: "20%",
      sortable: false
    }];

    var getUpdatedRecords = function getUpdatedRecords(offset) {
      getUsersWithMostLikedImagesCurrentWeek((offset + 10) / 10);
    };

    getUsersWithMostLikedImagesCurrentWeek();
    return {
      metaData: metaData,
      columns: columns,
      users: users,
      loading: loading,
      getUpdatedRecords: getUpdatedRecords
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _composables_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/composables/user */ "./resources/js/composables/user.js");
/* harmony import */ var _components_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/ui/Card */ "./resources/js/components/ui/Card.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RegisteredUsersFavoriteImages",
  components: {
    Card: _components_ui_Card__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    var _latestFavoriteImages = (0,_composables_user__WEBPACK_IMPORTED_MODULE_0__.latestFavoriteImages)(),
        images = _latestFavoriteImages.images,
        metaData = _latestFavoriteImages.metaData,
        fetching = _latestFavoriteImages.fetching,
        getLatestFavoriteImages = _latestFavoriteImages.getLatestFavoriteImages;

    getLatestFavoriteImages();

    var loadMoreFavoriteImages = function loadMoreFavoriteImages() {
      getLatestFavoriteImages(metaData.value.current_page + 1);
    };

    return {
      metaData: metaData,
      fetching: fetching,
      images: images,
      loadMoreFavoriteImages: loadMoreFavoriteImages
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _composables_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/composables/auth */ "./resources/js/composables/auth.js");
/* harmony import */ var _composables_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/composables/favorite */ "./resources/js/composables/favorite.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Card",
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  components: {},
  setup: function setup() {
    var _favoriteImages = (0,_composables_favorite__WEBPACK_IMPORTED_MODULE_1__.favoriteImages)(),
        getFavoriteImageIds = _favoriteImages.getFavoriteImageIds,
        loading = _favoriteImages.loading,
        toggleFavoriteImage = _favoriteImages.toggleFavoriteImage;

    return {
      isAuthenticated: _composables_auth__WEBPACK_IMPORTED_MODULE_0__.isAuthenticated,
      loading: loading,
      getFavoriteImageIds: getFavoriteImageIds,
      toggleFavoriteImage: toggleFavoriteImage
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/utilities/Loading.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/utilities/Loading.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Loading"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_home_JsonPlaceHolderImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/home/JsonPlaceHolderImages */ "./resources/js/components/home/JsonPlaceHolderImages.vue");
/* harmony import */ var _composables_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/composables/auth */ "./resources/js/composables/auth.js");
/* harmony import */ var _components_home_ListUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/home/ListUsers */ "./resources/js/components/home/ListUsers.vue");
/* harmony import */ var _components_home_RegisteredUsersFavoriteImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/RegisteredUsersFavoriteImages */ "./resources/js/components/home/RegisteredUsersFavoriteImages.vue");
/* harmony import */ var _utils_commonMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/utils/commonMethods */ "./resources/js/utils/commonMethods.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Home",
  props: {
    start: {
      type: Number
    },
    limit: {
      type: Number
    },
    search: {
      type: String
    }
  },
  components: {
    JsonPlaceHolderImages: _components_home_JsonPlaceHolderImages__WEBPACK_IMPORTED_MODULE_0__["default"],
    ListUsers: _components_home_ListUsers__WEBPACK_IMPORTED_MODULE_2__["default"],
    RegisteredUsersFavoriteImages: _components_home_RegisteredUsersFavoriteImages__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  setup: function setup() {
    var isTodayWeekend = (0,_utils_commonMethods__WEBPACK_IMPORTED_MODULE_4__.isDateWeekend)();
    return {
      isAuthenticated: _composables_auth__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated,
      isTodayWeekend: isTodayWeekend
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=template&id=a29bf4c4&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=template&id=a29bf4c4&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a29bf4c4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "w-full mt-2 text-2xl leading-7 text-gray-900 sm:text-3xl sm:truncate mb-8 text-center"
  }, "Photos", -1
  /* HOISTED */
  );
});

var _hoisted_2 = {
  "class": "flex justify-end mb-2"
};
var _hoisted_3 = {
  "for": "search"
};
var _hoisted_4 = {
  "for": "limit"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: 10
  }, "10", -1
  /* HOISTED */
  );
});

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: 25
  }, "25", -1
  /* HOISTED */
  );
});

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: 50
  }, "50", -1
  /* HOISTED */
  );
});

var _hoisted_8 = [_hoisted_5, _hoisted_6, _hoisted_7];
var _hoisted_9 = {
  "class": "grid gap-8 justify-center boothcards-grid px-4 mx-auto pb-16 mt-4"
};
var _hoisted_10 = {
  "class": "flex w-full pb-5 justify-center mt-auto"
};
var _hoisted_11 = {
  key: 1
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center font-bold mt-4"
  }, "No records found...!", -1
  /* HOISTED */
  );
});

var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = {
  key: 2,
  "class": "absolute inset-0 flex justify-center items-center max-w-md mx-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card");

  var _component_v_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-pagination");

  var _component_loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loading");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.search = $event;
    }),
    type: "search",
    id: "search",
    placeholder: "Search...",
    autocomplete: "off",
    "class": "py-2 text-sm border border-gray-900 rounded-md px-4 focus:outline-none focus:bg-white focus:text-gray-700"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.search, void 0, {
    trim: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "text-sm font-medium text-gray-900 rounded-md bg-gray py-2 px-2 bg-white border border-gray-700 mx-4",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.limit = $event;
    }),
    id: "limit"
  }, _hoisted_8, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.limit]])])]), !$setup.isFetchingPhotos && $setup.photos.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.photos, function (photo) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_card, {
      key: photo.id,
      photo: photo
    }, null, 8
    /* PROPS */
    , ["photo"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_pagination, {
    modelValue: $setup.start,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.start = $event;
    }),
    "total-items": $setup.totalPhotosCount,
    pages: $setup.pages,
    "range-size": 1
  }, null, 8
  /* PROPS */
  , ["modelValue", "total-items", "pages"])])], 64
  /* STABLE_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.isFetchingPhotos && $setup.photos.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.isFetchingPhotos ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_loading, {
    "class": "w-10 h-10"
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=template&id=c8a61e76":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=template&id=c8a61e76 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "w-full mt-2 text-2xl leading-7 text-gray-900 sm:text-3xl sm:truncate my-4 text-center"
}, "Users", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center my-2"
}, "Most liked images by user this week", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$metaData;

  var _component_table_lite = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("table-lite");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_table_lite, {
    "is-loading": $setup.loading,
    columns: $setup.columns,
    rows: $setup.users,
    total: (_$setup$metaData = $setup.metaData) === null || _$setup$metaData === void 0 ? void 0 : _$setup$metaData.total,
    sortable: true,
    onDoSearch: $setup.getUpdatedRecords
  }, null, 8
  /* PROPS */
  , ["is-loading", "columns", "rows", "total", "onDoSearch"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=template&id=c798a296&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=template&id=c798a296&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-c798a296"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "w-full mt-2 text-2xl leading-7 text-gray-900 sm:text-3xl sm:truncate mb-8 text-center"
  }, " Latest Liked Images Feed ", -1
  /* HOISTED */
  );
});

var _hoisted_2 = {
  "class": "grid gap-8 justify-center boothcards-grid px-4 mx-auto pb-16"
};
var _hoisted_3 = {
  "class": "flex items-center justify-center"
};
var _hoisted_4 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.images, function (image) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_card, {
      key: $setup.images.id,
      photo: image
    }, null, 8
    /* PROPS */
    , ["photo"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$setup.metaData && $setup.metaData.current_page < $setup.metaData.total_pages ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.loadMoreFavoriteImages && $setup.loadMoreFavoriteImages.apply($setup, arguments);
    }),
    disabled: $setup.fetching,
    "class": "text-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-3 disabled:opacity-50 disabled:cursor-not-allowed"
  }, " Load More ", 8
  /* PROPS */
  , _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=template&id=22b45c60&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=template&id=22b45c60&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-22b45c60"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "flex flex-col border items-start shadow-md group hover:shadow-xl p-4"
};
var _hoisted_2 = {
  "class": "flex-none w-full aspect-w-16 aspect-h-9 overflow-hidden card-height"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "p-2 w-full"
};
var _hoisted_5 = {
  "class": "text-md text-gray-600 leading-4 text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$photo$title;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$setup.isAuthenticated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["ml-auto", {
      'opacity-25 cursor-not-allowed': $setup.loading
    }])
  }, [$setup.getFavoriteImageIds[$props.photo.id] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
    key: 0,
    "class": "fas fa-heart cursor-pointer",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.toggleFavoriteImage($props.photo.id);
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.getFavoriteImageIds[$props.photo.id] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
    key: 1,
    "class": "far fa-heart cursor-pointer",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.toggleFavoriteImage($props.photo.id);
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.photo.thumbnailUrl,
    "class": "w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-500 ease-in-out border-b border-gray-300",
    alt: "'image'"
  }, null, 8
  /* PROPS */
  , _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$photo$title = $props.photo.title) !== null && _$props$photo$title !== void 0 ? _$props$photo$title : ''), 1
  /* TEXT */
  )])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/utilities/Loading.vue?vue&type=template&id=c4ba4648":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/utilities/Loading.vue?vue&type=template&id=c4ba4648 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "animate-spin",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  "class": "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-b3c5cf30"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "bg-white lg:min-w-0 lg:flex-1"
};
var _hoisted_2 = {
  "class": "h-full py-6 px-4 sm:px-6 lg:px-8"
};
var _hoisted_3 = {
  "class": "relative h-full home-container mx-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_json_place_holder_images = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("json-place-holder-images");

  var _component_list_users = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("list-users");

  var _component_registered_users_favorite_images = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("registered-users-favorite-images");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start main area"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$setup.isAuthenticated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_json_place_holder_images, {
    key: 0,
    start: $props.start,
    search: $props.search,
    limit: $props.limit
  }, null, 8
  /* PROPS */
  , ["start", "search", "limit"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.isAuthenticated && !$setup.isTodayWeekend ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_list_users, {
    key: 1
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.isAuthenticated && $setup.isTodayWeekend ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_registered_users_favorite_images, {
    key: 2
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End main area")])]);
}

/***/ }),

/***/ "./resources/js/composables/favorite.js":
/*!**********************************************!*\
  !*** ./resources/js/composables/favorite.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "favoriteImages": () => (/* binding */ favoriteImages),
/* harmony export */   "fetchUserFavoriteImages": () => (/* binding */ fetchUserFavoriteImages)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/stores */ "./resources/js/stores/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/api */ "./resources/js/utils/api.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var favoriteImages = function favoriteImages() {
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  var loading = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  var getFavoriteImageIds = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
    return _stores__WEBPACK_IMPORTED_MODULE_2__["default"].getters.favorite_image_ids;
  });

  var toggleFavoriteImage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(imageId) {
      var response, updatedImageIds, _error$response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              loading.value = true;
              _context.prev = 1;
              _context.next = 4;
              return _utils_api__WEBPACK_IMPORTED_MODULE_3__["default"].post("/api/user/toggleFavoriteImage", {
                image_id: imageId
              });

            case 4:
              response = _context.sent;
              updatedImageIds = _objectSpread({}, getFavoriteImageIds.value);

              if (response.data.favorite) {
                updatedImageIds[imageId] = imageId;
              } else {
                delete updatedImageIds[imageId];
              }

              _stores__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('sync_favorite_image_ids', updatedImageIds);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              errors.value = (_error$response = _context.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.data;
              console.log(_context.t0, 'inside error', _context.t0.response);

            case 14:
              _context.prev = 14;
              loading.value = false;
              return _context.finish(14);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10, 14, 17]]);
    }));

    return function toggleFavoriteImage(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    loading: loading,
    errors: errors,
    getFavoriteImageIds: getFavoriteImageIds,
    toggleFavoriteImage: toggleFavoriteImage
  };
};
var fetchUserFavoriteImages = function fetchUserFavoriteImages() {
  _stores__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("get_favorite_image_ids");
};

/***/ }),

/***/ "./resources/js/composables/jsonplaceholder.js":
/*!*****************************************************!*\
  !*** ./resources/js/composables/jsonplaceholder.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getJsonPlaceHolderPhotosByIds": () => (/* binding */ getJsonPlaceHolderPhotosByIds),
/* harmony export */   "getPhotos": () => (/* binding */ getPhotos)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getPhotos = function getPhotos() {
  var photos = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var isFetchingPhotos = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(true);
  var totalPhotosCount = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);

  var fetchPhotos = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(start, limit) {
      var searchText,
          response,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              searchText = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
              _context.prev = 1;
              isFetchingPhotos.value = true;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://jsonplaceholder.typicode.com/photos?_page=".concat(start, "&_limit=").concat(limit, "&q=").concat(searchText));

            case 5:
              response = _context.sent;
              photos.value = response.data;
              totalPhotosCount.value = parseInt(response.headers['x-total-count']);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 13:
              _context.prev = 13;
              isFetchingPhotos.value = false;
              return _context.finish(13);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10, 13, 16]]);
    }));

    return function fetchPhotos(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    photos: photos,
    totalPhotosCount: totalPhotosCount,
    fetchPhotos: fetchPhotos,
    isFetchingPhotos: isFetchingPhotos
  };
};
var getJsonPlaceHolderPhotosByIds = function getJsonPlaceHolderPhotosByIds() {
  var images = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var isFetching = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(true);

  var fetchJsonPlaceHolderPhotosByIds = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(idQueryString) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              isFetching.value = true;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://jsonplaceholder.typicode.com/photos?".concat(idQueryString));

            case 4:
              response = _context2.sent;
              images.value = response;
              return _context2.abrupt("return", response);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 12:
              _context2.prev = 12;
              isFetching.value = false;
              return _context2.finish(12);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9, 12, 15]]);
    }));

    return function fetchJsonPlaceHolderPhotosByIds(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    images: images,
    fetchJsonPlaceHolderPhotosByIds: fetchJsonPlaceHolderPhotosByIds
  };
};

/***/ }),

/***/ "./resources/js/composables/user.js":
/*!******************************************!*\
  !*** ./resources/js/composables/user.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "latestFavoriteImages": () => (/* binding */ latestFavoriteImages),
/* harmony export */   "usersWithMostLikedImagesCurrentWeek": () => (/* binding */ usersWithMostLikedImagesCurrentWeek)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _jsonplaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsonplaceholder */ "./resources/js/composables/jsonplaceholder.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/api */ "./resources/js/utils/api.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var usersWithMostLikedImagesCurrentWeek = function usersWithMostLikedImagesCurrentWeek() {
  var metaData = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  var users = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  var loading = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);

  var getUsersWithMostLikedImagesCurrentWeek = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var page,
          response,
          _error$response,
          _args = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
              _context.prev = 1;
              loading.value = true;
              _context.next = 5;
              return _utils_api__WEBPACK_IMPORTED_MODULE_3__["default"].get("/api/getUsersWithMostLikedImagesCurrentWeek?page=".concat(page));

            case 5:
              response = _context.sent;
              metaData.value = response.data.users.pagination;
              users.value = response.data.users.data.map(function (user) {
                return {
                  'name': user.name,
                  'email': user.email,
                  'likes': user.favorites_images_count_current_week
                };
              });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              errors.value = (_error$response = _context.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.data;

            case 13:
              _context.prev = 13;
              loading.value = false;
              return _context.finish(13);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10, 13, 16]]);
    }));

    return function getUsersWithMostLikedImagesCurrentWeek() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    loading: loading,
    errors: errors,
    getUsersWithMostLikedImagesCurrentWeek: getUsersWithMostLikedImagesCurrentWeek,
    metaData: metaData,
    users: users
  };
};
var latestFavoriteImages = function latestFavoriteImages() {
  var metaData = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

  var _getJsonPlaceHolderPh = (0,_jsonplaceholder__WEBPACK_IMPORTED_MODULE_2__.getJsonPlaceHolderPhotosByIds)(),
      fetchJsonPlaceHolderPhotosByIds = _getJsonPlaceHolderPh.fetchJsonPlaceHolderPhotosByIds;

  var images = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  var favoriteImageIdsQueryString = '';
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  var fetching = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  var alreadyAddedIdsToString = new Set();
  /*remove duplicates from query string*/

  var getLatestFavoriteImages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var page,
          response,
          jsonPlaceholderImagesResponse,
          _error$response2,
          _args2 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
              fetching.value = true;
              _context2.prev = 2;
              _context2.next = 5;
              return _utils_api__WEBPACK_IMPORTED_MODULE_3__["default"].get("/api/latestFavoriteImages?page=".concat(page));

            case 5:
              response = _context2.sent;
              metaData.value = response.data.latest_favorite_images.pagination;
              response.data.latest_favorite_images.data.forEach(function (image) {
                if (!alreadyAddedIdsToString.has(image.image_id)) {
                  favoriteImageIdsQueryString += "id=".concat(image.image_id, "&");
                }

                alreadyAddedIdsToString.add(image.image_id);
              });
              _context2.next = 10;
              return fetchJsonPlaceHolderPhotosByIds(favoriteImageIdsQueryString);

            case 10:
              jsonPlaceholderImagesResponse = _context2.sent;
              images.value = jsonPlaceholderImagesResponse.data;
              console.log(favoriteImageIdsQueryString, jsonPlaceholderImagesResponse);
              _context2.next = 19;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](2);
              errors.value = (_error$response2 = _context2.t0.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data;
              console.log(_context2.t0, 'inside error', _context2.t0.response);

            case 19:
              _context2.prev = 19;
              fetching.value = false;
              return _context2.finish(19);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 15, 19, 22]]);
    }));

    return function getLatestFavoriteImages() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    fetching: fetching,
    errors: errors,
    getLatestFavoriteImages: getLatestFavoriteImages,
    metaData: metaData,
    images: images
  };
};

/***/ }),

/***/ "./resources/js/utils/commonMethods.js":
/*!*********************************************!*\
  !*** ./resources/js/utils/commonMethods.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDateWeekend": () => (/* binding */ isDateWeekend)
/* harmony export */ });
/*0%6(Sunday) and 6%6 (Saturday) both have a 0*/
var isDateWeekend = function isDateWeekend() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  return date.getDay() % 6 === 0;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@hennge/vue3-pagination/dist/vue3-pagination.css":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@hennge/vue3-pagination/dist/vue3-pagination.css ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n** Breakpoints\n*/\n/*\n** Black\n*/\n/*\n** Grey\n*/\n/*\n** Colors\n*/\n/*\n** Font\n*/\n.Pagination {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\n.PaginationControl {\n  display: flex;\n  align-items: center; }\n\n.Control {\n  position: relative;\n  display: block;\n  width: 18px;\n  height: 18px;\n  margin: 0 2px;\n  fill: #BBBBBB; }\n  .Control-active {\n    fill: #333333;\n    cursor: pointer;\n    transition: fill 0.2s ease-in-out; }\n    .Control-active:hover {\n      fill: #000000;\n      transition: fill 0.2s ease-in-out; }\n\n/*\n** Breakpoints\n*/\n/*\n** Black\n*/\n/*\n** Grey\n*/\n/*\n** Colors\n*/\n/*\n** Font\n*/\n.Page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  margin: 0 2px;\n  color: #666666;\n  background-color: transparent;\n  font-size: 14px;\n  border-radius: 3px;\n  box-sizing: border-box;\n  border-color: transparent;\n  cursor: pointer;\n  outline: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .Page:hover {\n    border: 1px solid #DEDEDE; }\n  .Page-active {\n    color: #333333;\n    border: 1px solid #DEDEDE; }\n\n.DotsHolder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  margin: 0 2px;\n  box-sizing: border-box; }\n\n.Dots {\n  width: 8px;\n  height: 4px;\n  fill: #BBBBBB; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vtl-checkbox-th[data-v-14f67392] {\n  width: 1%;\n}\n.vtl-both[data-v-14f67392] {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7X QMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azioNZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4euts6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC\");\n}\n.vtl-sortable[data-v-14f67392] {\n  cursor: pointer;\n  background-position: right;\n  background-repeat: no-repeat;\n  padding-right: 30px !important;\n}\n.vtl-asc[data-v-14f67392] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==);\n}\n.vtl-desc[data-v-14f67392] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII=);\n}\n.vtl-loading-mask[data-v-14f67392] {\n  position: absolute;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-flow: column;\n  transition: opacity 0.3s ease;\n}\n.vtl-loading-content[data-v-14f67392] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vtl-card[data-v-14f67392] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n}\nselect[data-v-14f67392] {\n  width: auto;\n  border: 1px solid #cccccc;\n  background-color: #ffffff;\n  height: auto;\n  padding: 0;\n  margin-bottom: 0;\n}\n.vtl-table[data-v-14f67392] {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n  border-collapse: collapse;\n}\nth[data-v-14f67392] {\n  text-align: inherit;\n}\ntr[data-v-14f67392] {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit;\n}\n.vtl-table-bordered thead td[data-v-14f67392],\n.vtl-table-bordered thead th[data-v-14f67392] {\n  border-bottom-width: 2px;\n}\n.vtl-table thead th[data-v-14f67392] {\n  vertical-align: bottom;\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55;\n  border-bottom: 2px solid #dee2e6;\n}\n.vtl-table-bordered td[data-v-14f67392],\n.vtl-table-bordered th[data-v-14f67392] {\n  border: 1px solid #dee2e6;\n}\n.vtl-table td[data-v-14f67392],\n.vtl-table th[data-v-14f67392] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n  vertical-align: middle;\n}\n.vtl-table-hover tbody tr[data-v-14f67392]:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.vtl-table-responsive[data-v-14f67392] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.vtl-table-responsive > .vtl-table-bordered[data-v-14f67392] {\n  border: 0;\n}\n.vtl-row[data-v-14f67392] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.vtl-pagination[data-v-14f67392] {\n  margin: 2px 0;\n  white-space: nowrap;\n  justify-content: flex-end;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n.page-item.disabled .page-link[data-v-14f67392] {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.page-item:first-child .page-link[data-v-14f67392] {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-link[data-v-14f67392] {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n.sr-only[data-v-14f67392] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n*[data-v-14f67392],[data-v-14f67392]::after,[data-v-14f67392]::before {\n  box-sizing: border-box;\n}\n.col-sm-12[data-v-14f67392] {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.text-center[data-v-14f67392] {\n  text-align: center;\n}\n@media (min-width: 576px) {\n.vtl-table-responsive-sm[data-v-14f67392] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n}\n.vtl-table-responsive-sm > .table-bordered[data-v-14f67392] {\n    border: 0;\n}\n.col-md-4[data-v-14f67392] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.boothcards-grid[data-v-a29bf4c4] {\n  grid-template-columns: repeat(auto-fit, 18rem);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n::v-deep(.vtl-paging-pagination-page-link) {\n  border: none;\n}\n.vtl-paging-count-label, .vtl-paging-count-dropdown {\n  visibility: hidden !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.boothcards-grid[data-v-c798a296] {\n  grid-template-columns: repeat(auto-fit, 18rem);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-height[data-v-22b45c60]{\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.fa-heart[data-v-22b45c60]{\n  color: red;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.home-container[data-v-b3c5cf30] {\n  min-height: 36rem;\n  max-width: 80%\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/@hennge/vue3-pagination/dist/vue3-pagination.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@hennge/vue3-pagination/dist/vue3-pagination.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue3_pagination_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./vue3-pagination.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@hennge/vue3-pagination/dist/vue3-pagination.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue3_pagination_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue3_pagination_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_TableLite_vue_vue_type_style_index_0_id_14f67392_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_TableLite_vue_vue_type_style_index_0_id_14f67392_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_TableLite_vue_vue_type_style_index_0_id_14f67392_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JsonPlaceHolderImages_vue_vue_type_style_index_0_id_a29bf4c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JsonPlaceHolderImages_vue_vue_type_style_index_0_id_a29bf4c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JsonPlaceHolderImages_vue_vue_type_style_index_0_id_a29bf4c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListUsers_vue_vue_type_style_index_0_id_c8a61e76_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListUsers_vue_vue_type_style_index_0_id_c8a61e76_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListUsers_vue_vue_type_style_index_0_id_c8a61e76_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisteredUsersFavoriteImages_vue_vue_type_style_index_0_id_c798a296_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisteredUsersFavoriteImages_vue_vue_type_style_index_0_id_c798a296_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisteredUsersFavoriteImages_vue_vue_type_style_index_0_id_c798a296_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_22b45c60_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_22b45c60_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_22b45c60_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-debounce/dist/vue-debounce.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-debounce/dist/vue-debounce.min.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

!function(e,t){ true?t(exports):0}(this,(function(e){"use strict";function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,n){var r,o,i,a,u=null,l="number"==typeof n?n:(r=t(String(n).split(/(ms|s)/i),2),o=r[0],i=r[1],a=void 0===i?"ms":i,Number(o)*{ms:1,s:1e3}[a]),c=function(){for(var t=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=function(){u=null,e.apply(t,r)};clearTimeout(u),(u=setTimeout(i,l))||e.apply(this,r)};return c.cancel=function(){clearTimeout(u),u=null},c}function o(e){return e.map((function(e){return e.toLowerCase()}))}function i(e,t){var n,r=e?e["debounce-events"]:[];return r&&r.length>0?Array.isArray(r)?o(r):o(r.split(",")):o((n=t,Array.isArray(n)?n:null==n?[]:[n]))}function a(e){return""===e}function u(e,t){return"Enter"===e&&(!t.lock||t.unlock)}function l(e,t,n){return a(e)&&n.fireonempty&&("Enter"===t||" "===t)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.lock,n=void 0!==t&&t,o=e.listenTo,c=void 0===o?"keyup":o,f=e.defaultTime,v=void 0===f?"300ms":f,d=e.fireOnEmpty,s=void 0!==d&&d,y=e.cancelOnEmpty,m=void 0!==y&&y,p=e.trim,g=void 0!==p&&p;return{bind:function(e,t,o){var f=t.value,d=t.arg,y=void 0===d?v:d,p=t.modifiers,b=Object.assign({lock:n,trim:g,fireonempty:s,cancelonempty:m},p),h=i(o.data.attrs,c),k=r((function(e){f(e.target.value,e)}),y);function A(e){var t=b.trim?e.target.value.trim():e.target.value;a(t)&&b.cancelonempty?k.cancel():u(e.key,b)||l(t,e.key,b)?(k.cancel(),f(e.target.value,e)):k(e)}h.forEach((function(t){e.addEventListener(t,A)}))}}}var f={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.directive("debounce",c(t))}};e.debounce=r,e.default=f,e.vue3Debounce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.lock,n=void 0!==t&&t,o=e.listenTo,c=void 0===o?"keyup":o,f=e.defaultTime,v=void 0===f?"300ms":f,d=e.fireOnEmpty,s=void 0!==d&&d,y=e.cancelOnEmpty,m=void 0!==y&&y,p=e.trim,g=void 0!==p&&p;return{created:function(e,t,o){var f=t.value,d=t.arg,y=void 0===d?v:d,p=t.modifiers,b=Object.assign({lock:n,trim:g,fireonempty:s,cancelonempty:m},p),h=i(o.props,c),k=r((function(e){f(e.target.value,e)}),y);function A(e){var t=b.trim?e.target.value.trim():e.target.value;a(t)&&b.cancelonempty?k.cancel():u(e.key,b)||l(t,e.key,b)?(k.cancel(),f(e.target.value,e)):k(e)}h.forEach((function(t){e.addEventListener(t,A)}))}}},Object.defineProperty(e,"__esModule",{value:!0})}));


/***/ }),

/***/ "./node_modules/vue3-table-lite/src/components/TableLite.vue":
/*!*******************************************************************!*\
  !*** ./node_modules/vue3-table-lite/src/components/TableLite.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableLite_vue_vue_type_template_id_14f67392_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableLite.vue?vue&type=template&id=14f67392&scoped=true */ "./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=template&id=14f67392&scoped=true");
/* harmony import */ var _TableLite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableLite.vue?vue&type=script&lang=js */ "./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=script&lang=js");
/* harmony import */ var _TableLite_vue_vue_type_style_index_0_id_14f67392_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css */ "./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css");
/* harmony import */ var _var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_TableLite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TableLite_vue_vue_type_template_id_14f67392_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-14f67392"],['__file',"node_modules/vue3-table-lite/src/components/TableLite.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "my-table",
  emits: [
    "return-checked-rows",
    "do-search",
    "is-finished",
    "get-now-page",
    "row-clicked",
  ],
  props: {
    // 是否讀取中 (is data loading)
    isLoading: {
      type: Boolean,
      require: true,
    },
    // 是否執行了重新查詢 (Whether to perform a re-query)
    isReSearch: {
      type: Boolean,
      require: true,
    },
    // 有無Checkbox (Presence of Checkbox)
    hasCheckbox: {
      type: Boolean,
      default: false,
    },
    // Checkbox勾選後返回資料的型態 (Returns data type for checked of Checkbox)
    checkedReturnType: {
      type: String,
      default: "key",
    },
    // 標題 (title)
    title: {
      type: String,
      default: "",
    },
    // 欄位 (Field)
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 資料 (data)
    rows: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 資料列類別 (data row classes)
    rowClasses: {
      type: [Array, Function],
      default: () => {
        return [];
      },
    },
    // 一頁顯示筆數 (Display the number of items on one page)
    pageSize: {
      type: Number,
      default: 10,
    },
    // 總筆數 (Total number of transactions)
    total: {
      type: Number,
      default: 100,
    },
    // 現在頁數 (Current page number)
    page: {
      type: Number,
      default: 1,
    },
    // 排序條件 (Sort condition)
    sortable: {
      type: Object,
      default: () => {
        return {
          order: "id",
          sort: "asc",
        };
      },
    },
    // 顯示文字 (Display text)
    messages: {
      type: Object,
      default: () => {
        return {
          pagingInfo: "Showing {0}-{1} of {2}",
          pageSizeChangeLabel: "Row count:",
          gotoPageLabel: "Go to page:",
          noDataAvailable: "No data",
        };
      },
    },
    // 靜態模式 (Static mode(no refresh server data))
    isStaticMode: {
      type: Boolean,
      default: false,
    },
    // 插槽模式 (V-slot mode)
    isSlotMode: {
      type: Boolean,
      default: false,
    },
    // 是否隱藏換頁資訊 (Hide paging)
    isHidePaging: {
      type: Boolean,
      default: false,
    },
    // 一頁顯示筆數下拉選單 (Dropdown of Display the number of items on one page)
    pageOptions: {
      type: Array,
      default: () => [
        {
          value: 10,
          text: 10,
        },
        {
          value: 25,
          text: 25,
        },
        {
          value: 50,
          text: 50,
        },
      ],
    },
  },
  setup(props, { emit, slots }) {
    let localTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    // 檢查下拉選單中是否包含預設一頁顯示筆數 (Validate dropdown's values have page-size value or not)
    let defaultPageSize =
      props.pageOptions.length > 0
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.pageOptions[0].value)
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.pageSize);
    if (props.pageOptions.length > 0) {
      props.pageOptions.forEach((v) => {
        if (
          Object.prototype.hasOwnProperty.call(v, "value") &&
          Object.prototype.hasOwnProperty.call(v, "text") &&
          props.pageSize == v.value
        ) {
          defaultPageSize.value = v.value;
        }
      });
    }

    // 組件用內部設定值 (Internal set value for components)
    const setting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      // 是否啟用Slot模式 (Enable slot mode)
      isSlotMode: props.isSlotMode,
      // 是否全選 (Whether to select all)
      isCheckAll: false,
      // 是否隱藏換頁資訊 (Hide paging)
      isHidePaging: props.isHidePaging,
      // KEY欄位名稱 (KEY field name)
      keyColumn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        let key = "";
        Object.assign(props.columns).forEach((col) => {
          if (col.isKey) {
            key = col.field;
          }
        });
        return key;
      }),
      // 當前頁數 (current page number)
      page: props.page,
      // 每頁顯示筆數 (Display count per page)
      pageSize: defaultPageSize.value,
      // 最大頁數 (Maximum number of pages)
      maxPage: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (props.total <= 0) {
          return 0;
        }
        let maxPage = Math.floor(props.total / setting.pageSize);
        let mod = props.total % setting.pageSize;
        if (mod > 0) {
          maxPage++;
        }
        return maxPage;
      }),
      // 該頁數起始值 (The starting value of the page number)
      offset: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return (setting.page - 1) * setting.pageSize + 1;
      }),
      // 該頁數最大值 (Maximum number of pages0
      limit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        let limit = setting.page * setting.pageSize;
        return props.total >= limit ? limit : props.total;
      }),
      // 換頁陣列 (Paging array)
      paging: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        let startPage = setting.page - 2 <= 0 ? 1 : setting.page - 2;
        if (setting.maxPage - setting.page <= 2) {
          startPage = setting.maxPage - 4;
        }
        startPage = startPage <= 0 ? 1 : startPage;
        let pages = [];
        for (let i = startPage; i <= setting.maxPage; i++) {
          if (pages.length < 5) {
            pages.push(i);
          }
        }
        return pages;
      }),
      // 組件內用排序 (Sortable for local)
      order: props.sortable.order,
      sort: props.sortable.sort,
      pageOptions: props.pageOptions,
    });

    // 組件內用資料 (Data rows for local)
    const localRows = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      // sort rows
      let property = setting.order;
      let sort_order = 1;
      if (setting.sort === "desc") {
        sort_order = -1;
      }
      let rows = props.rows;
      rows.sort((a, b) => {
        if (a[property] < b[property]) {
          return -1 * sort_order;
        } else if (a[property] > b[property]) {
          return sort_order;
        } else {
          return 0;
        }
      });

      // return sorted and offset rows
      let result = [];
      for (let index = setting.offset - 1; index < setting.limit; index++) {
        if (rows[index]) {
          result.push(rows[index]);
        }
      }

      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        // 資料完成渲染後回傳私有元件
        callIsFinished();
      });

      return result;
    });

    ////////////////////////////
    //
    //  Checkbox 相關操作
    //  (Checkbox related operations)
    //

    // 定義Checkbox參照 (Define Checkbox reference)
    const rowCheckbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    if (props.hasCheckbox) {
      /**
       * 重新渲染前執行 (Execute before re-rendering)
       */
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate)(() => {
        // 每次更新前都把值全部清空 (Clear all values before each update)
        rowCheckbox.value = [];
      });

      /**
       * 監聽全勾選Checkbox (Check all checkboxes for monitoring)
       */
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
        () => setting.isCheckAll,
        (state) => {
          let isChecked = [];
          rowCheckbox.value.forEach((val, i) => {
            if (val) {
              val.checked = state;
              if (val.checked) {
                if (props.checkedReturnType == "row") {
                  isChecked.push(localRows.value[i]);
                } else {
                  isChecked.push(val.value);
                }
              }
            }
          });
          // 回傳畫面上選上的資料 (Return the selected data on the screen)
          emit("return-checked-rows", isChecked);
        }
      );
    }

    /**
     * Checkbox點擊事件 (Checkbox click event)
     */
    const checked = (event) => {
      event.stopPropagation();
      let isChecked = [];
      rowCheckbox.value.forEach((val, i) => {
        if (val && val.checked) {
          if (props.checkedReturnType == "row") {
            isChecked.push(localRows.value[i]);
          } else {
            isChecked.push(val.value);
          }
        }
      });
      // 回傳畫面上選上的資料 (Return the selected data on the screen)
      emit("return-checked-rows", isChecked);
    };

    /**
     * 清空畫面上所有選擇資料 (Clear all selected data on the screen)
     */
    const clearChecked = () => {
      rowCheckbox.value.forEach((val) => {
        if (val && val.checked) {
          val.checked = false;
        }
      });
      // 回傳畫面上選上的資料 (Return the selected data on the screen)
      emit("return-checked-rows", []);
    };

    ////////////////////////////
    //
    //  排序·換頁等 相關操作
    //  (Sorting, page change, etc. related operations)
    //

    /**
     * 呼叫執行排序 (Call execution sequencing)
     */
    const doSort = (order) => {
      let sort = "asc";
      if (order == setting.order) {
        // 排序中的項目時 (When sorting items)
        if (setting.sort == "asc") {
          sort = "desc";
        }
      }
      let offset = (setting.page - 1) * setting.pageSize;
      let limit = setting.pageSize;
      setting.order = order;
      setting.sort = sort;
      emit("do-search", offset, limit, order, sort);

      // 清空畫面上選擇的資料 (Clear the selected data on the screen)
      if (setting.isCheckAll) {
        // 取消全選時自然會清空 (It will be cleared when you cancel all selections)
        setting.isCheckAll = false;
      } else {
        if (props.hasCheckbox) {
          clearChecked();
        }
      }
    };

    /**
     * 切換頁碼 (Switch page number)
     *
     * @param page      number  新頁碼    (New page number)
     * @param prevPage  number  現在頁碼  (Current page number)
     */
    const changePage = (page, prevPage) => {
      setting.isCheckAll = false;
      let order = setting.order;
      let sort = setting.sort;
      let offset = (page - 1) * setting.pageSize;
      let limit = setting.pageSize;
      if (!props.isReSearch || page > 1 || page == prevPage) {
        // 非重新查詢發生的頁碼變動才執行呼叫查詢 (Call query will only be executed if the page number is changed without re-query)
        emit("do-search", offset, limit, order, sort);
      }
    };
    // 監聽頁碼切換 (Monitor page switching)
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => setting.page, changePage);
    // 監聽手動頁碼切換 (Monitor manual page switching)
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
      () => props.page,
      (val) => {
        if (val <= 1) {
          setting.page = 1;
          emit("get-now-page", setting.page);
        } else if (val >= setting.maxPage) {
          setting.page = setting.maxPage;
          emit("get-now-page", setting.page);
        } else {
          setting.page = val;
        }
      }
    );

    /**
     * 切換顯示筆數 (Switch display number)
     */
    const changePageSize = () => {
      if (setting.page === 1) {
        // 沒自動觸發 changePage()，所以手動觸發
        changePage(setting.page, setting.page);
      } else {
        // 強制返回第一頁,並自動觸發 changePage()
        setting.page = 1;
        setting.isCheckAll = false;
      }
    };
    // 監聽組件內顯示筆數切換 (Monitor display number switch from component)
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => setting.pageSize, changePageSize);
    // 監聽來自Prop的顯示筆數切換 (Monitor display number switch from prop)
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
      () => props.pageSize,
      (newPageSize) => {
        setting.pageSize = newPageSize;
      }
    );

    /**
     * 上一頁 (Previous page)
     */
    const prevPage = () => {
      if (setting.page == 1) {
        // 如果是第一頁，不予執行 (If it is the first page, it will not be executed)
        return false;
      }
      setting.page--;
    };

    /**
     * 移動至指定頁數 (Move to the specified number of pages)
     */
    const movePage = (page) => {
      setting.page = page;
    };

    /**
     * 下一頁 (Next page)
     */
    const nextPage = () => {
      if (setting.page >= setting.maxPage) {
        // 如果等於大於最大頁數，不與執行 (If it is equal to or greater than the maximum number of pages, no execution)
        return false;
      }
      setting.page++;
    };

    // 監聽資料變更 (Monitoring data changes)
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
      () => props.rows,
      () => {
        if (props.isReSearch || props.isStaticMode) {
          setting.page = 1;
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
          // 資料完成渲染後回傳私有元件 (Return the private components after the data is rendered)
          if (!props.isStaticMode) {
            callIsFinished();
          }
        });
      }
    );

    const stringFormat = (template, ...args) => {
      return template.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
      });
    };

    // Call 「is-finished」 Method
    const callIsFinished = () => {
      if (localTable.value) {
        let localElement = localTable.value.getElementsByClassName("is-rows-el");
        emit("is-finished", localElement);
      }
      emit("get-now-page", setting.page);
    };

    /**
     * 組件掛載後事件 (Mounted Event)
     */
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        if (props.rows.length > 0) {
          callIsFinished();
        }
      });
    });

    if (props.hasCheckbox) {
      // 需要 Checkbox 時 (When Checkbox is needed)
      return {
        slots,
        localTable,
        localRows,
        setting,
        rowCheckbox,
        checked,
        doSort,
        prevPage,
        movePage,
        nextPage,
        stringFormat,
      };
    } else {
      return {
        slots,
        localTable,
        localRows,
        setting,
        doSort,
        prevPage,
        movePage,
        nextPage,
        stringFormat,
      };
    }
  },
}));


/***/ }),

/***/ "./resources/js/components/home/JsonPlaceHolderImages.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/home/JsonPlaceHolderImages.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JsonPlaceHolderImages_vue_vue_type_template_id_a29bf4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JsonPlaceHolderImages.vue?vue&type=template&id=a29bf4c4&scoped=true */ "./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=template&id=a29bf4c4&scoped=true");
/* harmony import */ var _JsonPlaceHolderImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JsonPlaceHolderImages.vue?vue&type=script&lang=js */ "./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=script&lang=js");
/* harmony import */ var _JsonPlaceHolderImages_vue_vue_type_style_index_0_id_a29bf4c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css */ "./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css");
/* harmony import */ var _var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_JsonPlaceHolderImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_JsonPlaceHolderImages_vue_vue_type_template_id_a29bf4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a29bf4c4"],['__file',"resources/js/components/home/JsonPlaceHolderImages.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/home/ListUsers.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/home/ListUsers.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListUsers_vue_vue_type_template_id_c8a61e76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListUsers.vue?vue&type=template&id=c8a61e76 */ "./resources/js/components/home/ListUsers.vue?vue&type=template&id=c8a61e76");
/* harmony import */ var _ListUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListUsers.vue?vue&type=script&lang=js */ "./resources/js/components/home/ListUsers.vue?vue&type=script&lang=js");
/* harmony import */ var _ListUsers_vue_vue_type_style_index_0_id_c8a61e76_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css */ "./resources/js/components/home/ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css");
/* harmony import */ var _var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ListUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ListUsers_vue_vue_type_template_id_c8a61e76__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/home/ListUsers.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/home/RegisteredUsersFavoriteImages.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/home/RegisteredUsersFavoriteImages.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisteredUsersFavoriteImages_vue_vue_type_template_id_c798a296_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisteredUsersFavoriteImages.vue?vue&type=template&id=c798a296&scoped=true */ "./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=template&id=c798a296&scoped=true");
/* harmony import */ var _RegisteredUsersFavoriteImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisteredUsersFavoriteImages.vue?vue&type=script&lang=js */ "./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=script&lang=js");
/* harmony import */ var _RegisteredUsersFavoriteImages_vue_vue_type_style_index_0_id_c798a296_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css */ "./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css");
/* harmony import */ var _var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_RegisteredUsersFavoriteImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RegisteredUsersFavoriteImages_vue_vue_type_template_id_c798a296_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-c798a296"],['__file',"resources/js/components/home/RegisteredUsersFavoriteImages.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ui/Card.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/ui/Card.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_22b45c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=22b45c60&scoped=true */ "./resources/js/components/ui/Card.vue?vue&type=template&id=22b45c60&scoped=true");
/* harmony import */ var _Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js */ "./resources/js/components/ui/Card.vue?vue&type=script&lang=js");
/* harmony import */ var _Card_vue_vue_type_style_index_0_id_22b45c60_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css */ "./resources/js/components/ui/Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css");
/* harmony import */ var _var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Card_vue_vue_type_template_id_22b45c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-22b45c60"],['__file',"resources/js/components/ui/Card.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/utilities/Loading.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/utilities/Loading.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loading_vue_vue_type_template_id_c4ba4648__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.vue?vue&type=template&id=c4ba4648 */ "./resources/js/components/utilities/Loading.vue?vue&type=template&id=c4ba4648");
/* harmony import */ var _Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.vue?vue&type=script&lang=js */ "./resources/js/components/utilities/Loading.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Loading_vue_vue_type_template_id_c4ba4648__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/utilities/Loading.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30&scoped=true */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/pages/Home.vue?vue&type=script&lang=js");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css */ "./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css");
/* harmony import */ var _var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_GalleryApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_b3c5cf30_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-b3c5cf30"],['__file',"resources/js/pages/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JsonPlaceHolderImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JsonPlaceHolderImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./JsonPlaceHolderImages.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/home/ListUsers.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/home/ListUsers.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListUsers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListUsers.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisteredUsersFavoriteImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisteredUsersFavoriteImages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisteredUsersFavoriteImages.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ui/Card.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/ui/Card.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/utilities/Loading.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/utilities/Loading.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loading.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/utilities/Loading.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=template&id=a29bf4c4&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=template&id=a29bf4c4&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JsonPlaceHolderImages_vue_vue_type_template_id_a29bf4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JsonPlaceHolderImages_vue_vue_type_template_id_a29bf4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./JsonPlaceHolderImages.vue?vue&type=template&id=a29bf4c4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=template&id=a29bf4c4&scoped=true");


/***/ }),

/***/ "./resources/js/components/home/ListUsers.vue?vue&type=template&id=c8a61e76":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/home/ListUsers.vue?vue&type=template&id=c8a61e76 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListUsers_vue_vue_type_template_id_c8a61e76__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListUsers_vue_vue_type_template_id_c8a61e76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListUsers.vue?vue&type=template&id=c8a61e76 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=template&id=c8a61e76");


/***/ }),

/***/ "./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=template&id=c798a296&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=template&id=c798a296&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisteredUsersFavoriteImages_vue_vue_type_template_id_c798a296_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisteredUsersFavoriteImages_vue_vue_type_template_id_c798a296_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisteredUsersFavoriteImages.vue?vue&type=template&id=c798a296&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=template&id=c798a296&scoped=true");


/***/ }),

/***/ "./resources/js/components/ui/Card.vue?vue&type=template&id=22b45c60&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ui/Card.vue?vue&type=template&id=22b45c60&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_template_id_22b45c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_template_id_22b45c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=template&id=22b45c60&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=template&id=22b45c60&scoped=true");


/***/ }),

/***/ "./resources/js/components/utilities/Loading.vue?vue&type=template&id=c4ba4648":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/utilities/Loading.vue?vue&type=template&id=c4ba4648 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loading_vue_vue_type_template_id_c4ba4648__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loading_vue_vue_type_template_id_c4ba4648__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loading.vue?vue&type=template&id=c4ba4648 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/utilities/Loading.vue?vue&type=template&id=c4ba4648");


/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_b3c5cf30_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_b3c5cf30_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=b3c5cf30&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&scoped=true");


/***/ }),

/***/ "./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_TableLite_vue_vue_type_style_index_0_id_14f67392_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=style&index=0&id=14f67392&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_JsonPlaceHolderImages_vue_vue_type_style_index_0_id_a29bf4c4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/JsonPlaceHolderImages.vue?vue&type=style&index=0&id=a29bf4c4&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/home/ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/home/ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListUsers_vue_vue_type_style_index_0_id_c8a61e76_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/ListUsers.vue?vue&type=style&index=0&id=c8a61e76&lang=css");


/***/ }),

/***/ "./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisteredUsersFavoriteImages_vue_vue_type_style_index_0_id_c798a296_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/home/RegisteredUsersFavoriteImages.vue?vue&type=style&index=0&id=c798a296&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/ui/Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ui/Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_22b45c60_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ui/Card.vue?vue&type=style&index=0&id=22b45c60&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_b3c5cf30_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Home.vue?vue&type=style&index=0&id=b3c5cf30&scoped=true&lang=css");


/***/ }),

/***/ "./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_TableLite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_TableLite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./TableLite.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=template&id=14f67392&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=template&id=14f67392&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_TableLite_vue_vue_type_template_id_14f67392_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_TableLite_vue_vue_type_template_id_14f67392_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./TableLite.vue?vue&type=template&id=14f67392&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=template&id=14f67392&scoped=true");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=template&id=14f67392&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue3-table-lite/src/components/TableLite.vue?vue&type=template&id=14f67392&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-14f67392"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "vtl vtl-card" }
const _hoisted_2 = {
  key: 0,
  class: "vtl-card-title"
}
const _hoisted_3 = { class: "vtl-card-body" }
const _hoisted_4 = { class: "vtl-row" }
const _hoisted_5 = { class: "col-sm-12" }
const _hoisted_6 = {
  key: 0,
  class: "vtl-loading-mask"
}
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "vtl-loading-content" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { style: {"color":"white"} }, "Loading...")
], -1 /* HOISTED */))
const _hoisted_8 = [
  _hoisted_7
]
const _hoisted_9 = {
  class: "vtl-table vtl-table-hover vtl-table-bordered vtl-table-responsive vtl-table-responsive-sm",
  ref: "localTable"
}
const _hoisted_10 = { class: "vtl-thead" }
const _hoisted_11 = { class: "vtl-thead-tr" }
const _hoisted_12 = {
  key: 0,
  class: "vtl-thead-th vtl-checkbox-th"
}
const _hoisted_13 = ["onClick"]
const _hoisted_14 = {
  key: 0,
  class: "vtl-tbody"
}
const _hoisted_15 = ["onClick"]
const _hoisted_16 = {
  key: 0,
  class: "vtl-tbody-td"
}
const _hoisted_17 = ["value"]
const _hoisted_18 = ["innerHTML"]
const _hoisted_19 = { key: 0 }
const _hoisted_20 = { key: 1 }
const _hoisted_21 = ["onClick"]
const _hoisted_22 = {
  key: 0,
  class: "vtl-tbody-td"
}
const _hoisted_23 = ["value"]
const _hoisted_24 = ["innerHTML"]
const _hoisted_25 = { key: 1 }
const _hoisted_26 = { key: 0 }
const _hoisted_27 = { key: 1 }
const _hoisted_28 = {
  key: 0,
  class: "vtl-paging vtl-row"
}
const _hoisted_29 = { class: "vtl-paging-info col-sm-12 col-md-4" }
const _hoisted_30 = {
  role: "status",
  "aria-live": "polite"
}
const _hoisted_31 = { class: "vtl-paging-change-div col-sm-12 col-md-4" }
const _hoisted_32 = { class: "vtl-paging-count-label" }
const _hoisted_33 = ["value"]
const _hoisted_34 = { class: "vtl-paging-page-label" }
const _hoisted_35 = ["value"]
const _hoisted_36 = { class: "vtl-paging-pagination-div col-sm-12 col-md-4" }
const _hoisted_37 = { class: "dataTables_paginate" }
const _hoisted_38 = { class: "vtl-paging-pagination-ul vtl-pagination" }
const _hoisted_39 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "«", -1 /* HOISTED */))
const _hoisted_40 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "First", -1 /* HOISTED */))
const _hoisted_41 = [
  _hoisted_39,
  _hoisted_40
]
const _hoisted_42 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "<", -1 /* HOISTED */))
const _hoisted_43 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Prev", -1 /* HOISTED */))
const _hoisted_44 = [
  _hoisted_42,
  _hoisted_43
]
const _hoisted_45 = ["onClick"]
const _hoisted_46 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, ">", -1 /* HOISTED */))
const _hoisted_47 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Next", -1 /* HOISTED */))
const _hoisted_48 = [
  _hoisted_46,
  _hoisted_47
]
const _hoisted_49 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "»", -1 /* HOISTED */))
const _hoisted_50 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Last", -1 /* HOISTED */))
const _hoisted_51 = [
  _hoisted_49,
  _hoisted_50
]
const _hoisted_52 = {
  key: 1,
  class: "vtl-row"
}
const _hoisted_53 = { class: "vtl-empty-msg col-sm-12 text-center" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (_ctx.title)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1 /* TEXT */))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
          (_ctx.isLoading)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, _hoisted_8))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_9, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_10, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_11, [
                (_ctx.hasCheckbox)
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", _hoisted_12, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                          type: "checkbox",
                          class: "vtl-thead-checkbox",
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.setting.isCheckAll) = $event))
                        }, null, 512 /* NEED_PATCH */), [
                          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.setting.isCheckAll]
                        ])
                      ])
                    ]))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.columns, (col, index) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-thead-th", col.headerClasses]),
                    key: index,
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(
                    Object.assign(
                      { width: col.width ? col.width : 'auto' },
                      col.headerStyles
                    )
                  )
                  }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-thead-column", {
                      'vtl-sortable': col.sortable,
                      'vtl-both': col.sortable,
                      'vtl-asc': _ctx.setting.order === col.field && _ctx.setting.sort === 'asc',
                      'vtl-desc': _ctx.setting.order === col.field && _ctx.setting.sort === 'desc',
                    }]),
                      onClick: $event => (col.sortable ? _ctx.doSort(col.field) : false)
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(col.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_13)
                  ], 6 /* CLASS, STYLE */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            (_ctx.rows.length > 0)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", _hoisted_14, [
                  (_ctx.isStaticMode)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.localRows, (row, i) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                          key: i,
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-tbody-tr", typeof _ctx.rowClasses === 'function' ? _ctx.rowClasses(row) : _ctx.rowClasses]),
                          onClick: $event => (_ctx.$emit('row-clicked', row))
                        }, [
                          (_ctx.hasCheckbox)
                            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_16, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                    type: "checkbox",
                                    class: "vtl-tbody-checkbox",
                                    ref_for: true,
                                    ref: 
                          (el) => {
                            _ctx.rowCheckbox[i] = el;
                          }
                        ,
                                    value: row[_ctx.setting.keyColumn],
                                    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.checked && _ctx.checked(...args)))
                                  }, null, 8 /* PROPS */, _hoisted_17)
                                ])
                              ]))
                            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.columns, (col, j) => {
                            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
                              key: j,
                              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-tbody-td", col.columnClasses]),
                              style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(col.columnStyles)
                            }, [
                              (col.display)
                                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                                    key: 0,
                                    innerHTML: col.display(row)
                                  }, null, 8 /* PROPS */, _hoisted_18))
                                : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                                    (_ctx.setting.isSlotMode && _ctx.slots[col.field])
                                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [
                                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, col.field, { value: row }, undefined, true)
                                        ]))
                                      : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row[col.field]), 1 /* TEXT */))
                                  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                            ], 6 /* CLASS, STYLE */))
                          }), 128 /* KEYED_FRAGMENT */))
                        ], 10 /* CLASS, PROPS */, _hoisted_15))
                      }), 128 /* KEYED_FRAGMENT */))
                    : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.rows, (row, i) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                          key: i,
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-tbody-tr", typeof _ctx.rowClasses === 'function' ? _ctx.rowClasses(row) : _ctx.rowClasses]),
                          onClick: $event => (_ctx.$emit('row-clicked', row))
                        }, [
                          (_ctx.hasCheckbox)
                            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_22, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                    type: "checkbox",
                                    class: "vtl-tbody-checkbox",
                                    ref_for: true,
                                    ref: 
                          (el) => {
                            _ctx.rowCheckbox[i] = el;
                          }
                        ,
                                    value: row[_ctx.setting.keyColumn],
                                    onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.checked && _ctx.checked(...args)))
                                  }, null, 8 /* PROPS */, _hoisted_23)
                                ])
                              ]))
                            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.columns, (col, j) => {
                            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", {
                              key: j,
                              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-tbody-td", col.columnClasses]),
                              style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(col.columnStyles)
                            }, [
                              (col.display)
                                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                                    key: 0,
                                    innerHTML: col.display(row)
                                  }, null, 8 /* PROPS */, _hoisted_24))
                                : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [
                                    (_ctx.setting.isSlotMode && _ctx.slots[col.field])
                                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [
                                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, col.field, { value: row }, undefined, true)
                                        ]))
                                      : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row[col.field]), 1 /* TEXT */))
                                  ]))
                            ], 6 /* CLASS, STYLE */))
                          }), 128 /* KEYED_FRAGMENT */))
                        ], 10 /* CLASS, PROPS */, _hoisted_21))
                      }), 128 /* KEYED_FRAGMENT */))
                ]))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ], 512 /* NEED_PATCH */)
        ])
      ]),
      (_ctx.rows.length > 0)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, [
            (!_ctx.setting.isHidePaging)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.stringFormat(_ctx.messages.pagingInfo, _ctx.setting.offset, _ctx.setting.limit, _ctx.total)), 1 /* TEXT */)
                  ]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.messages.pageSizeChangeLabel), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
                      class: "vtl-paging-count-dropdown",
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((_ctx.setting.pageSize) = $event))
                    }, [
                      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.pageOptions, (pageOption) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                          value: pageOption.value,
                          key: pageOption.value
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pageOption.text), 9 /* TEXT, PROPS */, _hoisted_33))
                      }), 128 /* KEYED_FRAGMENT */))
                    ], 512 /* NEED_PATCH */), [
                      [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.setting.pageSize]
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.messages.gotoPageLabel), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
                      class: "vtl-paging-page-dropdown",
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((_ctx.setting.page) = $event))
                    }, [
                      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.setting.maxPage, (n) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                          key: n,
                          value: parseInt(n)
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n), 9 /* TEXT, PROPS */, _hoisted_35))
                      }), 128 /* KEYED_FRAGMENT */))
                    ], 512 /* NEED_PATCH */), [
                      [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.setting.page]
                    ])
                  ]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_38, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-paging-pagination-page-li vtl-paging-pagination-page-li-first page-item", { disabled: _ctx.setting.page <= 1 }])
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                            class: "vtl-paging-pagination-page-link vtl-paging-pagination-page-link-first page-link",
                            href: "javascript:void(0)",
                            "aria-label": "Previous",
                            onClick: _cache[5] || (_cache[5] = $event => (_ctx.setting.page = 1))
                          }, _hoisted_41)
                        ], 2 /* CLASS */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-paging-pagination-page-li vtl-paging-pagination-page-li-prev page-item", { disabled: _ctx.setting.page <= 1 }])
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                            class: "vtl-paging-pagination-page-link vtl-paging-pagination-page-link-prev page-link",
                            href: "javascript:void(0)",
                            "aria-label": "Previous",
                            onClick: _cache[6] || (_cache[6] = (...args) => (_ctx.prevPage && _ctx.prevPage(...args)))
                          }, _hoisted_44)
                        ], 2 /* CLASS */),
                        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.setting.paging, (n) => {
                          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-paging-pagination-page-li vtl-paging-pagination-page-li-number page-item", { disabled: _ctx.setting.page === n }]),
                            key: n
                          }, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                              class: "vtl-paging-pagination-page-link vtl-paging-pagination-page-link-number page-link",
                              href: "javascript:void(0)",
                              onClick: $event => (_ctx.movePage(n))
                            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n), 9 /* TEXT, PROPS */, _hoisted_45)
                          ], 2 /* CLASS */))
                        }), 128 /* KEYED_FRAGMENT */)),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-paging-pagination-page-li vtl-paging-pagination-page-li-next page-item", { disabled: _ctx.setting.page >= _ctx.setting.maxPage }])
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                            class: "vtl-paging-pagination-page-link vtl-paging-pagination-page-link-next page-link",
                            href: "javascript:void(0)",
                            "aria-label": "Next",
                            onClick: _cache[7] || (_cache[7] = (...args) => (_ctx.nextPage && _ctx.nextPage(...args)))
                          }, _hoisted_48)
                        ], 2 /* CLASS */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vtl-paging-pagination-page-li vtl-paging-pagination-page-li-last page-item", { disabled: _ctx.setting.page >= _ctx.setting.maxPage }])
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                            class: "vtl-paging-pagination-page-link vtl-paging-pagination-page-link-last page-link",
                            href: "javascript:void(0)",
                            "aria-label": "Next",
                            onClick: _cache[8] || (_cache[8] = $event => (_ctx.setting.page = _ctx.setting.maxPage))
                          }, _hoisted_51)
                        ], 2 /* CLASS */)
                      ])
                    ])
                  ])
                ], 64 /* STABLE_FRAGMENT */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ]))
        : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.messages.noDataAvailable), 1 /* TEXT */)
          ]))
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue3-table-lite/index.js":
/*!***********************************************!*\
  !*** ./node_modules/vue3-table-lite/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_components_TableLite_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/TableLite.vue */ "./node_modules/vue3-table-lite/src/components/TableLite.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_components_TableLite_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);