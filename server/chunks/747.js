"use strict";
exports.id = 747;
exports.ids = [747];
exports.modules = {

/***/ 5747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchBarIndexComp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);







const cities = [
    "Athens",
    "Auschwitz",
    "Jakarta",
    "Russia",
    "Thessaloniki",
    "Seoul"
];
const SearchBar = ({ searchQuery , setSearchQuery , onFormSubmit , onKeyDown  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: onFormSubmit,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Autocomplete, {
            onInputChange: (e)=>setSearchQuery(e)
            ,
            disableClearable: true,
            value: searchQuery,
            options: cities,
            renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...params,
                    id: "search-bar",
                    className: "text",
                    onInput: setSearchQuery,
                    onKeyDown: onKeyDown,
                    value: searchQuery,
                    label: "Enter A City Name",
                    variant: "filled",
                    placeholder: "Search...",
                    size: "small",
                    style: {
                        width: 600,
                        backgroundColor: "white",
                        borderRadius: "5px",
                        fontFamily: "ubuntu"
                    }
                })
        })
    })
;
function SearchBarIndexComp(props) {
    const { 0: searchQuery , 1: setSearchQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleChangeWord = (e)=>{
        setSearchQuery(e.target.value);
    };
    const handleSubmitForm = (e)=>{
        e.preventDefault();
        props.changeWord(searchQuery);
        props.submitForm.call(this, searchQuery);
    };
    const handleKeyDownSearchBar = (e)=>{
        if (e.keyCode === 31) {
            props.changeWord(searchQuery);
            props.submitForm.call(this, searchQuery);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "search-container searchbar",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    alignItems: "center",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    padding: "20px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchBar, {
                        searchQuery: searchQuery,
                        setSearchQuery: handleChangeWord,
                        onFormSubmit: handleSubmitForm,
                        onKeyDown: handleKeyDownSearchBar
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                        "data-testid": "search-button",
                        type: "submit",
                        variant: "contained",
                        onClick: handleSubmitForm,
                        style: {
                            borderRadius: "8px",
                            height: "49px",
                            backgroundColor: "#0E1822",
                            fontFamily: "ubuntu"
                        },
                        children: "Search City"
                    })
                ]
            })
        })
    });
};


/***/ })

};
;