"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-i18next"
const external_next_i18next_namespaceObject = require("next-i18next");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-cookie"
const external_react_cookie_namespaceObject = require("react-cookie");
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Luggage"
const Luggage_namespaceObject = require("@mui/icons-material/Luggage");
var Luggage_default = /*#__PURE__*/__webpack_require__.n(Luggage_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
;// CONCATENATED MODULE: external "@mui/material/Tooltip"
const Tooltip_namespaceObject = require("@mui/material/Tooltip");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Adb"
const Adb_namespaceObject = require("@mui/icons-material/Adb");
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
// EXTERNAL MODULE: external "@mui/material/DialogActions"
var DialogActions_ = __webpack_require__(9404);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);
// EXTERNAL MODULE: external "@mui/material/DialogContent"
var DialogContent_ = __webpack_require__(1094);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);
// EXTERNAL MODULE: external "@mui/material/DialogContentText"
var DialogContentText_ = __webpack_require__(2268);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);
// EXTERNAL MODULE: external "@mui/material/DialogTitle"
var DialogTitle_ = __webpack_require__(2468);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);
;// CONCATENATED MODULE: ./components/loginComponent.js










function LoginComponent({ onClose , onLoginSuccess  }) {
    const { 0: usernameField , 1: setUsernameField  } = (0,external_react_.useState)("");
    const { 0: passwordField , 1: setPasswordField  } = (0,external_react_.useState)("");
    const handleLogin = (e)=>{
        var validator = __webpack_require__(1072);
        if (validator.validate(usernameField)) {
            loginWithEmail();
        } else {
            loginWithUsername();
        }
    };
    function loginWithEmail() {
        var axios = __webpack_require__(2167);
        var data1 = JSON.stringify({
            "email": usernameField,
            "password": passwordField
        });
        var config = {
            method: "post",
            url: "/api/v1/users/login/email",
            headers: {
                "Content-Type": "application/json"
            },
            data: data1
        };
        axios(config).then(function(response) {
            const data = response.data;
            if (data["status"] !== "error") {
                localStorage.setItem("userJWT", data.token);
                localStorage.setItem("userLoggedIn", true);
                onLoginSuccess.call(this);
                return;
            }
        }).catch(function(error) {
            console.log(error);
        });
    }
    function loginWithUsername() {
        var axios = __webpack_require__(2167);
        var data2 = JSON.stringify({
            "username": usernameField,
            "password": passwordField
        });
        var config = {
            method: "post",
            url: "/api/v1/users/login/username",
            headers: {
                "Content-Type": "application/json"
            },
            data: data2
        };
        axios(config).then(function(response) {
            const data = response.data;
            if (data["status"] !== "error") {
                localStorage.setItem("userJWT", data.token);
                localStorage.setItem("userLoggedIn", true);
                onLoginSuccess.call(this);
                return;
            }
        }).catch(function(error) {
            console.log(error);
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
            open: true,
            onClose: onClose,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                    children: "Log In"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                            style: {
                                marginRight: "250px"
                            },
                            children: "Welcome back, dear user."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            autoFocus: true,
                            value: usernameField,
                            onChange: (e)=>setUsernameField(e.target.value)
                            ,
                            margin: "dense",
                            id: "name",
                            label: "Username or Email",
                            type: "text",
                            fullWidth: true,
                            variant: "standard"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            value: passwordField,
                            onChange: (e)=>setPasswordField(e.target.value)
                            ,
                            margin: "dense",
                            id: "password",
                            label: "Password",
                            type: "password",
                            fullWidth: true,
                            variant: "standard"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            onClick: onClose,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            onClick: handleLogin,
                            children: "Log In"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/signupComponent.js










function SignUpComponent({ onClose , onSignUpSuccess  }) {
    const { 0: usernameField , 1: setUsernameField  } = (0,external_react_.useState)("");
    const { 0: emailField , 1: setEmailField  } = (0,external_react_.useState)("");
    const { 0: passwordField , 1: setPasswordField  } = (0,external_react_.useState)("");
    const { 0: firstNameField , 1: setFirstNameField  } = (0,external_react_.useState)("");
    const { 0: lastNameField , 1: setLastNameField  } = (0,external_react_.useState)("");
    function handleSignUp() {
        var axios = __webpack_require__(2167);
        var data = JSON.stringify({
            "firstName": firstNameField,
            "lastName": lastNameField,
            "email": emailField,
            "password": passwordField,
            "username": usernameField,
            "disabled": 0,
            "isAdmin": 0
        });
        var config = {
            method: "post",
            url: "http://127.0.0.1:8080/api/v1/users/add",
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        axios(config).then(function(response) {
            console.log(JSON.stringify(response.data));
            handleLoginAfterSignUp();
        }).catch(function(error) {
            console.log(error);
        });
    }
    function handleLoginAfterSignUp() {
        var axios = __webpack_require__(2167);
        var data1 = JSON.stringify({
            "username": usernameField,
            "password": passwordField
        });
        var config = {
            method: "post",
            url: "http://127.0.0.1:8080/api/v1/users/login/username",
            headers: {
                "Content-Type": "application/json"
            },
            data: data1
        };
        axios(config).then(function(response) {
            const data = response.data;
            localStorage.setItem("userJWT", data.token);
            localStorage.setItem("userLoggedIn", true);
            onSignUpSuccess.call(this);
        }).catch(function(error) {
            console.log(error);
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
            open: true,
            onClose: onClose,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                    children: "Sign up"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                            style: {
                                marginRight: "250px"
                            },
                            children: "Welcome new user!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            value: firstNameField,
                            onChange: (e)=>setFirstNameField(e.target.value)
                            ,
                            autoFocus: true,
                            margin: "dense",
                            id: "firstName",
                            label: "First Name",
                            type: "text",
                            fullWidth: true,
                            variant: "standard"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            value: lastNameField,
                            onChange: (e)=>setLastNameField(e.target.value)
                            ,
                            margin: "dense",
                            id: "lastName",
                            label: "Last Name",
                            type: "text",
                            fullWidth: true,
                            variant: "standard"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            value: emailField,
                            onChange: (e)=>setEmailField(e.target.value)
                            ,
                            margin: "dense",
                            id: "email",
                            label: "Email",
                            type: "email",
                            fullWidth: true,
                            variant: "standard"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            value: usernameField,
                            onChange: (e)=>setUsernameField(e.target.value)
                            ,
                            margin: "dense",
                            id: "username",
                            label: "Username",
                            type: "text",
                            fullWidth: true,
                            variant: "standard"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            value: passwordField,
                            onChange: (e)=>setPasswordField(e.target.value)
                            ,
                            margin: "dense",
                            id: "password",
                            label: "Password",
                            type: "password",
                            fullWidth: true,
                            variant: "standard"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            onClick: onClose,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            onClick: handleSignUp,
                            children: "Sign Up"
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/navigationBar.js




















function NavigationBar() {
    const router = (0,router_.useRouter)();
    const { 0: anchorElUser , 1: setAnchorElUser  } = (0,external_react_.useState)(null);
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    const { 0: displayLoginDialog , 1: setDisplayLoginDialog  } = (0,external_react_.useState)(false);
    const { 0: displaySignupDialog , 1: setDisplaySignupDialog  } = (0,external_react_.useState)(false);
    const { 0: userLoggedIn , 1: setUserLoggedIn  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    });
    function handleLogout() {
        localStorage.removeItem("userJWT");
        localStorage.removeItem("userLoggedIn");
        location.href = "/";
    }
    function loginAftereffects() {
        handleCloseUserMenu();
        setDisplayLoginDialog(false);
    }
    function signUpAftereffects() {
        handleCloseUserMenu();
        setDisplaySignupDialog(false);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "static",
                style: {
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    maxWidth: "string",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                        disableGutters: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Luggage_default()), {
                                sx: {
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    mr: 1,
                                    color: "white",
                                    zIndex: 2
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    noWrap: true,
                                    component: "a",
                                    sx: {
                                        mr: 2,
                                        display: {
                                            xs: "none",
                                            md: "flex"
                                        },
                                        fontWeight: 700,
                                        letterSpacing: ".1rem",
                                        fontFamily: "Ubuntu",
                                        textDecoration: "none",
                                        color: "white",
                                        zIndex: 2,
                                        cursor: "pointer"
                                    },
                                    children: "TourGuide"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    color: "white",
                                    zIndex: 2
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    flexGrow: 0,
                                    color: "white",
                                    zIndex: 2
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                        title: "Open settings",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                            onClick: handleOpenUserMenu,
                                            sx: {
                                                p: 0
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                alt: "Remy Sharp",
                                                src: "/static/images/avatar/2.jpg"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                        sx: {
                                            mt: "45px"
                                        },
                                        id: "menu-appbar",
                                        anchorEl: anchorElUser,
                                        anchorOrigin: {
                                            vertical: "top",
                                            horizontal: "right"
                                        },
                                        keepMounted: true,
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "right"
                                        },
                                        open: Boolean(anchorElUser),
                                        onClose: handleCloseUserMenu,
                                        children: [
                                            !userLoggedIn && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        onClick: ()=>setDisplayLoginDialog(true)
                                                        ,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            textAlign: "center",
                                                            children: "Log In"
                                                        })
                                                    }, 0),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        onClick: ()=>setDisplaySignupDialog(true)
                                                        ,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            textAlign: "center",
                                                            children: "Sign Up"
                                                        })
                                                    }, 1)
                                                ]
                                            }),
                                            userLoggedIn && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        onClick: ()=>router.push("/collections").then()
                                                        ,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            textAlign: "center",
                                                            children: "Collections"
                                                        })
                                                    }, 0),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        onClick: handleLogout,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            textAlign: "center",
                                                            children: "Log Out"
                                                        })
                                                    }, 2)
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            displayLoginDialog && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(LoginComponent, {
                    onClose: ()=>setDisplayLoginDialog(false)
                    ,
                    onLoginSuccess: loginAftereffects
                })
            }),
            displaySignupDialog && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(SignUpComponent, {
                    onClose: ()=>setDisplaySignupDialog(false)
                    ,
                    onSignUpSuccess: signUpAftereffects
                })
            })
        ]
    });
}
/* harmony default export */ const navigationBar = (NavigationBar);

;// CONCATENATED MODULE: ./pages/_app.js









function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_cookie_namespaceObject.CookiesProvider, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(navigationBar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const _app = ((0,external_next_i18next_namespaceObject.appWithTranslation)(MyApp));


/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

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

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 9404:
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContentText");

/***/ }),

/***/ 2468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1072:
/***/ ((module) => {

module.exports = require("email-validator");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(9821)));
module.exports = __webpack_exports__;

})();