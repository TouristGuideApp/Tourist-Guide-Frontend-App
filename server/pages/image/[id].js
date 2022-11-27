"use strict";
(() => {
var exports = {};
exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 9152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/searchBarSingleImage.js








const cities = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Berlin",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Rio de Janeiro",
    "Dublin"
];
const SearchBar = ({ searchQuery , setSearchQuery , onFormSubmit , onKeyDown  })=>/*#__PURE__*/ jsx_runtime_.jsx("form", {
        onSubmit: onFormSubmit,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Autocomplete, {
            onInputChange: (e)=>setSearchQuery(e)
            ,
            disableClearable: true,
            value: searchQuery,
            options: cities,
            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
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
function SearchBarSingleImage(props) {
    const { 0: searchQuery , 1: setSearchQuery  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const handleChangeWord = (e)=>{
        setSearchQuery(e.target.value);
    };
    const handleSubmitForm = (e)=>{
        e.preventDefault();
        router.push("/?q=" + searchQuery).then();
    };
    const handleKeyDownSearchBar = (e)=>{
        if (e.keyCode === 31) {
            e.preventDefault();
            router.push("/?q=" + searchQuery).then();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "search-container searchbar",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    alignItems: "center",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    padding: "20px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {
                        searchQuery: searchQuery,
                        setSearchQuery: handleChangeWord,
                        onFormSubmit: handleSubmitForm,
                        onKeyDown: handleKeyDownSearchBar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
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

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: external "@mui/material/Grid"
const Grid_namespaceObject = require("@mui/material/Grid");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/ImageListItem"
var ImageListItem_ = __webpack_require__(4298);
var ImageListItem_default = /*#__PURE__*/__webpack_require__.n(ImageListItem_);
;// CONCATENATED MODULE: external "@mui/material/Card"
const Card_namespaceObject = require("@mui/material/Card");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardContent"
const CardContent_namespaceObject = require("@mui/material/CardContent");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Divider"
const Divider_namespaceObject = require("@mui/material/Divider");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Chip"
const Chip_namespaceObject = require("@mui/material/Chip");
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_namespaceObject);
;// CONCATENATED MODULE: ./pages/image/[id]/index.js












function Specific({ singleCity  }) {
    const { 0: singleCityState , 1: setSingleCityState  } = (0,external_react_.useState)(singleCity);
    console.log(singleCity.tags.length);
    const AllImagesMap = dynamic_default()(null, {
        loadableGenerated: {
            modules: [
                "image/[id]/index.js -> " + "../../../components/specificImagesMap"
            ]
        },
        ssr: false
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SearchBarSingleImage, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "single-city-info-container",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        height: "800px"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                        maxWidth: "xlg",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            container: true,
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    xs: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ImageListItem_default()), {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: singleCity.fileName
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                    xs: 6,
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                                            sx: {
                                                minWidth: 275,
                                                height: "434px",
                                                paddingTop: "30px"
                                            },
                                            className: "card-city-info",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "Photo Title :"
                                                                }),
                                                                " \xa0 ",
                                                                singleCity.title
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                                            variant: "middle"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "Owner Name :"
                                                                }),
                                                                " \xa0 ",
                                                                singleCity.ownerName
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                                            variant: "middle"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "Date Taken :"
                                                                }),
                                                                " \xa0 ",
                                                                singleCity.dateTaken
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                                            variant: "middle"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                children: "Tags :"
                                                            })
                                                        }),
                                                        singleCityState.tags.slice(0, 20).map((tagObj)=>{
                                                            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                                                    label: tagObj.name
                                                                })
                                                            });
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                    xs: 12,
                                    style: {
                                        paddingTop: "5px"
                                    },
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "map-container",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(AllImagesMap, {
                                                mapInfo: singleCity
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _id_ = (Specific);
async function getServerSideProps({ query  }) {
    const cityID = query.id;
    const data = await fetch("http://localhost:8080/api/v1/images/" + cityID);
    let singleImage = await data.json();
    return {
        props: {
            singleCity: singleImage
        }
    };
}


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4298:
/***/ ((module) => {

module.exports = require("@mui/material/ImageListItem");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(9152)));
module.exports = __webpack_exports__;

})();